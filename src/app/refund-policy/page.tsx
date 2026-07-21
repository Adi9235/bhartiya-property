import type { Metadata } from 'next';

import { LegalShell } from '@/components/shared/legal-shell';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Refund Policy',
  description:
    'When consultancy and brokerage fees paid to Bhartiya Property are refundable, how to raise a refund request, and the timelines we follow.',
  path: '/refund-policy',
});

export default function RefundPolicyPage() {
  return (
    <LegalShell
      title="Refund Policy"
      description="What is refundable, what is not, and how long a refund takes."
      path="/refund-policy"
      updated="21 July 2026"
    >
      <h2>1. Scope</h2>
      <p>
        This policy applies to fees paid directly to {siteConfig.legalName} for consultancy,
        advisory, documentation or brokerage services. It does not apply to money paid to any third
        party, including token amounts or advances paid to a property owner, earnest money deposits
        paid to a bank, stamp duty, registration charges or statutory fees.
      </p>

      <h2>2. Refundable situations</h2>
      <ul>
        <li>
          <strong>Service not commenced.</strong> If you cancel an engagement in writing before we
          begin work, any advance fee paid is refunded in full.
        </li>
        <li>
          <strong>Duplicate or excess payment.</strong> Any amount received in excess of the agreed
          fee, or paid twice for the same service, is refunded in full.
        </li>
        <li>
          <strong>Service not delivered by us.</strong> If we are unable to deliver an agreed
          service for reasons attributable to us, the fee for the undelivered portion is refunded.
        </li>
      </ul>

      <h2>3. Non-refundable situations</h2>
      <ul>
        <li>
          Fees for advisory, site visit, valuation opinion or documentation work already performed.
        </li>
        <li>
          Brokerage that has become payable because the transaction milestone agreed at engagement
          has been reached.
        </li>
        <li>
          Amounts paid by you to any third party, including owners, banks, auctioning authorities,
          advocates or government departments.
        </li>
        <li>
          Situations where the transaction does not proceed because of a decision by you, the
          counterparty, a lender or an authority, after our services have been rendered.
        </li>
        <li>
          Engagements terminated by us because of misrepresentation, non-cooperation or breach of
          our Terms and Conditions by the client.
        </li>
      </ul>

      <h2>4. Partial refunds</h2>
      <p>
        Where work has been partly completed, we refund the balance after deducting a fair charge
        for the work already performed and any out-of-pocket costs incurred on your behalf. The
        deduction is itemised in writing so you can see what has been charged and why.
      </p>

      <h2>5. How to request a refund</h2>
      <p>
        Send a written request to{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>, or by post to{' '}
        {siteConfig.address.full}, within <strong>15 days</strong> of the payment or of the event
        giving rise to the request. Please include your name, registered mobile number, the payment
        date and amount, the transaction or UTR reference, and the reason for the request.
      </p>

      <h2>6. Processing and timelines</h2>
      <ul>
        <li>We acknowledge every refund request within 3 working days.</li>
        <li>We communicate a decision within 7 working days of acknowledgement.</li>
        <li>Approved refunds are initiated within 7 working days of approval.</li>
        <li>
          The amount reaches your account within 5 to 10 working days of initiation, depending on
          your bank or payment provider. Online payment refunds are credited to the original payment
          method.
        </li>
      </ul>

      <h2>7. Deductions</h2>
      <p>
        Payment gateway charges, bank transfer charges and any taxes already deposited with the
        government may be deducted from the refunded amount where they are not recoverable by us.
      </p>

      <h2>8. Disputes</h2>
      <p>
        If you are not satisfied with a refund decision, write to us at{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> marking the
        subject &ldquo;Refund escalation&rdquo;. We review escalations personally at the proprietor
        level. Any unresolved dispute is subject to the exclusive jurisdiction of the courts at
        Ghaziabad, Uttar Pradesh.
      </p>
    </LegalShell>
  );
}
