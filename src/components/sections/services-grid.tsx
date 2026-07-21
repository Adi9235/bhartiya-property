'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { SectionHeading } from '@/components/shared/section-heading';
import { StaggerGroup, StaggerItem } from '@/components/shared/reveal';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

interface ServicesGridProps {
  limit?: number;
  showHeading?: boolean;
  className?: string;
}

export function ServicesGrid({ limit, showHeading = true, className }: ServicesGridProps) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className={cn('section', className)} id="services">
      <div className="container">
        {showHeading ? (
          <SectionHeading
            eyebrow="What we do"
            title="Eight ways we work on property, all of them hands-on."
            description="Every engagement starts with a written scope and an agreed fee. No surprises at closing."
          />
        ) : null}

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <motion.article
                  id={service.slug}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-sand/80 bg-white p-7 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="grid size-12 place-items-center rounded-xl bg-indigo_ink-50 text-indigo_ink-700 transition-colors duration-300 group-hover:bg-sindoor-600 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl leading-tight tracking-tight text-indigo_ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo_ink-700 transition group-hover:gap-2.5"
                  >
                    Details
                    <ArrowUpRight className="size-4" />
                    <span className="sr-only">about {service.title}</span>
                  </Link>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
