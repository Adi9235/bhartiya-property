import type { Metadata } from 'next';

import { LegalShell } from '@/components/shared/legal-shell';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Bhartiya Property collects, uses, stores and protects the personal information you share with us through this website, WhatsApp or in person.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="What we collect, why we collect it, and what we will never do with it."
      path="/privacy-policy"
      updated="21 July 2026"
    >
      <h2>1. Who we are</h2>
      <p>
        This website is operated by {siteConfig.legalName}, a proprietorship registered with the
        Ministry of Micro, Small and Medium Enterprises under Udyam Registration Number{' '}
        {siteConfig.registration.udyam}, with its head office at {siteConfig.address.full}. In this
        policy, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to Bhartiya Property.
      </p>
      <p>
        We take the confidentiality of your information seriously. Property transactions involve
        sensitive personal and financial details, and we treat them accordingly.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect only what we need in order to respond to you and to carry out our services.</p>
      <ul>
        <li>
          <strong>Information you give us:</strong> your name, mobile number, email address,
          preferred locality, budget range, property requirement and any details you include in an
          enquiry form, WhatsApp message, phone call or in-person meeting.
        </li>
        <li>
          <strong>Transaction information:</strong> where you engage us for a specific transaction,
          documents and details relevant to that transaction, such as identity documents, title
          papers or loan correspondence, shared voluntarily by you.
        </li>
        <li>
          <strong>Technical information:</strong> standard server log data such as IP address,
          browser type and pages visited, collected automatically when you use this website.
        </li>
      </ul>
      <p>
        We do not knowingly collect information from children under 18. We do not ask for, and you
        should never send us, banking passwords, OTPs, UPI PINs or card CVV numbers.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry by phone, WhatsApp or email.</li>
        <li>To shortlist properties, arrange site visits and coordinate with counterparties.</li>
        <li>
          To prepare documentation and coordinate with banks, registrars or advocates on your
          instruction.
        </li>
        <li>To maintain internal records of the services we have provided.</li>
        <li>
          To comply with applicable law, including any lawful request from a government authority.
        </li>
      </ul>
      <p>
        We do not sell, rent or trade your personal information. We do not add you to bulk marketing
        databases without your consent, and we do not share your contact details with unrelated
        brokers.
      </p>

      <h2>4. Sharing with third parties</h2>
      <p>
        We share your information only where it is necessary to deliver the service you have asked
        for, and only to the extent required. This may include the counterparty to a transaction,
        banks or lenders where you have asked us to coordinate financing, advocates or document
        writers engaged for your matter, and service providers who host this website or deliver our
        messages. Every such party is expected to handle your information confidentially.
      </p>

      <h2>5. Cookies and analytics</h2>
      <p>
        This website uses only the cookies necessary for it to function. If analytics are enabled,
        they are used in aggregate to understand which pages are useful, and are not used to
        identify individual visitors. You can block or delete cookies through your browser settings
        at any time. Embedded content such as a Google Maps frame may set cookies governed by that
        provider&rsquo;s own policy.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We keep enquiry records for as long as needed to serve you and to maintain a record of our
        dealings, and transaction records for the period required under applicable tax and
        commercial law. When information is no longer needed, we delete or securely destroy it.
      </p>

      <h2>7. Security</h2>
      <p>
        We apply reasonable safeguards to protect your information, including restricted access to
        physical files and encrypted transmission over this website. No system is completely secure,
        and we cannot guarantee absolute security of information transmitted over the internet.
      </p>

      <h2>8. Your rights</h2>
      <ul>
        <li>Ask what personal information we hold about you.</li>
        <li>Ask us to correct information that is inaccurate or out of date.</li>
        <li>Ask us to delete information we no longer need to retain.</li>
        <li>Withdraw consent to further contact, at any time.</li>
      </ul>
      <p>
        To exercise any of these rights, write to{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or call{' '}
        <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>. We
        respond to such requests within a reasonable period, ordinarily within 30 days.
      </p>

      <h2>9. Links to other sites</h2>
      <p>
        This website may link to portals, bank auction notices or government websites. We are not
        responsible for the privacy practices or content of those sites, and we encourage you to
        read their policies before sharing information with them.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The revised version will be published on this
        page with a new &ldquo;last updated&rdquo; date. Continued use of the website after such
        publication constitutes acceptance of the revised policy.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this policy may be sent to {siteConfig.legalName}, {siteConfig.address.full}
        , or emailed to{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </LegalShell>
  );
}
