import type { Metadata } from 'next';

import { siteConfig } from '@/lib/site-config';
import { absoluteUrl } from '@/lib/utils';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [
      'property consultant Ghaziabad',
      'industrial property Ghaziabad',
      'bank auction property Ghaziabad',
      'UPSIDC plot for sale',
      'Sahibabad Site IV shed',
      'commercial property SSGT Road',
      'property dealer Mohan Nagar',
      ...keywords,
    ],
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}
