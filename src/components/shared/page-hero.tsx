import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Crumb {
  name: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  className?: string;
}

export function PageHero({ eyebrow, title, description, crumbs = [], className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'grain-overlay relative isolate overflow-hidden bg-indigo_ink-900 pb-16 pt-16 text-ivory md:pb-20 md:pt-20',
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_15%_0%,rgba(42,60,131,0.9),rgba(13,20,51,1))]"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-0 -z-10 size-80 rounded-full bg-sindoor-600/20 blur-3xl"
      />
      <div className="container">
        {crumbs.length ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.75rem] text-ivory/50">
              <li>
                <Link className="hover:text-ivory" href="/">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" aria-hidden />
                  {index === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-ivory/80">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link className="hover:text-ivory" href={crumb.href}>
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="mt-8 text-eyebrow font-semibold uppercase text-sindoor-300">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-balance text-display-lg">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ivory/70">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
