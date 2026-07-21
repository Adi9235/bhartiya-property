# Bhartiya Property — Official Website

Production website for **Bhartiya Property** (भारतीय प्रॉपर्टीज), a Udyam-registered property
consultancy operating in Ghaziabad, Uttar Pradesh since 2000.

Built for four jobs: Meta Business verification, Razorpay/Cashfree business verification, Google
local SEO, and lead generation.

- **Udyam Registration:** 
- **NIC classification:** 
- **Head office:** 
- **Phone:**

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15.5 (App Router, Server Components by default) |
| UI runtime | React 19 |
| Language | TypeScript, `strict: true` |
| Styling | Tailwind CSS 3.4 with a custom brand token layer |
| Components | shadcn/ui pattern (Radix primitives + CVA), vendored in `src/components/ui` |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod resolver |
| Tooling | ESLint (next/core-web-vitals) + Prettier + prettier-plugin-tailwindcss |

> **Version note:** Next.js is pinned to `15.5.20`, not `15.1.6`. The earlier 15.1.x line carries a
> published security advisory (CVE-2025-66478). `15.5.20` is the patched Next 15 backport, so you
> stay on Next 15 as intended without shipping a known vulnerability.

---

## Quick start

```bash
# 1. Install dependencies (Node 18.18+ required; Node 20 LTS recommended)
npm install

# 2. Create your local environment file
cp .env.example .env.local

# 3. Run the dev server
npm run dev          # http://localhost:3000
```

### All commands

```bash
npm run dev           # Development server with hot reload
npm run build         # Production build
npm run start         # Serve the production build locally
npm run lint          # ESLint
npm run typecheck     # tsc --noEmit, no output emitted
npm run format        # Prettier write
npm run format:check  # Prettier check (use in CI)
```

> **Note:** `npm run build` needs outbound network access to `fonts.googleapis.com`, because
> `next/font/google` downloads and self-hosts Fraunces, Manrope and Noto Sans Devanagari at build
> time. This works on Vercel and any normal CI. On a firewalled machine the build will fail with a
> `Failed to fetch font` error — that is a network restriction, not a code fault.

---

## Environment variables

Copy `.env.example` to `.env.local` for development, and set the same keys in your Vercel project
settings for production. Every variable is optional except `NEXT_PUBLIC_SITE_URL`, which drives
canonical URLs, the sitemap and Open Graph tags.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | **Yes** | Public origin, no trailing slash. Wrong value breaks canonical URLs and OG images. |
| `NEXT_PUBLIC_PHONE` | No | Phone number in `91XXXXXXXXXX` form. Falls back to the number in `site-config.ts`. |
| `NEXT_PUBLIC_WHATSAPP` | No | WhatsApp number in `91XXXXXXXXXX` form. |
| `NEXT_PUBLIC_EMAIL` | No | Public contact email. |
| `NEXT_PUBLIC_MAPS_EMBED_URL` | No | Google Maps embed `src`. Defaults to a lat/long embed from the Udyam certificate. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification token. |
| `NEXT_PUBLIC_GA_ID` | No | Reserved for analytics; not wired up yet. |
| `LEAD_WEBHOOK_URL` | No | Server-side POST target for form leads (CRM, Zapier, n8n, Google Sheets). |
| `LEAD_NOTIFY_EMAIL` | No | Reserved for the email-notification step. |

**Leads without a webhook:** if `LEAD_WEBHOOK_URL` is empty, `/api/contact` validates the submission
and logs it to the server console. That is fine for launch, but set a webhook before you rely on the
form for real business.

---

## Project structure

