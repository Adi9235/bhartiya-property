import type { Metadata } from 'next';
import { Check } from 'lucide-react';

import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { ServicesGrid } from '@/components/sections/services-grid';
import { CallToAction } from '@/components/sections/cta';
import { FaqSection } from '@/components/sections/faq-section';
import { JsonLd } from '@/components/shared/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, servicesSchema } from '@/lib/schema';
import { services } from '@/data/services';

export const metadata: Metadata = buildMetadata({
  title: 'Property Services in Ghaziabad — Industrial, Commercial, Auction & Rental',
  description:
    'Industrial sheds and plots, commercial frontage, residential sale and purchase, rental assistance, investment consulting and bank auction property advisory across Ghaziabad.',
  path: '/services',
  keywords: [
    'industrial shed for sale Sahibabad',
    'bank auction property advisory',
    'rental assistance Ghaziabad',
    'investment consulting real estate Ghaziabad',
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight services. One consultancy that has done all of them for decades."
        description="Every engagement begins with a written scope and an agreed fee, so you know what you are paying for before any work starts."
        crumbs={[{ name: 'Services', href: '/services' }]}
      />

      <ServicesGrid showHeading={false} className="pt-16 md:pt-20" />

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="In detail" title="What each service actually includes." />

          <div className="mt-14 space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={Math.min(index * 0.05, 0.25)}>
                  <article
                    id={service.slug}
                    className="grid scroll-mt-28 gap-8 rounded-2xl border border-sand bg-ivory p-8 md:grid-cols-[1fr_1fr] md:p-10"
                  >
                    <div>
                      <span className="grid size-12 place-items-center rounded-xl bg-white text-indigo_ink-700 shadow-soft">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-6 font-display text-2xl tracking-tight text-indigo_ink-900">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-pretty leading-relaxed text-muted">
                        {service.detail}
                      </p>
                    </div>
                    <div className="md:border-l md:border-sand md:pl-10">
                      <h4 className="text-eyebrow font-semibold uppercase text-sindoor-600">
                        Included
                      </h4>
                      <ul className="mt-5 space-y-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[0.9375rem] text-indigo_ink-800"
                          >
                            <Check
                              className="mt-1 size-4 shrink-0 text-sindoor-600"
                              strokeWidth={3}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
      <FaqSection />
      <JsonLd id="schema-services" data={servicesSchema} />
      <JsonLd
        id="schema-breadcrumb-services"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
    </>
  );
}
