import type { Metadata } from 'next';

import { LegalShell } from '@/components/shared/legal-shell';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Cancellation Policy',
  description:
    'How to cancel a consultation, site visit or ongoing engagement with Bhartiya Property, and what charges apply at each stage.',
  path: '/cancellation-policy',
});

export default function CancellationPolicyPage() {
  return (
    <LegalShell
      title="Cancellation Policy"
      description="How to cancel an appointment or an engagement, and what it costs at each stage."
      path="/cancellation-policy"
      updated="21 July 2026"
    >
      <h2>1. Cancelling an appointment or site visit</h2>
      <p>
        Site visits and consultations can be cancelled or rescheduled at no charge by informing us
        at least <strong>4 hours</strong> before the scheduled time, by phone at{' '}
        <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a> or on
        WhatsApp. We ask for this notice because a site visit usually involves coordinating an
        owner, a caretaker and travel across the belt.
      </p>
      <p>
        Where a visit involves travel arranged specifically for you and is cancelled with less
        notice, we may recover actual travel costs incurred.
      </p>

      <h2>2. Cancelling an engagement before work begins</h2>
      <p>
        You may cancel any engagement in writing before we start work. Any advance fee paid is
        refunded in full in accordance with our Refund Policy.
      </p>

      <h2>3. Cancelling an engagement after work has begun</h2>
      <ul>
        <li>
          <strong>Shortlisting stage.</strong> Cancellation is accepted with a deduction covering
          site visits already conducted and out-of-pocket costs incurred.
        </li>
        <li>
          <strong>Documentation or verification stage.</strong> Fees for document review, valuation
          opinions and coordination already performed remain payable.
        </li>
        <li>
          <strong>Post-agreement stage.</strong> Once an agreement to sell, lease deed or auction
          bid has been executed or submitted on your instruction, the brokerage or consultancy fee
          for that transaction becomes payable in full and cannot be cancelled.
        </li>
      </ul>

      <h2>4. Cancellation by us</h2>
      <p>
        We may decline or discontinue an engagement where the property has a title defect we are not
        comfortable with, where the information provided to us is materially inaccurate, where we
        are asked to act in a manner that is unlawful or unethical, or where the client is
        non-cooperative. In such cases we refund any fee received for work not yet performed.
      </p>

      <h2>5. Cancellation by a third party</h2>
      <p>
        Where a seller, buyer, tenant, landlord, bank or authority withdraws from a transaction, our
        fee position is governed by the milestone agreed at engagement. We will always tell you
        clearly, at the time of engagement, at what point our fee becomes payable.
      </p>

      <h2>6. How to cancel</h2>
      <p>
        Send a written cancellation to{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or by WhatsApp
        to <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>,
        stating your name, registered mobile number and the engagement concerned. We acknowledge
        every cancellation within 3 working days and confirm the applicable charges, if any, at the
        same time.
      </p>

      <h2>7. Related policies</h2>
      <p>
        Refunds arising from a cancellation are handled under our Refund Policy. The overall terms
        of engagement are set out in our Terms and Conditions.
      </p>
    </LegalShell>
  );
}
