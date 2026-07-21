import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Reads an environment variable, falling back when it is unset OR blank.
 *
 * `process.env.FOO ?? fallback` is not enough: a key declared in .env with no
 * value (`FOO=`) resolves to an empty string, which `??` happily passes through.
 * That is how an empty `src` reaches an iframe.
 */
export function envOr(value: string | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

/** Formats a raw 12-digit number (91XXXXXXXXXX) into +91 XXXXX XXXXX */
export function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, '');
  const local = digits.startsWith('91') ? digits.slice(2) : digits;
  return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
}

export function whatsappLink(number: string, message: string) {
  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = '') {
  const base = envOr(process.env.NEXT_PUBLIC_SITE_URL, 'https://bhartiyaproperty.in');
  return `${base.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}