```
bhartiya-property/
├── public/
│   ├── favicon.ico / favicon.svg
│   └── images/
│       ├── hero-ghaziabad.svg      # Hero background (PLACEHOLDER — replace)
│       ├── founder.svg             # Founder portrait (PLACEHOLDER — replace)
│       ├── logo.svg                # Standalone brand mark
│       ├── og-image.png            # 1200×630 social card (PLACEHOLDER — replace)
│       ├── icon-192.png / icon-512.png / apple-touch-icon.png
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: fonts, metadata, nav/footer, global JSON-LD
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Tailwind layers, design tokens, .legal-prose
│   │   ├── not-found.tsx           # 404
│   │   ├── sitemap.ts              # Dynamic sitemap.xml
│   │   ├── robots.ts               # Dynamic robots.txt
│   │   ├── manifest.ts             # PWA manifest
│   │   ├── about/ services/ contact/
│   │   ├── privacy-policy/ terms-and-conditions/ refund-policy/
│   │   ├── cancellation-policy/ shipping-and-delivery/ disclaimer/
│   │   └── api/contact/route.ts    # Lead endpoint: Zod validation, honeypot, rate limit
│   ├── components/
│   │   ├── ui/                     # shadcn-style primitives (button, card, input, …)
│   │   ├── layout/                 # navbar, footer
│   │   ├── sections/               # Homepage + page sections
│   │   └── shared/                 # logo, reveal, section-heading, page-hero, json-ld, …
│   ├── data/                       # services, areas, faqs, stats — plain typed content
│   ├── lib/
│   │   ├── site-config.ts          # SINGLE SOURCE OF TRUTH for business facts
│   │   ├── schema.ts               # JSON-LD builders
│   │   ├── seo.ts                  # buildMetadata() helper
│   │   ├── utils.ts                # cn(), formatPhone(), whatsappLink(), absoluteUrl()
│   │   └── validations/contact.ts  # Zod schema shared by client and server
│   ├── hooks/ types/               # Reserved for future features
├── tailwind.config.ts
├── next.config.mjs                 # Security headers, image formats
└── tsconfig.json                   # Strict mode, @/* path alias
```

---

## Where to edit what

**Almost every business fact lives in one file: `src/lib/site-config.ts`.** Phone, email, addresses,
branches, registration details, founder name, hours. Change it there and it propagates to the
navbar, footer, contact page, JSON-LD schema and legal pages.

| To change… | Edit |
| --- | --- |
| Phone, email, address, branches, Udyam details | `src/lib/site-config.ts` |
| Founder photo / hero background | `src/lib/site-config.ts` (`images`) |
| Map (off by default) | `NEXT_PUBLIC_MAPS_EMBED_URL` — see "Turning the map back on" |
| Nav links / footer policy links | `src/lib/site-config.ts` (`navigation`, `policyLinks`) |
| Services (titles, copy, icons, deliverables) | `src/data/services.ts` |
| Areas served | `src/data/areas.ts` |
| FAQs (also feeds FAQPage schema) | `src/data/faqs.ts` |
| Stats, differentiators, process steps | `src/data/stats.ts` |
| Brand colours, fonts, shadows, radii | `tailwind.config.ts` |
| Per-page SEO title/description | The `metadata` export in each `page.tsx` |
| Legal copy | The relevant `src/app/<policy>/page.tsx` |

---

## Design system

The palette is derived from the existing brand, not invented. `sindoor` is the red from the logo and
signage; `indigo_ink` is the deep blue from the business card typography.

| Token | Hex | Use |
| --- | --- | --- |
| `sindoor-600` | `#B81C10` | Primary accent, CTAs, eyebrows |
| `indigo_ink-700` | `#1C2A6B` | Primary buttons, headings on light |
| `indigo_ink-900` | `#0D1433` | Dark sections, hero, footer |
| `ivory` | `#FAF7F2` | Page background |
| `sand` | `#EDE5D8` | Borders, dividers |
| `brass` | `#B08240` | Residential corridor marker |

**Typography:** Fraunces (display, variable, with `SOFT`/`WONK`/`opsz` axes) · Manrope (body) ·
Noto Sans Devanagari (the भारतीय प्रॉपर्टीज wordmark).

