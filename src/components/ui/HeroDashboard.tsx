import { BellRing, Building2, CalendarClock, Check, Clock3, FileCheck2, IndianRupee, MapPin, ReceiptIndianRupee, ShieldCheck, Star } from "lucide-react";
import { platforms } from "@/lib/proof";

/**
 * Hero illustration: a compliance tracker in the brand style.
 * Illustrative UI only: generic filing names and statuses, no client names, dates or invented numbers.
 * The Chennai variant adds a footer of real public facts (from lib/proof.ts).
 */

type Row = { icon: typeof Building2; name: string; kind: string; status: "done" | "progress" | "waiting"; label: string };

const rows: Row[] = [
  { icon: ReceiptIndianRupee, name: "GSTR-3B", kind: "GST return", status: "done", label: "Filed" },
  { icon: IndianRupee, name: "ITR", kind: "Income tax return", status: "done", label: "e-Verified" },
  { icon: Building2, name: "AOC-4", kind: "ROC annual filing", status: "progress", label: "In progress" },
  { icon: ShieldCheck, name: "Trademark", kind: "Brand application", status: "waiting", label: "With registry" },
];

function StatusPill({ status, label }: { status: Row["status"]; label: string }) {
  const cls =
    status === "done"
      ? "bg-brand-tint text-brand-deep"
      : status === "progress"
        ? "bg-lime-tint text-ink ring-1 ring-lime"
        : "border border-ink/15 text-ink-muted";
  const Icon = status === "done" ? Check : Clock3;
  return (
    <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[10.5px] font-semibold sm:text-[11px] ${cls}`}>
      <Icon className="h-3 w-3" strokeWidth={status === "done" ? 3 : 2.4} aria-hidden />
      {label}
    </span>
  );
}

function Ring({ done, total }: { done: number; total: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90" aria-hidden>
      <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeWidth="7" className="text-ink/[0.07]" />
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${(done / total) * c} ${c}`}
        className="text-brand"
      />
    </svg>
  );
}

export function HeroDashboard({ variant = "home" }: { variant?: "home" | "chennai" }) {
  const google = platforms.find((p) => p.id === "google" && !p.sample);
  const justdial = platforms.find((p) => p.id === "justdial" && !p.sample);
  const since = justdial?.stats.find((s) => /establish/i.test(s.label))?.value;
  const done = rows.filter((r) => r.status === "done").length;

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
      {/* soft brand arcs behind the window */}
      <svg aria-hidden viewBox="0 0 100 100" className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 sm:h-56 sm:w-56">
        <path d="M8 44a42 42 0 0 1 84 0h-12a30 30 0 0 0-60 0z" fill="#C9EE7C" opacity=".55" />
        <path d="M8 56a42 42 0 0 0 84 0h-12a30 30 0 0 1-60 0z" fill="#C9EE7C" opacity=".55" />
      </svg>

      <div aria-hidden className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_40px_80px_-40px_rgba(28,25,23,0.45)]">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-ink/10 bg-cream-soft/70 px-4 py-3 sm:px-5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </span>
          <span className="ml-2 truncate text-[12px] font-semibold text-ink-soft">
            {variant === "chennai" ? "National Filings Chennai · Compliance tracker" : "National Filings · Compliance tracker"}
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_150px] sm:p-5">
          {/* filings */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">Your filings</p>
            <ul className="mt-2.5 divide-y divide-ink/5 rounded-2xl border border-ink/10">
              {rows.map((r) => (
                <li key={r.name} className="flex items-center gap-3 px-3 py-2.5 sm:py-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-ink/10 bg-white">
                    <r.icon className="h-4 w-4 text-ink" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[13px] font-bold leading-tight text-ink">{r.name}</span>
                    <span className="block truncate text-[11.5px] text-ink-muted">{r.kind}</span>
                  </span>
                  <StatusPill status={r.status} label={r.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* side stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            <div className="flex items-center gap-3 rounded-2xl border border-ink/10 p-3 sm:flex-col sm:items-start">
              <span className="relative grid place-items-center">
                <Ring done={done} total={rows.length} />
                <span className="absolute font-display text-[13px] font-extrabold text-ink">
                  {done}/{rows.length}
                </span>
              </span>
              <span className="text-[11.5px] font-medium leading-snug text-ink-muted">Filings completed</span>
            </div>
            <div className="rounded-2xl bg-ink p-3 text-white">
              <CalendarClock className="h-4 w-4 text-lime" strokeWidth={1.8} />
              <p className="mt-2 text-[11px] font-medium text-white/60">Next due</p>
              <p className="font-display text-[13.5px] font-bold leading-tight">TDS return</p>
              <p className="mt-1 text-[11px] text-white/60">Reminder scheduled</p>
            </div>
          </div>
        </div>

        {variant === "chennai" && (google?.rating || since) && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-ink/10 bg-cream-soft/60 px-4 py-3 text-[12px] font-medium text-ink-soft sm:px-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.8} /> Kundrathur, Chennai
            </span>
            {google?.rating ? (
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-[#FBBC04] text-[#FBBC04]" strokeWidth={0} /> {google.rating.toFixed(1)} on Google
              </span>
            ) : null}
            {since ? <span>Est. {since}</span> : null}
          </div>
        )}
      </div>

      {/* floating notes */}
      <div
        aria-hidden
        className={`absolute -bottom-5 -left-3 hidden items-center gap-2.5 rounded-2xl border border-ink/10 bg-white px-3.5 py-2.5 shadow-lift lg:-left-10 ${
          variant === "chennai" ? "" : "sm:flex" /* Chennai's facts strip sits where this note would go */
        }`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-lime-tint ring-1 ring-lime">
          <BellRing className="h-4 w-4 text-ink" strokeWidth={1.8} />
        </span>
        <span>
          <span className="block text-[12px] font-bold text-ink">Due-date reminder</span>
          <span className="block text-[11px] text-ink-muted">Sent before every deadline</span>
        </span>
      </div>
      <div aria-hidden className="absolute -top-4 right-6 hidden items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 shadow-lift sm:flex">
        <FileCheck2 className="h-4 w-4 text-brand-deep" strokeWidth={1.8} />
        <span className="text-[11.5px] font-semibold text-ink">Documents received</span>
      </div>
    </div>
  );
}
