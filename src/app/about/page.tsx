import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building, CalendarDays, FileCheck2, MapPinned } from 'lucide-react';

import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Founder } from '@/components/sections/founder';
import { Statistics } from '@/components/sections/statistics';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CallToAction } from '@/components/sections/cta';
import { JsonLd } from '@/components/shared/json-ld';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'About Bhartiya Property — Ghaziabad Property Consultants since 2000',
  description:
    'Bhartiya Property is a Udyam-registered proprietorship operating from Mohan Nagar, Ghaziabad since 2000, with three branch offices across the Sahibabad and MGR Road belt.',
  path: '/about',
  keywords: ['about Bhartiya Property', 'Udyam registered property consultant Ghaziabad'],
});

const timeline = [
  {
    year: '2000',
    title: 'The first office',
    body: 'Bhartiya Property opens in Mohan Nagar, Karehra, working industrial plots and sheds around Sahibabad.',
  },
  {
    year: '2005',
    title: 'Into the estates',
    body: 'Regular work across Durga and Anand Industrial areas as small manufacturers expand across the belt.',
  },
  {
    year: '2010',
    title: 'Bank property specialisation',
    body: 'Auction and bank-financed property becomes a core practice, an area most local consultants avoid.',
  },
  {
    year: '2018',
    title: 'Four offices',
    body: 'Branches at Sahibabad Site-IV, MGR Road Masoori and Lal Kuan bring us within reach of every corridor we cover.',
  },
  {
    year: '2025',
    title: 'Formally registered',
    body: `Udyam registration ${siteConfig.registration.udyam} issued under NIC 68200, real estate activities on a fee or contract basis.`,
  },
];

const credentials = [
  { icon: FileCheck2, label: 'Udyam registration', value: siteConfig.registration.udyam },
  { icon: Building, label: 'Enterprise type', value: siteConfig.registration.enterpriseType },
  { icon: CalendarDays, label: 'Operating since', value: '04 May 2000' },
  { icon: MapPinned, label: 'District Industries Centre', value: 'Ghaziabad, Uttar Pradesh' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Twenty-five years on the same roads."
        description="We are a family-run property consultancy in Ghaziabad. We do not claim national coverage. We claim that nobody reads this belt better."
        crumbs={[{ name: 'About', href: '/about' }]}
      />

      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Started with industrial plots. Still doing the difficult deals."
            />
            <Reveal delay={0.08}>
              <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted">
                <p>
                  Mohd Asraf founded Bhartiya Property in 2000 with a single office at 7/9, Site-2,
                  Industrial Area in Karehra, Mohan Nagar. The first years were spent almost
                  entirely on industrial plots and sheds in Sahibabad, at a time when Site II and
                  Site IV were still filling up.
                </p>
                <p>
                  As the belt grew, so did the practice. Commercial frontage came with SSGT Road,
                  land parcels with the Masoori stretch of MGR Road, and residential resale with
                  Rajendra Nagar. Along the way we took on the work other consultants pass over:
                  bank auction property, where a missed line in an auction notice can cost a buyer
                  everything.
                </p>
                <p>
                  We now run a head office and three branches, and hold a Udyam registration under
                  the Ministry of MSME. The business is deliberately small. Every enquiry is handled
                  by someone who has physically stood on the property in question.
                </p>
              </div>
              <Button asChild className="mt-8">
                <Link href="/contact">
                  Talk to us
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ol>
              {timeline.map((item, index) => {
                const isLast = index === timeline.length - 1;
                return (
                  <li key={item.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="grid size-14 shrink-0 place-items-center rounded-full border border-sand bg-white font-display text-sm font-semibold text-sindoor-600">
                        {item.year}
                      </span>
                      {!isLast ? <span aria-hidden className="my-2 w-px flex-1 bg-sand" /> : null}
                    </div>
                    <div className={`pt-3.5 ${isLast ? '' : 'pb-10'}`}>
                      <h3 className="font-display text-xl tracking-tight text-indigo_ink-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-sand bg-white py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Credentials"
            title="Everything on this page is verifiable."
            description="Our registration details are published here so you can check them against the Udyam portal before you deal with us."
          />
          <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-sand bg-ivory p-7">
                    <Icon className="size-5 text-sindoor-600" />
                    <dt className="mt-5 text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-2 font-semibold leading-snug text-indigo_ink-900">
                      {item.value}
                    </dd>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </section>

      <Statistics />
      <Founder />
      <WhyChooseUs />
      <CallToAction />
      <JsonLd
        id="schema-breadcrumb-about"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
    </>
  );
}
