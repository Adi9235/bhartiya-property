'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';
import { whatsappLink } from '@/lib/utils';
import { areas } from '@/data/areas';

const corridorTicker = [...areas, ...areas];

export function Hero() {
  return (
    <section className="grain-overlay relative isolate overflow-hidden bg-indigo_ink-900 text-ivory">
      <Image
        src={siteConfig.images.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.28]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(42,60,131,0.85),rgba(13,20,51,0.96))]"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 -z-10 size-[32rem] animate-float rounded-full bg-sindoor-600/25 blur-3xl"
      />

      <div className="container relative pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ivory/80 backdrop-blur"
            >
              <ShieldCheck className="size-3.5 text-sindoor-300" />
              Udyam registered · Ghaziabad since 2000
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-balance text-display-xl"
            >
              We know every road
              <span className="block text-sindoor-300">in the Ghaziabad belt.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ivory/75"
            >
              Industrial sheds, commercial frontage, homes and bank auction property. Twenty-five
              years in one market, four offices, and a straight answer on what a property is
              actually worth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">
                  Tell us your requirement
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <a
                  href={whatsappLink(
                    siteConfig.contact.whatsapp,
                    'Hello Bhartiya Property, I would like to discuss a property requirement.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  WhatsApp us
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Signature element: the corridor ledger from the original service board */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel p-7"
          >
            <p className="text-eyebrow font-semibold uppercase text-sindoor-300">Deals in</p>
            <ul className="mt-5 divide-y divide-white/10">
              {areas.slice(0, 6).map((area) => (
                <li
                  key={area.name}
                  className="group flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-sindoor-200"
                >
                  <span className="font-display text-lg tracking-tight">{area.name}</span>
                  <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-ivory/45">
                    {area.type}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/#areas"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sindoor-300 transition hover:gap-3"
            >
              All corridors we cover
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-4">
        <div className="mask-fade-r flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10 text-[0.75rem] uppercase tracking-[0.24em] text-ivory/40">
            {corridorTicker.map((area, index) => (
              <li key={`${area.name}-${index}`} className="whitespace-nowrap">
                {area.name}
                <span className="ml-10 text-sindoor-400">◆</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
