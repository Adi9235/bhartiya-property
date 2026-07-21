import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.shortDescription,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#FAF7F2',
    theme_color: '#0D1433',
    lang: 'en-IN',
    categories: ['business', 'finance', 'real estate'],
    icons: [
      { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
