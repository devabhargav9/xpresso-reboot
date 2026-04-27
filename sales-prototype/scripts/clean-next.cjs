#!/usr/bin/env node
/**
 * Removes .next (and common stale caches) so the dev server can rebuild cleanly.
 * Fixes: MODULE_NOT_FOUND './611.js', missing fallback-build-manifest.json, 500 on GET /
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const nextDir = path.join(root, ".next");

function rm(p) {
  if (!fs.existsSync(p)) return;
  fs.rmSync(p, { recursive: true, force: true });
  console.log("Removed:", p);
}

rm(nextDir);
// Turbopack / Next sometimes leave cache here
rm(path.join(root, "node_modules", ".cache"));

console.log("Clean done. Run: npm run dev");
