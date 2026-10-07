import schedule from "@/lib/publish-schedule.json";
import { site } from "@/lib/site";

/**
 * Work log as CSV, built at deploy time from src/lib/publish-schedule.json (entries dated today or earlier, IST).
 * The "national filings works" Google Sheet pulls this with =IMPORTDATA(), so every deploy updates the sheet.
 * noindex: it is a feed, not a page.
 */
export const dynamic = "force-static";

// "7 Oct 2026 (Wednesday)": readable, and Google Sheets keeps it as text instead of turning it into a date serial (46302)
const readable = (iso: string) => {
  const d = new Date(`${iso}T00:00:00Z`);
  const day = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  const weekday = d.toLocaleDateString("en-GB", { weekday: "long", timeZone: "UTC" });
  return `${day} (${weekday})`;
};

const cell = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

export function GET() {
  const today = process.env.GATE_DATE || new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const rows = schedule.log
    .filter((e) => e.date <= today)
    .map((e) => [readable(e.date), e.work, e.page, e.path ? `${site.url}${e.path}` : ""].map(cell).join(","));
  const csv = ["Date,Work done,Page,URL", ...rows].join("\n") + "\n";
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=300",
    },
  });
}
