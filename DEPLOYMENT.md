# Deployment Guide

Everything needed to take this project from a folder on your machine to a live, verified business
website.

---

## 1. Prerequisites

- **Node.js 20 LTS** (18.18+ works; 20 recommended). Check with `node -v`.
- A **GitHub** account.
- A **Vercel** account (the free Hobby tier is sufficient to start).
- A **domain**. `bhartiyaproperty.in` is the assumed default throughout — buy from BigRock, GoDaddy,
  Namecheap or Cloudflare Registrar.

---

## 2. Local verification before you deploy

Never push a build you have not run locally.

```bash
npm install
cp .env.example .env.local

npm run typecheck    # must pass clean
npm run lint         # must pass clean
npm run build        # must complete
npm run start        # visit http://localhost:3000 and click through every page
```

Check before proceeding:

- [ ] Every nav link resolves; no 404s
- [ ] All six policy pages load
- [ ] Contact form shows validation errors on bad input and succeeds on good input
- [ ] WhatsApp button opens a chat with the correct number
- [ ] Call button dials `+91 81785 56116`
- [ ] Mobile menu opens and closes
- [ ] `/sitemap.xml` and `/robots.txt` render

---

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Bhartiya Property website"
git branch -M main
git remote add origin https://github.com/<your-username>/bhartiya-property.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, and `.env*.local`. **Never commit
`.env.local`.**

---

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. **Import** the `bhartiya-property` repository.
3. Vercel auto-detects Next.js. Leave the defaults:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. Expand **Environment Variables** and add them *before* the first build:

   | Key | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://bhartiyaproperty.in` |
   | `NEXT_PUBLIC_PHONE` | `918178556116` |
   | `NEXT_PUBLIC_WHATSAPP` | `918178556116` |
   | `NEXT_PUBLIC_EMAIL` | `info@bhartiyaproperty.in` |
   | `LEAD_WEBHOOK_URL` | your webhook (see §7) |

   Apply each to **Production, Preview and Development**.
5. Click **Deploy**. First build takes roughly 2–3 minutes.

> If the build fails on `Failed to fetch font`, it is a network issue on the build machine, not a
> code fault. Vercel has outbound access, so this should not occur there.

### Redeploying

Every push to `main` triggers a production deploy. Pull requests get preview URLs automatically.

---

## 5. Custom domain

1. Vercel project → **Settings → Domains → Add** → enter `bhartiyaproperty.in`.
2. Add `www.bhartiyaproperty.in` too, and set one to redirect to the other (apex is the usual choice).
3. At your registrar's DNS panel, add the records Vercel shows:

   | Type | Name | Value |
   | --- | --- | --- |
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   *Use the exact values shown in your Vercel dashboard — they can change.*
4. DNS propagation takes 10 minutes to 48 hours. SSL is provisioned automatically once it resolves.
5. **After the domain is live,** confirm `NEXT_PUBLIC_SITE_URL` matches it exactly (`https://`, no
   trailing slash) and redeploy. A mismatch breaks canonical URLs and OG images.

---

## 6. Post-deployment SEO setup

1. **Google Search Console** — add the property, verify (the meta-tag method works: put the token in
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy), then submit
   `https://bhartiyaproperty.in/sitemap.xml`.
2. **Google Business Profile** — create a listing with the **exact** name, address and phone from
   `site-config.ts`. Inconsistent NAP across the web is the single most common cause of weak local
   ranking. Add the head office and, if you want, each branch as separate locations.
