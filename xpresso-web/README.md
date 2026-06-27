# Xpresso — Product Website

Public-facing marketing site for Xpresso (Indian higher-ed product: IMS + EMS + ALS, with Compliance Autopilot and On-Demand Programs).

This site is what prospective customers land on. The interactive sales prototype lives separately in `xpresso-sales/`.

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- lucide-react icons

## Run locally

```bash
npm install
npm run dev
```

Site runs on **http://localhost:3200** (sales prototype runs on 3100, so both can run side by side).

## Pages

- `/` — Home (hero, pillars, why-xpresso, product tour, compliance, stakeholders, FAQ, CTA)
- `/product` — Deep dive on the three modules (ALS, EMS, IMS) + ODP + Compliance Autopilot + real-time data flow
- `/about` — Mission, why higher-ed, founders, values
- `/contact` — Request a demo form

> Pricing and tiers are intentionally not exposed on the public site. They're handled during the sales conversation.

## Deployment

Ready for Vercel out of the box. Push to a `xpresso-web` Vercel project.
