#!/usr/bin/env node
/**
 * Frees 3000–3002 from stray `next dev` / Node processes.
 * Two dev servers + one `.next` folder = missing chunks (365.js, 611.js), manifest ENOENT, 500s.
 * macOS/Linux only; on Windows, close the other terminal manually.
 */
const { execSync, spawnSync } = require("child_process");

if (process.platform === "win32") {
  console.log("skip kill-next-ports on Windows (close the other dev terminal if port is busy)");
  process.exit(0);
}

const ports = [3000, 3001, 3002];

for (const port of ports) {
  try {
    const out = execSync(`lsof -ti:${port}`, { encoding: "utf8" }).trim();
    if (!out) continue;
    const pids = out.split(/\s+/).filter(Boolean);
    for (const pid of pids) {
      try {
        process.kill(parseInt(pid, 10), "SIGKILL");
        console.log(`Freed port ${port} (killed pid ${pid})`);
      } catch {
        // ignore
      }
    }
  } catch {
    // nothing listening
  }
}
