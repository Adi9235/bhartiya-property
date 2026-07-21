import Image from 'next/image';
import { Quote } from 'lucide-react';

import { Reveal } from '@/components/shared/reveal';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site-config';

export function Founder() {
  return (
    <section className="section bg-white" id="founder">
      <div className="container">
        <div className="grid items-center gap-12 rounded-2xl border border-sand bg-ivory p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xs">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-2xl bg-brand-gradient opacity-15 blur-2xl"
              />
              <Image
                src={siteConfig.images.founder}
                alt={`${siteConfig.proprietor}, ${siteConfig.proprietorRole} at ${siteConfig.name}`}
                width={480}
                height={560}
                className="relative aspect-[4/5] w-full rounded-2xl border border-sand bg-white object-cover shadow-soft"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Badge variant="accent">Founder</Badge>
            <Quote className="mt-6 size-8 text-sindoor-200" />
            <blockquote className="mt-4 text-balance font-display text-2xl leading-snug tracking-tight text-indigo_ink-900 md:text-3xl">
              I have sold plots on Site IV to people whose fathers I sold to. That is the only
              reputation worth having in this business, and you do not get it by pushing a bad deal
              to close a month.
            </blockquote>
            <div className="mt-7">
              <p className="font-semibold text-indigo_ink-900">{siteConfig.proprietor}</p>
              <p className="text-sm text-muted">
                {siteConfig.proprietorRole}, {siteConfig.name}
              </p>
            </div>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted">
              Mohd Asraf started Bhartiya Property in 2000 from a single office in Mohan Nagar,
              working industrial plots around Sahibabad. He built the practice around bank and
              auction property, an area most local consultants avoid because the paperwork is
              unforgiving. Today he still personally handles auction cases and industrial land
              matters.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
