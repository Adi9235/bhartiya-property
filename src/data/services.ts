import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Factory,
  Gavel,
  Home,
  KeyRound,
  Landmark,
  ScrollText,
  TrendingUp,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  icon: LucideIcon;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: 'industrial-property',
    title: 'Industrial Property',
    summary: 'Plots, sheds and factory units across UPSIDC and the Site II / Site IV belt.',
    detail:
      'We work the Ghaziabad industrial belt every day. That means we know which sheds are genuinely vacant, which plots carry conversion issues, and what a fair rate per square yard looks like on each road. We handle plot and shed transactions from first shortlist to registry.',
    icon: Factory,
    deliverables: [
      'Plot, shed and factory unit sourcing',
      'Rate benchmarking by road and sector',
      'Land use and conversion status check',
      'Coordination with the seller and registry office',
    ],
  },
  {
    slug: 'bank-auction-property',
    title: 'Bank Auction Property',
    summary: 'Our specialisation. SARFAESI and DRT auction properties, screened end to end.',
    detail:
      'Auction property is where most buyers lose money on paperwork they did not read. We track e-auction notices across banks, verify possession status, check for pending dues and occupancy, and walk you through EMD, bid strategy and post-auction formalities.',
    icon: Gavel,
    deliverables: [
      'Auction notice tracking and shortlisting',
      'Physical vs symbolic possession verification',
      'Dues, encumbrance and occupancy check',
      'EMD, bidding and post-auction handholding',
    ],
  },
  {
    slug: 'commercial-property',
    title: 'Commercial Property',
    summary: 'Showrooms, offices, godowns and retail frontage on high-footfall corridors.',
    detail:
      'Commercial decisions live or die on footfall, frontage and parking. We shortlist on those numbers first, then on price, and we tell you plainly when a unit is priced above what its catchment can support.',
    icon: Building2,
    deliverables: [
      'Showroom, office and godown sourcing',
      'Footfall and frontage assessment',
      'Lease structuring and rent benchmarking',
      'Tenant and landlord representation',
    ],
  },
  {
    slug: 'residential-sale',
    title: 'Residential Sale',
    summary: 'List your house, flat or plot and reach genuinely qualified buyers.',
    detail:
      'We price your property against real transacted rates in your colony, not asking rates. Then we filter enquiries so you only meet buyers who are ready and funded.',
    icon: Home,
    deliverables: [
      'Valuation against transacted rates',
      'Photography and listing preparation',
      'Buyer screening and site visits',
      'Negotiation and closure support',
    ],
  },
  {
    slug: 'residential-purchase',
    title: 'Residential Purchase',
    summary: 'Find the right home with the title, approvals and neighbourhood checked first.',
    detail:
      'We shortlist against your budget, commute and family needs, then verify chain of title, approvals and society dues before you pay any token amount.',
    icon: KeyRound,
    deliverables: [
      'Requirement mapping and shortlist',
      'Chain of title and approval check',
      'Site visit scheduling',
      'Token, agreement and registry support',
    ],
  },
  {
    slug: 'rental-assistance',
    title: 'Rental Assistance',
    summary: 'Tenants and landlords matched, with agreements that actually hold up.',
    detail:
      'For landlords we screen tenants and handle documentation. For tenants we find units that match budget and commute. Rent agreements are drafted properly, with clear lock-in, notice and maintenance terms.',
    icon: ScrollText,
    deliverables: [
      'Tenant screening and background checks',
      'Rent and deposit benchmarking',
      'Rent agreement drafting and registration',
      'Handover inventory and inspection',
    ],
  },
  {
    slug: 'investment-consulting',
    title: 'Investment Consulting',
    summary: 'Where to put capital in the Ghaziabad belt, and where not to.',
    detail:
      'Twenty-five years in one market gives you a long memory of what appreciated and what stayed flat. We give you a written view on entry price, likely holding period and exit liquidity before you commit.',
    icon: TrendingUp,
    deliverables: [
      'Corridor and micro-market analysis',
      'Entry price and holding period view',
      'Rental yield estimation',
      'Exit liquidity assessment',
    ],
  },
  {
    slug: 'property-consultation',
    title: 'Property Consultation',
    summary: 'Documentation, valuation and dispute guidance from a registered consultancy.',
    detail:
      'Sometimes you do not need a deal, you need an answer. Bring us a title chain, a mutation problem, a valuation question or a builder agreement and we will tell you where you stand.',
    icon: Landmark,
    deliverables: [
      'Document and title review',
      'Independent valuation opinion',
      'Mutation and dakhil kharij guidance',
      'Home loan and bank coordination',
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
