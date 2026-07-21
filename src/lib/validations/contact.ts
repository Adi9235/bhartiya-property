import { z } from 'zod';

export const propertyTypes = [
  'Industrial',
  'Commercial',
  'Residential',
  'Bank auction',
  'Land / plot',
  'Not sure yet',
] as const;

export const intents = ['Buy', 'Sell', 'Rent out', 'Rent / lease', 'Consultation'] as const;

export const budgetBands = [
  'Under ₹25 lakh',
  '₹25 lakh – ₹50 lakh',
  '₹50 lakh – ₹1 crore',
  '₹1 crore – ₹5 crore',
  'Above ₹5 crore',
  'Rental / lease enquiry',
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name').max(80, 'Name is too long'),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?91[-\s]?)?[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z
    .string()
    .trim()
    .email('Enter a valid email address')
    .max(120)
    .or(z.literal(''))
    .optional(),
  intent: z.enum(intents, { message: 'Select what you want to do' }),
  propertyType: z.enum(propertyTypes, { message: 'Select a property type' }),
  budget: z.enum(budgetBands).optional(),
  locality: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(10, 'Tell us a little more, at least 10 characters')
    .max(1200, 'Please keep this under 1200 characters'),
  consent: z.boolean().refine((value) => value === true, {
    message: 'Please agree before sending',
  }),
  // Honeypot field. Real users never fill this in.
  company: z.string().max(0).optional(),
});

export type ContactFormValues = z.input<typeof contactSchema>;
export type ContactPayload = z.output<typeof contactSchema>;
