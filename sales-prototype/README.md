# X'Presso — sales prototype (interactive product map)

This is a **pitch-ready web demo**: one **interactive product map** (learning, knowledge, operations) plus a **core platform** view, and a separate **full product scope** page for the extended checklist. Developer detail: the structured spec lives in `lib/structure.ts` and `lib/full-product-scope.ts` so copy stays in one place.

## Run locally

```bash
cd sales-prototype
npm install
npm run dev
```

If the first load fails, use a clean dev start: `npm run dev:fix` (stops 500s from a stale `.next` folder).

Open [http://localhost:3000](http://localhost:3000). Use **Product map** in the header to walk the full tree.

- `/` — Overview + 3 layers + platform preview
- `/explore` — Full product map (timeline + drill-down links)
- `/explore/als` | `/ems` | `/ims` — All modules in that layer
- `/explore/{layer}/{moduleId}` — Module detail with numbered list (e.g. `.../a1`, `.../e5`, `.../i6`)
- `/explore/ims/attendance` & `/explore/ims/placement` — **I7** and **I8** in the Operations (IMS) layer, same as I1–I6 (long-form story on these two routes). Old paths `/explore/attendance` and `/explore/placement` redirect here.
- `/explore/platform` — Core platform (identity, data, security, communication, AI)
- `/explore/full-scope` — Full capability catalog (links into attendance & placement from relevant sections)

## Build

```bash
npm run build && npm start
```

## If the dev server returns 500 (missing `365.js` / `611.js`, `fallback-build-manifest`, random ENOENT)

**Root cause is almost always:** more than one `next dev` running, or a **suspended** process (`Ctrl+Z`), all writing to the same `.next` folder. Next then serves half-deleted chunks and manifest paths.

1. **Do not** run `npm run dev` in two terminals. **Do not** use `Ctrl+Z` on the dev server—use **Ctrl+C** to stop, or the old process keeps the port and corrupts the cache.
2. From `sales-prototype/`, run:

```bash
npm run dev:fix
```

`dev:fix` now (on macOS/Linux) **frees ports 3000–3002**, then runs `clean-next.cjs` (removes `.next` and `node_modules/.cache`), then starts **`next dev --turbopack` on port 3000** so you are not bounced to 3001 while another ghost server still runs.

3. If something still holds a port, check manually: `lsof -i :3000` and `kill -9 <pid>`.

- Prefer **`npm run dev` (Turbopack, port 3000)**. Avoid **`dev:webpack`** unless you must—it competes with Turbopack’s output in `.next` if you switch without a full clean.
- **`npm start`** (production) needs a **fresh `npm run build`**; don’t mix with a broken dev `.next`.

## For stakeholders

- Label this build **“Sales / discovery prototype”** — it explains **scope and architecture**, not production workflows or live data.
