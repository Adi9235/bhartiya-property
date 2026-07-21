'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';

import { siteConfig } from '@/lib/site-config';
import { whatsappLink } from '@/lib/utils';

const defaultMessage =
  'Hello Bhartiya Property, I found you on your website. I would like to discuss a property requirement.';

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-[17rem] rounded-2xl border border-sand bg-white/90 p-5 shadow-lift backdrop-blur-xl"
          >
            <p className="font-display text-base text-indigo_ink-900">Talk to us directly</p>
            <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
              {siteConfig.contact.hours}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={whatsappLink(siteConfig.contact.whatsapp, defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0f7167]"
              >
                <MessageCircle className="size-4" />
                Message on WhatsApp
              </a>
              <a
                href={`tel:+${siteConfig.contact.phone}`}
                className="flex items-center gap-2 rounded-xl border border-sand px-4 py-3 text-sm font-semibold text-indigo_ink-800 transition hover:bg-indigo_ink-50"
              >
                <Phone className="size-4" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        initial={false}
        animate={{ opacity: visible || open ? 1 : 0, scale: visible || open ? 1 : 0.8 }}
        transition={{ duration: 0.25 }}
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:brightness-95"
        style={{ pointerEvents: visible || open ? 'auto' : 'none' }}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </motion.button>
    </div>
  );
}
