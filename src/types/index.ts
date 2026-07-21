/**
 * Shared application types.
 *
 * Content types (Service, Area, Faq, Stat) are colocated with their data in `src/data/*`.
 * This file is for cross-cutting types as the app grows — property listings, leads, users.
 */

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  intent: string;
  propertyType: string;
  budget?: string;
  locality?: string;
  message: string;
  receivedAt: string;
  source: string;
}

export interface NavItem {
  label: string;
  href: string;
}
