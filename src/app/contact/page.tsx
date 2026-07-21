import type { Metadata } from 'next';

import { PageHero } from '@/components/shared/page-hero';
import { ContactSection } from '@/components/sections/contact-section';
import { FaqSection } from '@/components/sections/faq-section';
import { JsonLd } from '@/components/shared/json-ld';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Bhartiya Property — Ghaziabad Head Office & Branches',
  description:
    'Call +91 81785 56116, message us on WhatsApp, or visit our head office at 7/9 Site-2, Industrial Area, Karehra, Mohan Nagar, Ghaziabad 201007.',
  path: '/contact',
  keywords: ['contact property dealer Ghaziabad', 'property consultant Mohan Nagar contact'],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need. We will tell you what it takes."
        description="The more specific your requirement, the more useful our first reply will be. Corridor, size and budget are a good place to start."
        crumbs={[{ name: 'Contact', href: '/contact' }]}
      />
      <ContactSection />
      <FaqSection />
      <JsonLd
        id="schema-breadcrumb-contact"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
    </>
  );
}
