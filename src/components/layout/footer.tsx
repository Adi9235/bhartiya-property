import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

import { Logo } from '@/components/shared/logo';
import { navigation, policyLinks, siteConfig } from '@/lib/site-config';
import { services } from '@/data/services';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-indigo_ink-900 text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[28rem] rounded-full bg-sindoor-600/20 blur-3xl"
      />
      <div className="container relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/65">
              {siteConfig.shortDescription} Sale, purchase, rent and bank auction property, handled
              by people who work these roads every day.
            </p>
            <dl className="mt-7 space-y-2 text-[0.8125rem] text-ivory/60">
              <div className="flex gap-2">
                <dt className="font-semibold text-ivory/80">Udyam:</dt>
                <dd>{siteConfig.registration.udyam}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-ivory/80">Classification:</dt>
                <dd>{siteConfig.registration.enterpriseType}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-ivory/80">Proprietor:</dt>
                <dd>{siteConfig.proprietor}</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-eyebrow font-semibold uppercase text-sindoor-300">Quick links</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="link-underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="link-underline" href="/sitemap.xml">
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-eyebrow font-semibold uppercase text-sindoor-300">Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link className="link-underline" href={`/services#${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow font-semibold uppercase text-sindoor-300">Head office</h2>
            <address className="mt-5 space-y-4 text-sm not-italic text-ivory/70">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sindoor-300" />
                <span>{siteConfig.address.full}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-sindoor-300" />
                <a className="link-underline" href={`tel:+${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-sindoor-300" />
                <a className="link-underline break-all" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </p>
            </address>
            <h3 className="mt-7 text-eyebrow font-semibold uppercase text-sindoor-300">Branches</h3>
            <ul className="mt-4 space-y-3 text-[0.8125rem] leading-relaxed text-ivory/60">
              {siteConfig.branches.map((branch) => (
                <li key={branch.label}>
                  <span className="font-semibold text-ivory/80">{branch.label}: </span>
                  {branch.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.8125rem] text-ivory/60">
            {policyLinks.map((item) => (
              <li key={item.href}>
                <Link className="link-underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 text-[0.8125rem] text-ivory/50 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {siteConfig.legalName}. All rights reserved.
            </p>
            <p>Proprietorship registered under MSME · {siteConfig.registration.nic}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
