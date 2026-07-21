import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope, Noto_Sans_Devanagari } from 'next/font/google';

import './globals.css';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloat } from '@/components/shared/whatsapp-float';
import { JsonLd } from '@/components/shared/json-ld';
import { localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site-config';
import { absoluteUrl } from '@/lib/utils';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-deva',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Property Consultants in Ghaziabad since 2000`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: 'Real Estate',
  alternates: { canonical: absoluteUrl('/') },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  formatDetection: { telephone: true, address: true, email: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim()
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION.trim() }
    : undefined,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/'),
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Property Consultants in Ghaziabad`,
    description: siteConfig.shortDescription,
    images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Property Consultants in Ghaziabad`,
    description: siteConfig.shortDescription,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export const viewport: Viewport = {
  themeColor: '#0D1433',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${devanagari.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-indigo_ink-800 focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd id="schema-organization" data={organizationSchema} />
        <JsonLd id="schema-localbusiness" data={localBusinessSchema} />
        <JsonLd id="schema-website" data={websiteSchema} />
      </body>
    </html>
  );
}
