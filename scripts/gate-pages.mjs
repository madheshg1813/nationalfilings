#!/usr/bin/env node
/**
 * Publish gate: leaves scheduled pages out of the build until their go-live date (IST).
 *
 * Runs first in `prebuild`. It only acts on Railway (RAILWAY_ENVIRONMENT_NAME is set there) or when
 * PUBLISH_GATE=1, and it deletes the page folder from the BUILD copy only, never on a local machine.
 * Schedule: src/lib/publish-schedule.json. GATE_DATE=YYYY-MM-DD overrides "today" for testing.
 *
 * gen-pages.mjs runs after this, so the sitemap, links and menus follow automatically.
 */
import { existsSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

export const todayIST = () => process.env.GATE_DATE || new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });

const active = Boolean(process.env.RAILWAY_ENVIRONMENT_NAME) || process.env.PUBLISH_GATE === "1";
const { log } = JSON.parse(readFileSync("src/lib/publish-schedule.json", "utf8"));
const today = todayIST();

if (!active) {
  console.log(`[gate-pages] off (local build): all pages included`);
} else {
  const held = [];
  for (const e of log) {
    if (!e.path || e.date <= today) continue;
    const dir = join("src/app", e.path);
    // Only ever remove a page's own folder (with its page.tsx), never a parent like /chennai
    if (existsSync(join(dir, "page.tsx")) && e.path.split("/").length > 2) {
      rmSync(dir, { recursive: true, force: true });
      held.push(`${e.path} (${e.date})`);
    }
  }
  console.log(`[gate-pages] today ${today} IST; held back ${held.length}: ${held.join(", ") || "none"}`);
}