3. **Rich Results Test** — run [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   against the homepage. `RealEstateAgent`, `Organization` and `FAQPage` should all be detected.
4. **Social preview** — check the OG card at
   [opengraph.xyz](https://www.opengraph.xyz/).
5. **Bing Webmaster Tools** — worth 10 minutes; import directly from Search Console.

---

## 7. Wiring up leads

`/api/contact` validates with Zod, blocks bots with a honeypot, and rate-limits to 5 requests per
minute per IP. Where the lead *goes* is up to you.

**Easiest (no code):** create a Zapier or Make webhook that appends to a Google Sheet and sends you a
WhatsApp or email alert. Paste the webhook URL into `LEAD_WEBHOOK_URL` and redeploy.

**Self-hosted:** point `LEAD_WEBHOOK_URL` at your own endpoint. The payload is:

```json
{
  "name": "…",
  "phone": "…",
  "email": "…",
  "intent": "Buy",
  "propertyType": "Industrial",
  "budget": "₹50 lakh – ₹1 crore",
  "locality": "Site IV",
  "message": "…",
  "consent": true,
  "receivedAt": "2026-07-21T09:30:00.000Z",
  "source": "website-contact-form"
}
```

**Email notifications:** add Resend or Nodemailer inside `src/app/api/contact/route.ts` where the
webhook call currently sits.

> The in-memory rate limiter resets on every serverless cold start. That is acceptable at current
> volume. If you start seeing spam, move it to Upstash Redis.

---

## 8. Meta Business verification checklist

Meta looks for a website that credibly matches your legal documents.

- [ ] Custom domain live with valid SSL (not a `.vercel.app` subdomain)
- [ ] Business name on the site **exactly** matches the Udyam certificate: `BHARTIYA PROPERTY`
- [ ] Full head-office address visible in the footer and on `/contact` — matches the certificate
- [ ] Phone number visible and reachable
- [ ] Privacy Policy live at `/privacy-policy` ← **Meta specifically checks this**
- [ ] Terms live at `/terms-and-conditions`
- [ ] Business email on the domain (`info@bhartiyaproperty.in`), **not** Gmail
- [ ] Real photographs replacing the placeholder assets
- [ ] Udyam certificate PDF ready to upload

**The domain email matters more than people expect.** A Gmail contact address on a business
verification application is a common rejection trigger. Most registrars bundle email, or use Google
Workspace / Zoho Mail (Zoho has a free tier for one domain).

---

## 9. Razorpay / Cashfree verification checklist

Payment gateways require a specific set of policy pages — all six are already built and linked in
the footer.

- [ ] `/privacy-policy`
- [ ] `/terms-and-conditions`
- [ ] `/refund-policy`
- [ ] `/cancellation-policy`
- [ ] `/shipping-and-delivery` — states plainly that this is a service business with no physical
      shipment, which is exactly what reviewers need to see
- [ ] `/disclaimer`
- [ ] Contact page with address, phone and email
- [ ] Services clearly described with a stated fee model
- [ ] Business name consistent across website, Udyam certificate and bank account

**Documents to have ready:** Udyam certificate (UDYAM-UP-29-0156958), PAN (BDSPA3118D), bank account
proof (ICICI, as per the Udyam record), address proof, and GSTIN if applicable.

> Every policy page carries a "Last updated" date. Refresh it whenever you edit the content —
> reviewers notice stale dates.

---

## 10. Ongoing maintenance

```bash
npm outdated              # see what has moved
npm update                # minor and patch upgrades
npm audit                 # check for advisories
```

Watch for Next.js security advisories specifically — that is why this project runs `15.5.20` rather
than `15.1.6`. Test upgrades on a preview deployment before promoting to production.

**Content worth refreshing quarterly:** area notes in `src/data/areas.ts` as corridors change, FAQs
as clients ask new questions, and the policy "last updated" dates.

---

## 11. Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| `Failed to fetch font` during build | Build machine cannot reach `fonts.googleapis.com`. Not a code fault. |
| OG image not appearing on WhatsApp/Facebook | `NEXT_PUBLIC_SITE_URL` wrong or unset. Fix, redeploy, then re-scrape in Meta's Sharing Debugger. |
| Contact form returns 429 | Rate limit hit (5/min/IP). Expected behaviour. |
| Contact form succeeds but no lead arrives | `LEAD_WEBHOOK_URL` unset — the lead is in the Vercel function logs. |
| No map on the contact page | Intentional. The map is hidden unless `NEXT_PUBLIC_MAPS_EMBED_URL` is set. See "Turning the map back on" in README.md. |
| Map area renders as a blank card | The embed URL is unreachable from your network (firewall, or a sandbox blocking `maps.google.com`). The iframe is skipped entirely when no URL resolves, so a blank card means the URL loaded but Google refused it. |
| Styles missing after adding a component | New file outside `./src/**` — Tailwind's `content` glob does not scan it. |
| Hydration mismatch warning | A `'use client'` component reading `window` during render. Move it into `useEffect`. |

---

## Support

Business details, addresses and registration facts live in `src/lib/site-config.ts`. Change them
once there and they propagate site-wide.
