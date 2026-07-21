import type { Metadata } from 'next';

import { Hero } from '@/components/sections/hero';
import { Statistics } from '@/components/sections/statistics';
import { AboutPreview } from '@/components/sections/about-preview';
import { ServicesGrid } from '@/components/sections/services-grid';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { AreasServed } from '@/components/sections/areas-served';
import { Founder } from '@/components/sections/founder';
import { CallToAction } from '@/components/sections/cta';
import { FaqSection } from '@/components/sections/faq-section';
import { ContactSection } from '@/components/sections/contact-section';
import { JsonLd } from '@/components/shared/json-ld';
import { buildMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Property Consultants in Ghaziabad — Industrial, Commercial & Bank Auction',
  description:
    'Bhartiya Property is a Udyam-registered property consultancy in Ghaziabad since 2000. Sale, purchase, rent and bank auction property across UPSIDC, Site II, Site IV, MGR Road and SSGT Road.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <AboutPreview />
      <ServicesGrid className="bg-white" />
      <WhyChooseUs />
      <AreasServed />
      <Founder />
      <CallToAction />
      <FaqSection />
      <ContactSection />
      <JsonLd id="schema-faq" data={faqSchema} />
    </>
  );
}
