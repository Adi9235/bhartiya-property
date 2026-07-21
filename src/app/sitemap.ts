import type { MetadataRoute } from 'next';

import { policyLinks } from '@/lib/site-config';
import { absoluteUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const primary: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/services'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/contact'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const legal: MetadataRoute.Sitemap = policyLinks.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [...primary, ...legal];
}
