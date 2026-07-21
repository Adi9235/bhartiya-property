import type { ReactNode } from 'react';

import { PageHero } from '@/components/shared/page-hero';
import { siteConfig } from '@/lib/site-config';

interface LegalShellProps {
  title: string;
  description: string;
  path: string;
  updated: string;
  children: ReactNode;
}

export function LegalShell({ title, description, path, updated, children }: LegalShellProps) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={description}
        crumbs={[{ name: title, href: path }]}
      />
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-sand bg-white p-6 shadow-soft">
                <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                  Last updated
                </p>
                <p className="mt-1.5 font-semibold text-indigo_ink-900">{updated}</p>
                <div className="mt-6 space-y-1.5 border-t border-sand pt-6 text-[0.8125rem] leading-relaxed text-muted">
                  <p className="font-semibold text-indigo_ink-800">{siteConfig.legalName}</p>
                  <p>{siteConfig.address.full}</p>
                  <p>Udyam: {siteConfig.registration.udyam}</p>
                  <p>
                    <a className="link-underline" href={`tel:+${siteConfig.contact.phone}`}>
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </p>
                  <p className="break-all">
                    <a className="link-underline" href={`mailto:${siteConfig.contact.email}`}>
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            <article className="legal-prose max-w-3xl">{children}</article>
          </div>
        </div>
      </section>
    </>
  );
}
