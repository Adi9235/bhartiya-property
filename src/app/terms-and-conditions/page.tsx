import type { Metadata } from 'next';

import { LegalShell } from '@/components/shared/legal-shell';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description:
    'The terms that govern your use of the Bhartiya Property website and the property consultancy services we provide in Ghaziabad, Uttar Pradesh.',
  path: '/terms-and-conditions',
});

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      description="The basis on which we provide our services and on which you may use this website."
      path="/terms-and-conditions"
      updated="21 July 2026"
    >
      <h2>1. Acceptance</h2>
      <p>
        By accessing this website or engaging {siteConfig.legalName} for any service, you agree to
        these Terms and Conditions. If you do not agree with any part of them, please do not use the
        website or our services.
      </p>

      <h2>2. Nature of our services</h2>
      <p>
        Bhartiya Property is a property consultancy and intermediary registered under NIC 68200,
        real estate activities on a fee or contract basis. We introduce buyers, sellers, landlords
        and tenants, advise on valuation and locality, assist with documentation, and support
        clients through bank auction processes.
      </p>
      <p>
        We are <strong>not</strong> a developer, promoter, builder, bank, non-banking financial
        company or law firm. We do not construct, own or guarantee any property, we do not lend
        money, and we do not provide legal or investment advice within the meaning of any statute.
      </p>

      <h2>3. Enquiries and engagement</h2>
      <p>
        Submitting an enquiry through this website does not create a binding engagement. A service
        relationship begins only when the scope of work and the fee have been agreed between you and
        us, in writing or over a recorded communication such as email or WhatsApp.
      </p>

      <h2>4. Fees</h2>
      <ul>
        <li>Our brokerage or consultancy fee is agreed in advance for each engagement.</li>
        <li>
          Unless expressly stated otherwise, fees are exclusive of applicable taxes, statutory
          charges, stamp duty, registration fees and third-party costs.
        </li>
        <li>
          Fees become payable on the milestone agreed at the time of engagement, ordinarily on
          execution of the agreement to sell, lease deed or sale deed.
        </li>
        <li>
          Payments must be made only to the account of {siteConfig.legalName} notified to you in
          writing. We never ask clients to transfer money to a personal account of any staff member.
        </li>
      </ul>

      <h2>5. Property information</h2>
      <p>
        Information about any property, including area, rate, approvals, possession status and dues,
        is obtained from owners, banks, public notices and other third-party sources. We take
        reasonable care to verify it, but we do not warrant its accuracy or completeness.
      </p>
      <p>
        <strong>You must satisfy yourself independently</strong> as to title, approvals,
        encumbrances, measurements and legal status before committing funds. We strongly recommend
        engaging an advocate for title verification on every transaction.
      </p>

      <h2>6. Bank auction properties</h2>
      <p>
        Auction properties are sold by the concerned bank or financial institution under the
        SARFAESI Act, 2002 or through a tribunal, on an &ldquo;as is where is, as is what is&rdquo;
        basis. All terms, timelines, EMD requirements, reserve prices and outcomes are decided
        solely by the auctioning authority. Our role is limited to information, assessment and
        process support. We do not guarantee a successful bid, possession or any particular outcome.
      </p>

      <h2>7. Your obligations</h2>
      <ul>
        <li>Provide accurate information about your identity, requirement and funding position.</li>
        <li>
          Do not bypass us to deal directly with a counterparty we have introduced, for the purpose
          of avoiding our fee.
        </li>
        <li>
          Comply with all applicable law, including tax, foreign exchange and anti-money-laundering
          requirements.
        </li>
        <li>Do not use this website to transmit unlawful, misleading or infringing content.</li>
      </ul>

      <h2>8. Intellectual property</h2>
      <p>
        The Bhartiya Property name, logo, wordmark and the content, layout and design of this
        website are our property or are used with permission. You may not copy, reproduce or reuse
        them without our prior written consent, other than for personal, non-commercial reference.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our aggregate liability arising out of or in
        connection with any engagement is limited to the fee actually received by us for that
        engagement. We are not liable for indirect, incidental or consequential loss, including loss
        of profit, loss of opportunity or loss arising from a decision made by a third party such as
        a bank, authority or counterparty.
      </p>

      <h2>10. Third-party links</h2>
      <p>
        Links to external websites are provided for convenience. We do not control and are not
        responsible for their content, accuracy or availability.
      </p>

      <h2>11. Termination</h2>
      <p>
        Either party may terminate an engagement by written notice. Fees already earned for work
        completed up to the date of termination remain payable.
      </p>

      <h2>12. Governing law and jurisdiction</h2>
      <p>
        These terms are governed by the laws of India. The courts at Ghaziabad, Uttar Pradesh, have
        exclusive jurisdiction over any dispute arising from them or from our services.
      </p>

      <h2>13. Changes</h2>
      <p>
        We may revise these terms at any time. The version published on this page at the time you
        use the website or engage us is the version that applies.
      </p>

      <h2>14. Contact</h2>
      <p>
        {siteConfig.legalName}, {siteConfig.address.full}. Phone{' '}
        <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>, email{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </LegalShell>
  );
}
