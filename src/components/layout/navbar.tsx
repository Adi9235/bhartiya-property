'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/shared/logo';
import { navigation, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="hidden bg-indigo_ink-900 py-2 text-ivory/80 lg:block">
        <div className="container flex items-center justify-between text-[0.75rem] tracking-tight">
          <p>Udyam registered property consultancy · {siteConfig.registration.udyam}</p>
          <div className="flex items-center gap-6">
            <a className="link-underline" href={`tel:+${siteConfig.contact.phone}`}>
              {siteConfig.contact.phoneDisplay}
            </a>
            <a className="link-underline" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'border-b border-white/50 bg-ivory/80 shadow-soft backdrop-blur-xl'
            : 'border-b border-transparent bg-ivory/40 backdrop-blur-md',
        )}
      >
        <nav className="container flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label={`${siteConfig.name} home`} className="shrink-0">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors',
                      active
                        ? 'bg-indigo_ink-50 text-indigo_ink-800'
                        : 'text-indigo_ink-700/80 hover:bg-indigo_ink-50/70 hover:text-indigo_ink-900',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline" size="sm">
              <a href={`tel:+${siteConfig.contact.phone}`}>
                <Phone />
                Call now
              </a>
            </Button>
            <Button asChild size="sm">
              <Link href="/contact">Book a consultation</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Links to every page on the Bhartiya Property website.
              </SheetDescription>
              <Logo />
              <ul className="mt-2 flex flex-col">
                {navigation.map((item) => (
                  <li key={item.href} className="border-b border-sand/70">
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="block py-4 font-display text-xl tracking-tight text-indigo_ink-900"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild size="lg">
                  <a href={`tel:+${siteConfig.contact.phone}`}>
                    <Phone />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Send an enquiry</Link>
                </Button>
                <p className="text-xs leading-relaxed text-muted">{siteConfig.address.full}</p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </motion.header>
    </>
  );
}
