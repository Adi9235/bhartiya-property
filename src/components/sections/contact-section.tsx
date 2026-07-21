import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import { ContactForm } from '@/components/sections/contact-form';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { siteConfig } from '@/lib/site-config';
import { whatsappLink } from '@/lib/utils';

/**
 * The map is opt-in. Google cannot reliably geocode this plot-number address in the
 * Ghaziabad industrial belt, and a map pointing at the wrong lane is worse than none.
 * Set NEXT_PUBLIC_MAPS_EMBED_URL to a real embed URL to switch it back on — see README.
 */
const mapsEmbed = process.env.NEXT_PUBLIC_MAPS_EMBED_URL?.trim() ?? '';

export function ContactSection() {
  return (
    <section className="section scroll-mt-24 bg-ivory-fade" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Four offices, one number, straight answers."
          description="Send the form, message us on WhatsApp, or simply walk into the head office at Mohan Nagar."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="space-y-6">
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:+${siteConfig.contact.phone}`}
                  className="group flex items-center gap-4 rounded-2xl border border-sand bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-indigo_ink-50 text-indigo_ink-700">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      Call
                    </span>
                    <span className="block font-semibold text-indigo_ink-900">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={whatsappLink(
                    siteConfig.contact.whatsapp,
                    'Hello Bhartiya Property, I would like to discuss a property requirement.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-sand bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="bg-[#25D366]/12 grid size-11 place-items-center rounded-xl text-[#128C7E]">
                    <MessageCircle className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      WhatsApp
                    </span>
                    <span className="block font-semibold text-indigo_ink-900">Message us</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-sand bg-white p-7 shadow-soft">
                <h3 className="font-display text-xl tracking-tight text-indigo_ink-900">
                  {siteConfig.address.label}
                </h3>
                <address className="mt-4 space-y-4 text-[0.9375rem] not-italic leading-relaxed text-muted">
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-sindoor-600" />
                    {siteConfig.address.full}
                  </p>
                  <p className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-sindoor-600" />
                    <a
                      className="link-underline break-all"
                      href={`mailto:${siteConfig.contact.email}`}
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-sindoor-600" />
                    {siteConfig.contact.hours}
                  </p>
                </address>

                <h4 className="mt-7 text-eyebrow font-semibold uppercase text-sindoor-600">
                  Branch offices
                </h4>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  {siteConfig.branches.map((branch) => (
                    <li key={branch.label}>
                      <span className="font-semibold text-indigo_ink-800">{branch.label}: </span>
                      {branch.address}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {mapsEmbed ? (
              <Reveal delay={0.12}>
                <div className="overflow-hidden rounded-2xl border border-sand shadow-soft">
                  <iframe
                    title={`Map showing ${siteConfig.name} head office in Ghaziabad`}
                    src={mapsEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[320px] w-full border-0"
                  />
                </div>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
