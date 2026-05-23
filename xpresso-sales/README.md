# Xpresso — sales prototype (v2)

Interactive sales prototype for the Xpresso higher-education platform.

## Run

```bash
cd xpresso-sales
npm install
npm run dev
```

Dev server: [http://localhost:3100](http://localhost:3100).

## What's in here

- `/` — Landing with pyramid hero, 8 demo tiles (ALS · EMS), compliance teaser, catalog teaser, differentiation teaser
- `/demo` — Demos hub, two strips of 4 tiles each
- `/demo/als/{profile|adaptive-path|ai-tutor|effort-fair-assessment}` — ALS demo stubs (interactive sims land in M2 / M5 / M7 / M9)
- `/demo/ems/{atom-authoring|knowledge-graph|faculty-copilot|heatmap-loop}` — EMS demo stubs (M3 / M6 / M8 / M10)
- `/explore` — Catalog hub (ALS · EMS · IMS)
- `/explore/{als|ems|ims}` — Layer pages with expandable module cards, every feature listed with compliance and stakeholder tags
- `/compliance` — Compliance Command Center preview (full interactive ships in M4)
- `/differentiation` — vs LMS / vs ERP / vs compliance tool
- `/stakeholders` — Eight stakeholder lenses

## Build milestones

- **M1 — Scaffold + landing + nav + catalog + differentiation** (shipped)
- M2 — ALS Demo 2 — Adaptive Path + Multi-modal Twin
- M3 — EMS Demo 1 — Atom Authoring + Multi-modal Generation Factory
- M4 — Compliance Command Center (interactive)
- M5 — ALS Demo 1 — Cognitive Profile Builder
- M6 — EMS Demo 2 — Knowledge Graph Explorer (OBE / CO–PO live)
- M7 — ALS Demo 3 — AI Tutor that knows the student
- M8 — EMS Demo 3 — Faculty AI Co-Pilot
- M9 — ALS Demo 4 — Effort-fair AI-aware Assessment
- M10 — EMS Demo 4 — Live Mastery Heatmap → Atom Rewrite Loop
- M11 — Stakeholder lens (interactive) + polish

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 4 · lucide-react. Mock data only — no backend.

## Notes

- Dev server runs on port **3100** to avoid colliding with the older `sales-prototype/` on 3000.
- All routes are statically generated; no environment variables required.
