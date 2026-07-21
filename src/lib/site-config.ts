/**
 * Single source of truth for business facts.
 * All values are taken from the Udyam (MSME) registration certificate
 * UDYAM-UP-29-0156958 and the official business card.
 */

import { envOr } from '@/lib/utils';

export const siteConfig = {
  name: 'Bhartiya Property',
  legalName: 'Bhartiya Property',
  wordmarkHindi: 'भारतीय प्रॉपर्टीज',
  tagline: 'A to Z Property Solutions',
  shortDescription:
    'Industrial, commercial and residential property consultancy across the Ghaziabad industrial belt since 2000.',
  description:
    'Bhartiya Property is a Udyam-registered property consultancy based in Ghaziabad, Uttar Pradesh. We handle sale, purchase and rental of industrial, commercial and residential property across UPSIDC, Site II, Site IV, MGR Road and the wider Ghaziabad belt, and we specialise in bank auction and bank-financed property.',
  url: envOr(process.env.NEXT_PUBLIC_SITE_URL, 'https://bhartiyaproperty.in'),
  ogImage: '/images/og-image.png',
  founded: '2000',
  proprietor: 'Mohd Asraf',
  proprietorRole: 'Founder & Principal Consultant',

  /**
   * Site imagery. Change a path here and it updates everywhere that image is used.
   * To swap the founder photo, either overwrite public/images/founder.jpg keeping the
   * filename, or drop in a new file and point this at it.
   */
  images: {
    founder: '/images/founder.jpg',
    hero: '/images/hero-ghaziabad.svg',
  },

  contact: {
    phone: envOr(process.env.NEXT_PUBLIC_PHONE, '918178556116'),
    phoneDisplay: '+91 81785 56116',
    whatsapp: envOr(process.env.NEXT_PUBLIC_WHATSAPP, '918178556116'),
    email: envOr(process.env.NEXT_PUBLIC_EMAIL, 'asrafmohd@gmail.com'),
    hours: 'Monday to Saturday, 9:30 AM to 7:30 PM. Sunday by appointment.',
  },

  registration: {
    udyam: 'UDYAM-UP-29-0156958',
    enterpriseType: 'Micro Enterprise (Proprietorship)',
    nic: 'NIC 68200 — Real estate activities on a fee or contract basis',
    registeredOn: '10 January 2025',
    incorporatedOn: '04 May 2000',
    districtIndustriesCentre: 'Ghaziabad, Uttar Pradesh',
  },

  address: {
    label: 'Head Office',
    line1: '7/9, Site-2, Industrial Area',
    line2: 'Karehra, Mohan Nagar',
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    postalCode: '201007',
    country: 'IN',
    countryName: 'India',
    full: '7/9, Site-2, Industrial Area, Karehra, Mohan Nagar, Ghaziabad, Uttar Pradesh 201007',
    /** From the Udyam certificate. Verify against Google Maps before relying on it. */
    geo: { lat: 28.802162693944922, lng: 77.51818669387899 },
  },

  branches: [
    {
      label: 'Sahibabad Branch',
      address: '104, Jhandapur, Opposite CEL, Sahibabad Site-IV, Ghaziabad, Uttar Pradesh',
    },
    {
      label: 'Masoori Branch',
      address: 'G-425, MGR Road, Masoori, Hapur–Ghaziabad, Uttar Pradesh',
    },
    {
      label: 'Lal Kuan Branch',
      address: 'Lal Kuan, near Silver City, Verma Crane, Ghaziabad, Uttar Pradesh',
    },
  ],

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/#areas' },
  { label: 'Contact', href: '/contact' },
] as const;

export const policyLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Shipping & Delivery', href: '/shipping-and-delivery' },
  { label: 'Disclaimer', href: '/disclaimer' },
] as const;
