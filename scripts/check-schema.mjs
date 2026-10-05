#!/usr/bin/env node
/**
 * Schema guard: every page in the sitemap must carry valid, non-duplicated JSON-LD.
 *
 *   npm run build && npm run start      (in one terminal)
 *   npm run check:schema                (in another; BASE_URL defaults to http://localhost:3000)
 *
 * Checks per page: all JSON-LD parses; exactly one page node (WebPage/AboutPage/ContactPage/CollectionPage);
 * the site-wide Organization, LocalBusiness and WebSite are present; a BreadcrumbList on every page except "/";
 * at most one BreadcrumbList and one FAQPage; exactly one <h1>.
 */
const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const PAGE_TYPES = ["WebPage", "AboutPage", "ContactPage", "CollectionPage"];

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
let failed = 0;

for (const path of paths) {
  const html = await (await fetch(BASE + path)).text();
  const problems = [];
  const types = [];
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(json);
      for (const node of data["@graph"] ?? [data]) {
        const t = node["@type"];
        (Array.isArray(t) ? t : [t]).forEach((x) => types.push(x));
      }
    } catch {
      problems.push("invalid JSON-LD block");
    }
  }
  const count = (t) => types.filter((x) => x === t).length;
  const pageNodes = types.filter((t) => PAGE_TYPES.includes(t)).length;
  if (pageNodes !== 1) problems.push(`${pageNodes} page nodes (want 1)`);
  for (const t of ["Organization", "WebSite"]) if (!count(t)) problems.push(`missing ${t}`);
  if (!count("AccountingService")) problems.push("missing LocalBusiness (AccountingService)");
  if (path !== "/" && count("BreadcrumbList") !== 1) problems.push(`${count("BreadcrumbList")} BreadcrumbList (want 1)`);
  if (count("FAQPage") > 1) problems.push(`${count("FAQPage")} FAQPage (want ≤ 1)`);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${h1} <h1> (want 1)`);

  const summary = [...new Set(types)].sort().join(", ");
  if (problems.length) {
    failed++;
    console.log(`✗ ${path}\n    ${problems.join("\n    ")}`);
  } else {
    console.log(`✓ ${path.padEnd(24)} ${summary}`);
  }
}

console.log(failed ? `\n${failed} page(s) failed` : `\nAll ${paths.length} pages passed`);
process.exit(failed ? 1 : 0);
