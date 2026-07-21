import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { navigation } from '@/lib/site-config';

export default function NotFound() {
  return (
    <section className="grain-overlay relative isolate flex min-h-[70vh] items-center overflow-hidden bg-indigo_ink-900 py-24 text-ivory">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_20%_0%,rgba(42,60,131,0.9),rgba(13,20,51,1))]"
      />
      <div className="container max-w-2xl">
        <p className="font-display text-[6rem] leading-none tracking-tight text-sindoor-400">404</p>
        <h1 className="mt-4 text-display-md">This page is not on our books.</h1>
        <p className="mt-5 leading-relaxed text-ivory/70">
          The link may be old, or the page may have moved. Everything we publish is reachable from
          the pages below.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent" size="lg">
            <Link href="/">
              <ArrowLeft />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="light" size="lg">
            <Link href="/contact">
              <Search />
              Ask us directly
            </Link>
          </Button>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm text-ivory/60">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link className="link-underline" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
