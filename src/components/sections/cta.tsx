import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { siteConfig } from '@/lib/site-config';
import { whatsappLink } from '@/lib/utils';

export function CallToAction() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="grain-overlay relative isolate overflow-hidden rounded-2xl bg-brand-gradient px-8 py-16 text-ivory md:px-16 md:py-20">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-96 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <p className="text-eyebrow font-semibold uppercase text-sindoor-200">
                Start the conversation
              </p>
              <h2 className="mt-5 text-balance text-display-lg">
                Send us the requirement. We will tell you what it actually costs.
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-ivory/75">
                Budget, corridor and timeline are enough to begin. You will get a considered
                response, usually the same working day.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">
                    Send an enquiry
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
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
