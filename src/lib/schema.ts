import { siteConfig } from '@/lib/site-config';
import { absoluteUrl } from '@/lib/utils';
import { services } from '@/data/services';
import { areas } from '@/data/areas';
import { faqs } from '@/data/faqs';

const phone = `+${siteConfig.contact.phone}`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  alternateName: siteConfig.wordmarkHindi,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/images/logo.svg'),
  image: absoluteUrl(siteConfig.ogImage),
  description: siteConfig.description,
  foundingDate: '2000-05-04',
  founder: { '@type': 'Person', name: siteConfig.proprietor },
  identifier: {
    '@type': 'PropertyValue',
    name: 'Udyam Registration Number',
    value: siteConfig.registration.udyam,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
      email: siteConfig.contact.email,
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': absoluteUrl('/#localbusiness'),
  name: siteConfig.name,
  description: siteConfig.description,
  url: absoluteUrl('/'),
  telephone: phone,
  email: siteConfig.contact.email,
  image: absoluteUrl(siteConfig.ogImage),
  logo: absoluteUrl('/images/logo.svg'),
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank transfer, UPI, cheque',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.address.geo.lat,
    longitude: siteConfig.address.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:30',
    },
  ],
  areaServed: areas.map((area) => ({
    '@type': 'Place',
    name: `${area.name}, Ghaziabad`,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Property consultancy services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title, description: service.summary },
    })),
  },
  parentOrganization: { '@id': absoluteUrl('/#organization') },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: absoluteUrl('/'),
  name: siteConfig.name,
  inLanguage: 'en-IN',
  publisher: { '@id': absoluteUrl('/#organization') },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.detail,
      serviceType: service.title,
      provider: { '@id': absoluteUrl('/#localbusiness') },
      areaServed: { '@type': 'City', name: 'Ghaziabad' },
    },
  })),
};