**Signature element:** the "Deals In" corridor ledger, lifted directly from the physical service
board and rebuilt as an interactive panel in the hero and a ten-corridor selector in the Areas
section. It's the thing that says *industrial-belt specialist* rather than *generic broker*.

**Utility classes** in `globals.css`: `.glass-card`, `.glass-panel`, `.section`, `.eyebrow`,
`.link-underline`, `.grain-overlay`, `.legal-prose`.

---

## Turning the map back on

The contact page renders no map by default. The markup, styling and lazy-loading are all still in
`src/components/sections/contact-section.tsx` — the block is simply skipped when no embed URL is
configured, so nothing renders and no empty card appears.

To enable it once your location resolves correctly:

1. Create a **Google Business Profile** for Bhartiya Property at the head office address and complete
   verification. This is the step that actually fixes the problem — until Google has a verified
   record at that plot, it will keep approximating the pin.
2. Open [google.com/maps](https://www.google.com/maps), search your business name, then
   **Share → Embed a map**, and copy the value of the `src` attribute from the iframe snippet.
3. Set it as an environment variable, locally and in Vercel:

   ```bash
   NEXT_PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=!1m18!1m12!...
   ```

4. Redeploy. The map section reappears automatically.

Because it is a `NEXT_PUBLIC_*` variable, it is baked in at build time — setting it in Vercel
requires a redeploy, not just a save.

---

## SEO implementation

- Per-page `title`, `description`, keywords, and canonical URLs via `buildMetadata()` in `lib/seo.ts`
- Open Graph + Twitter `summary_large_image` cards
- JSON-LD: `Organization`, `RealEstateAgent` (LocalBusiness) with geo + opening hours + service
  catalogue + `areaServed`, `WebSite`, `FAQPage`, `BreadcrumbList`, and `ItemList` for services
- Dynamic `sitemap.xml` and `robots.txt` (API routes disallowed)
- PWA manifest, favicon set, apple-touch-icon
- Semantic HTML, skip-to-content link, `aria-label`s, visible focus rings, `prefers-reduced-motion`
  honoured throughout

**After deploying,** submit the sitemap in Google Search Console and create a Google Business Profile
with the exact same NAP (name, address, phone) as `site-config.ts`. Inconsistent NAP is the most
common reason local SEO underperforms.

---

## Placeholder assets to replace before verification

These are generated placeholders. They look clean, but Meta and Razorpay reviewers respond better to
real photographs of a real business.

| File | Replace with | Recommended size |
| --- | --- | --- |
| `public/images/hero-ghaziabad.svg` | Photo of the Mohan Nagar office or the industrial belt | 1920×1080 JPG/WebP |
| `public/images/founder.jpg` | Photograph of Mohd Asraf (the business-card photo works) | 480×600 JPG, portrait 4:5 |
| `public/images/og-image.png` | Branded social card, ideally with a real photo | 1200×630 PNG |

### Adding the founder photograph (one place only)

The founder image appears on **both** the homepage and the About page, but it is configured once.

**Easiest — no code change at all:** save your photo as `founder.jpg` and overwrite
`public/images/founder.jpg`. Keep the filename. Both pages pick it up immediately.

**If you want a different filename or format,** change the single line in
`src/lib/site-config.ts`:

```ts
images: {
  founder: '/images/founder.jpg',   // ← change this one line
  hero: '/images/hero-ghaziabad.svg',
},
```

`src/components/sections/founder.tsx` reads `siteConfig.images.founder`, and that component is
what renders on both pages. The same applies to the hero background via `images.hero`.

The image is rendered at a 4:5 portrait aspect ratio with `object-cover`, so a photo that is
roughly 480×600 (or any 4:5 crop) fits without distortion. A wider photo will be centre-cropped.

---

## Known items to resolve

1. **Email address conflict.** The business card reads `bhartiyaprorerty@gmail.com` — a typo
   ("prorerty"). The Udyam certificate reads `asrafmohd@gmail.com`. The site uses the certificate
   address, since that is what verification reviewers cross-check. Before submitting to Meta or
   Razorpay, register a domain mailbox such as `info@bhartiyaproperty.in` and set
   `NEXT_PUBLIC_EMAIL` to it — a Gmail address weakens a business-verification application.
2. **GSTIN.** The Udyam record shows no GSTIN. Razorpay may request one depending on turnover and
   category. Have the Udyam certificate, a bank statement and a PAN card ready either way.
3. **Lead delivery.** Set `LEAD_WEBHOOK_URL` before you depend on the contact form.
4. **Social profiles.** `siteConfig.social` is empty. Fill it in and add a `sameAs` array to
   `organizationSchema` in `lib/schema.ts` once the Facebook and Instagram pages exist.
5. **Blank environment keys are safe.** Every `NEXT_PUBLIC_*` read goes through `envOr()` in
   `lib/utils.ts`, which treats an empty or whitespace-only value as unset and falls back to the
   default in `site-config.ts`. Plain `??` does not do this - an empty string satisfies `??` and
   passes straight through, which is how a blank key can reach an `iframe src` or a `tel:` link.
6. **The map is switched off.** Google cannot reliably geocode a plot-number address in the
   Ghaziabad industrial belt, so the embed was landing on the wrong lane. The map section is now
   hidden unless `NEXT_PUBLIC_MAPS_EMBED_URL` is set — see "Turning the map back on" below.
7. **Map coordinates in schema.** The `address.geo` latitude/longitude in the LocalBusiness
   structured data still comes from the Udyam record, and that pair (28.8022, 77.5182) plots roughly
   13 km east of Mohan Nagar, closer to the Hapur side — a data-entry artifact in the filing rather
   than your actual office. Open Google Maps, right-click your office door, copy the coordinates and
   paste them into `address.geo`. Wrong geo data in schema markup actively hurts local ranking, and
   it is worth fixing even with the visible map disabled.
8. **Statistics.** The figures in `src/data/stats.ts` (years, offices, corridors) are all derived
   from your documents and are defensible. Do not add invented deal counts or crore-value figures —
   unverifiable claims are a liability during verification, not an asset.

---

## Built to extend

The architecture anticipates the roadmap. Nothing below requires restructuring:

| Planned feature | Where it slots in |
| --- | --- |
| Property listings | `src/app/properties/[slug]/page.tsx` + `src/data/properties.ts`, or a CMS/DB behind `src/lib/` |
| Admin dashboard | `src/app/(admin)/` route group with its own layout |
| CRM / lead management | `/api/contact` already emits a clean typed payload — point `LEAD_WEBHOOK_URL` at it |
| Authentication | Add NextAuth or Clerk; `(admin)` group is ready to gate |
| Razorpay / payment links | `src/app/api/payments/` — legal pages required for verification are already live |
| WhatsApp automation | `whatsappLink()` in `lib/utils.ts` centralises message construction |
| Blog | `src/app/blog/[slug]/` with MDX; `buildMetadata()` and sitemap already generalise |
| Customer portal | `src/app/(portal)/` route group |

Route groups keep the marketing site's layout separate from app layouts, so none of this disturbs
what is already shipped.

---

## Accessibility & performance

- Skip-to-content link, semantic landmarks, labelled form controls with `role="alert"` errors
- Keyboard-visible focus rings on every interactive element
- `prefers-reduced-motion` disables animation globally
- `next/font` self-hosts fonts (no render-blocking third-party request, no CLS)
- Server Components by default; `'use client'` only where interaction genuinely requires it
- AVIF/WebP via `next/image`, lazy-loaded below the fold, `priority` on the hero only
- Security headers set in `next.config.mjs`: `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`

Run Lighthouse against the **production** build (`npm run build && npm run start`), not the dev
server — dev-mode numbers are meaningless.

---

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the Vercel walkthrough, custom domain setup, and the
Meta / Razorpay verification checklist.

---

## Licence

Proprietary. © Bhartiya Property. All rights reserved.
