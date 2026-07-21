import { NextResponse } from 'next/server';

import { contactSchema } from '@/lib/validations/contact';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Very small in-memory rate limiter. Swap for Upstash/Redis when you add CRM. */
const requestLog = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function isRateLimited(key: string) {
  const now = Date.now();
  const hits = (requestLog.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  requestLog.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many enquiries from this connection. Try again in a minute.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not read the request.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Some fields need attention.',
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const { company, ...lead } = parsed.data;
  if (company) {
    // Honeypot tripped. Respond as success so bots do not retry.
    return NextResponse.json({ ok: true });
  }

  const payload = {
    ...lead,
    receivedAt: new Date().toISOString(),
    source: 'website-contact-form',
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('[contact] webhook delivery failed', error);
      return NextResponse.json(
        { ok: false, error: 'We could not deliver your enquiry. Please call or WhatsApp us.' },
        { status: 502 },
      );
    }
  } else {
    console.info('[contact] new lead', payload);
  }

  return NextResponse.json({ ok: true });
}
