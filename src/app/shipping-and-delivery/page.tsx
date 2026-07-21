import type { Metadata } from 'next';

import { LegalShell } from '@/components/shared/legal-shell';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Shipping & Delivery Policy',
  description:
    'Bhartiya Property provides property consultancy services, not physical goods. This page explains how and when our services and documents are delivered.',
  path: '/shipping-and-delivery',
});

export default function ShippingPage() {
  return (
    <LegalShell
      title="Shipping & Delivery Policy"
      description="We deliver services and documents, not parcels. Here is how and when."
      path="/shipping-and-delivery"
      updated="21 July 2026"
    >
      <h2>1. No physical goods</h2>
      <p>
        {siteConfig.legalName} is a property consultancy registered under NIC 68200. We provide
        professional services. We do not sell, ship or courier any physical product, and no shipping
        charges are ever levied by us.
      </p>
      <p>
        This page exists because payment gateways and business verification platforms require a
        stated delivery policy. It describes how our services and deliverables reach you.
      </p>

      <h2>2. What we deliver</h2>
      <ul>
        <li>Property shortlists, rate benchmarks and locality assessments.</li>
        <li>Accompanied site visits within our service area.</li>
        <li>Written valuation opinions and document review notes.</li>
        <li>Drafts and coordination for agreements, rent deeds, registry and mutation.</li>
        <li>Bank auction assessments and process support.</li>
      </ul>

      <h2>3. How deliverables reach you</h2>
      <ul>
        <li>
          <strong>Digitally.</strong> Shortlists, assessments and document drafts are sent by
          WhatsApp or to the email address you provide.
        </li>
        <li>
          <strong>In person.</strong> Physical documents, where applicable, are handed over at our
          head office at {siteConfig.address.full}, or at any of our branch offices, or at the site
          where the transaction takes place.
        </li>
        <li>
          <strong>At the office of an authority.</strong> Registry and mutation formalities are
          completed at the concerned sub-registrar or municipal office, with our representative
          present.
        </li>
      </ul>

      <h2>4. Service timelines</h2>
      <ul>
        <li>
          Enquiry response: ordinarily the same working day, and within 24 hours at the latest.
        </li>
        <li>Initial shortlist: 2 to 5 working days from a confirmed requirement.</li>
        <li>Site visits: usually within 24 to 48 hours for properties in our core corridors.</li>
        <li>Document review notes: 3 to 7 working days from receipt of complete papers.</li>
        <li>Auction assessment: within the timeline of the relevant auction notice.</li>
      </ul>
      <p>
        These are working estimates. Timelines involving banks, registrars, development authorities
        or counterparties are outside our control and can extend for reasons we cannot influence. We
        will keep you informed when they do.
      </p>

      <h2>5. Service area</h2>
      <p>
        We serve Ghaziabad and the surrounding Delhi NCR belt, including UPSIDC, Sahibabad Site II
        and Site IV, MGR Road up to Masoori and Hapur, Durga and Anand Industrial areas, Rajendra
        Nagar, SSGT Road, Mohan Nagar, Karehra and Lal Kuan. Requirements outside this area are
        accepted only where we can genuinely add value.
      </p>

      <h2>6. Delayed or non-delivery</h2>
      <p>
        If a deliverable has not reached you within the timeline communicated, contact us at{' '}
        <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a> or{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. We will
        confirm the position and, where the delay is attributable to us, complete the work or refund
        the relevant fee under our Refund Policy.
      </p>
    </LegalShell>
  );
}
