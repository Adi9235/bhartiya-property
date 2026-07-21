import type { Metadata } from 'next';

import { LegalShell } from '@/components/shared/legal-shell';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Disclaimer',
  description:
    'Important limitations on the information published on the Bhartiya Property website, including property details, rates, auction notices and advisory content.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <LegalShell
      title="Disclaimer"
      description="What the information on this website is, and what it is not."
      path="/disclaimer"
      updated="21 July 2026"
    >
      <h2>1. Information only</h2>
      <p>
        Everything published on this website is provided for general information about{' '}
        {siteConfig.legalName} and the services we offer. It does not constitute an offer, an
        invitation to offer, or a representation about any specific property, and it should not be
        relied on as the sole basis for a financial decision.
      </p>

      <h2>2. We are an intermediary</h2>
      <p>
        Bhartiya Property acts as a property consultant and intermediary. We are not a developer,
        promoter, builder, bank, non-banking financial company, insurer or law firm. We do not
        construct, own, guarantee or underwrite any property, and we do not provide legal, tax or
        investment advice within the meaning of any statute.
      </p>

      <h2>3. Property details and rates</h2>
      <p>
        Property information, including area, dimensions, rate, approval status, possession position
        and dues, is collected from owners, banks, public notices and other third-party sources. We
        take reasonable care but cannot guarantee its accuracy, completeness or currency. Rates and
        availability change frequently and without notice.
      </p>
      <p>
        <strong>
          Verify title, approvals, encumbrances and measurements independently, through an advocate,
          before committing any money.
        </strong>
      </p>

      <h2>4. Bank auction properties</h2>
      <p>
        Auction property is sold by the concerned bank or financial institution, ordinarily under
        the SARFAESI Act, 2002, on an &ldquo;as is where is, as is what is, whatever there is&rdquo;
        basis. Reserve prices, EMD requirements, timelines and outcomes are set entirely by the
        auctioning authority. Nothing on this website is an auction notice, and no listing here
        should be treated as a substitute for the official notice published by the bank.
      </p>

      <h2>5. No guarantee of returns</h2>
      <p>
        Any view we express about appreciation, rental yield, holding period or exit liquidity is an
        opinion based on our experience in this market. Property values can fall as well as rise,
        and past performance in a corridor is not a reliable indicator of future performance. We do
        not guarantee any return on any property.
      </p>

      <h2>6. Photographs and visuals</h2>
      <p>
        Images and illustrations used on this website may be representative, and may not depict the
        exact condition, layout or surroundings of any specific property. Where a photograph is of a
        real property, it reflects the condition at the time it was taken.
      </p>

      <h2>7. Third-party content</h2>
      <p>
        Links, embedded maps and references to external sources are provided for convenience. We do
        not control and are not responsible for the accuracy, availability or practices of those
        sources.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.legalName} accepts no liability for any
        loss or damage arising from reliance on information published on this website. Our liability
        in respect of any engagement is governed by our{' '}
        <a href="/terms-and-conditions">Terms and Conditions</a>.
      </p>

      <h2>9. Beware of impersonation</h2>
      <p>
        We communicate only from the number and email published on this website. We never ask for
        OTPs, UPI PINs, card CVV numbers or banking passwords, and we never ask clients to transfer
        funds to a personal account of any staff member. If you receive such a request in our name,
        stop and call us on{' '}
        <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>.
      </p>

      <h2>10. Governing law</h2>
      <p>
        This disclaimer is governed by the laws of India, and the courts at Ghaziabad, Uttar
        Pradesh, have exclusive jurisdiction over any dispute relating to it.
      </p>
    </LegalShell>
  );
}
