import { Check, Clock3 } from "lucide-react";
import type { PreviewKind } from "@/lib/services";

/*
 * Mini previews for category cards. Monochrome + brand teal/lime only.
 * Each one differs by structure (certificate, tracker, quarters, seals...), not by colour.
 * Purely decorative: aria-hidden, no real numbers.
 */

const Bar = ({ w, tone = "ink" }: { w: string; tone?: "ink" | "soft" }) => (
  <span className={`block h-[5px] rounded-full ${tone === "ink" ? "bg-ink/15" : "bg-ink/[0.07]"}`} style={{ width: w }} />
);

const Tick = ({ className = "" }: { className?: string }) => (
  <Check className={`h-2.5 w-2.5 shrink-0 text-brand-deep sm:h-3 sm:w-3 ${className}`} strokeWidth={3} />
);

const Pill = ({ children, done = true }: { children: React.ReactNode; done?: boolean }) => (
  <span
    className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-[1px] text-[8px] font-semibold sm:text-[9px] ${
      done ? "bg-brand-tint text-brand-deep" : "border border-ink/15 text-ink-muted"
    }`}
  >
    {done ? <Check className="h-2 w-2" strokeWidth={3.5} /> : <Clock3 className="h-2 w-2" strokeWidth={2.5} />}
    {children}
  </span>
);

const Window = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-xl border border-ink/10 bg-white p-2.5 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.35)] sm:p-3 ${className}`}
  >
    {children}
  </div>
);

function Incorporation() {
  const steps = ["Structure chosen", "Name approved", "Forms filed", "Certificate issued"];
  return (
    <div className="flex w-full max-w-[520px] items-end gap-3 sm:gap-5">
      <Window className="relative w-[55%] pb-4">
        <p className="text-center font-display text-[8px] font-bold uppercase tracking-[0.14em] text-ink sm:text-[10px]">
          Certificate of Incorporation
        </p>
        <div className="mx-auto mt-2 space-y-1.5 sm:mt-3">
          <Bar w="100%" tone="soft" />
          <Bar w="86%" tone="soft" />
          <Bar w="92%" tone="soft" />
          <Bar w="60%" tone="soft" />
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div className="space-y-1">
            <Bar w="44px" />
            <span className="block text-[7px] text-ink-faint sm:text-[8px]">Registrar of Companies</span>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand/70 sm:h-10 sm:w-10">
            <span className="h-4 w-4 rounded-full bg-lime sm:h-5 sm:w-5" />
          </span>
        </div>
      </Window>
      <ol className="w-[45%] space-y-1.5 pb-1 sm:space-y-2">
        {steps.map((s, i) => (
          <li
            key={s}
            className={`flex items-center gap-1.5 rounded-lg border px-2 py-1 text-[8px] font-medium sm:text-[10px] ${
              i === steps.length - 1 ? "border-lime bg-lime-tint text-ink" : "border-ink/10 bg-white text-ink-soft"
            }`}
          >
            <Tick />
            <span className="truncate">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Gst() {
  const months = [62, 78, 55, 84, 70, 90];
  return (
    <div className="flex w-full max-w-[520px] items-end gap-3 sm:gap-5">
      <Window className="w-[55%]">
        <p className="text-[8px] font-semibold uppercase tracking-wider text-ink-muted sm:text-[9px]">Returns</p>
        <ul className="mt-1.5 divide-y divide-ink/5 sm:mt-2">
          {[
            ["GSTR-1", true],
            ["GSTR-3B", true],
            ["GSTR-9", false],
          ].map(([name, done]) => (
            <li key={name as string} className="flex items-center justify-between py-1 sm:py-1.5">
              <span className="font-display text-[9px] font-bold text-ink sm:text-[11px]">{name}</span>
              <Pill done={done as boolean}>{done ? "Filed" : "Upcoming"}</Pill>
            </li>
          ))}
        </ul>
      </Window>
      <Window className="w-[45%]">
        <p className="text-[8px] font-semibold uppercase tracking-wider text-ink-muted sm:text-[9px]">ITC matched</p>
        <div className="mt-2 flex h-12 items-end gap-1 sm:h-16 sm:gap-1.5">
          {months.map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-[3px] ${i === months.length - 1 ? "bg-brand" : "bg-ink/15"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <span className="mt-1.5 block h-[3px] rounded-full bg-lime" />
      </Window>
    </div>
  );
}

function IncomeTax() {
  const steps = ["Filed", "Verified", "Refund"];
  return (
    <Window className="w-[88%] max-w-[240px]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[10px] font-bold text-ink sm:text-xs">ITR</span>
        <Pill>e-Verified</Pill>
      </div>
      <div className="mt-2 space-y-1.5">
        <Bar w="80%" tone="soft" />
        <Bar w="55%" tone="soft" />
      </div>
      <div className="mt-3 flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 flex-col items-center gap-1 last:flex-none">
            <div className="flex w-full items-center">
              <span
                className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full sm:h-4 sm:w-4 ${
                  i === 2 ? "bg-lime" : "bg-brand-deep"
                }`}
              >
                <Check className={`h-2 w-2 ${i === 2 ? "text-ink" : "text-white"}`} strokeWidth={3.5} />
              </span>
              {i < steps.length - 1 && <span className="mx-1 h-px flex-1 bg-ink/15" />}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[7px] font-medium text-ink-muted sm:text-[8px]">
        {steps.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </Window>
  );
}

function Tds() {
  return (
    <Window className="w-[88%] max-w-[240px]">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-semibold uppercase tracking-wider text-ink-muted sm:text-[9px]">TDS returns</span>
        <span className="text-[8px] font-medium text-ink-faint sm:text-[9px]">24Q · 26Q</span>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
          <div
            key={q}
            className={`flex flex-col items-center gap-1 rounded-lg py-1.5 sm:py-2 ${
              i < 3 ? "bg-brand-tint" : "border border-dashed border-ink/20"
            }`}
          >
            <span className="font-display text-[9px] font-bold text-ink sm:text-[11px]">{q}</span>
            {i < 3 ? <Tick /> : <Clock3 className="h-2.5 w-2.5 text-ink-faint sm:h-3 sm:w-3" strokeWidth={2.5} />}
          </div>
        ))}
      </div>
      <span className="mt-2 block h-[3px] w-3/4 rounded-full bg-lime" />
    </Window>
  );
}

function Ngo() {
  const seals = [
    { t: "12A", cls: "border-brand/60 bg-white" },
    { t: "80G", cls: "border-lime bg-lime-tint -ml-3 z-10 scale-110" },
    { t: "CSR", cls: "border-ink/20 bg-white -ml-3" },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center">
        {seals.map((s) => (
          <span
            key={s.t}
            className={`relative grid h-11 w-11 place-items-center rounded-full border-2 shadow-sm sm:h-14 sm:w-14 ${s.cls}`}
          >
            <span className="grid h-[78%] w-[78%] place-items-center rounded-full border border-dashed border-ink/15 font-display text-[10px] font-extrabold text-ink sm:text-xs">
              {s.t}
            </span>
          </span>
        ))}
      </div>
      <Pill>Approved</Pill>
    </div>
  );
}

function Licenses() {
  const items = ["Udyam MSME", "FSSAI", "Shop & Est."];
  return (
    <div className="relative h-[82%] w-[84%] max-w-[220px] sm:w-[80%]">
      {items.map((t, i) => (
        <div
          key={t}
          className="absolute inset-x-0 rounded-xl border border-ink/10 bg-white p-2 shadow-[0_8px_24px_-16px_rgba(28,25,23,0.4)] sm:p-2.5"
          style={{ top: `${i * 24}%`, transform: `translateX(${(i - 1) * 6}%)`, zIndex: i }}
        >
          <div className="flex items-center justify-between gap-1">
            <span className="min-w-0 truncate whitespace-nowrap font-display text-[9px] font-bold text-ink sm:text-[11px]">{t}</span>
            {i === items.length - 1 ? (
              <span className="hidden sm:inline-flex">
                <Pill>Issued</Pill>
              </span>
            ) : null}
            <span className={`h-2 w-2 shrink-0 rounded-full bg-lime ${i === items.length - 1 ? "sm:hidden" : ""}`} />
          </div>
          <div className="mt-1.5 space-y-1">
            <Bar w="70%" tone="soft" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Trademark() {
  return (
    <Window className="w-[88%] max-w-[240px]">
      <div className="flex items-center justify-center gap-2 rounded-lg bg-cream-soft py-2 sm:py-2.5">
        <span className="font-display text-[11px] font-extrabold tracking-wide text-ink sm:text-sm">YOURBRAND</span>
        <span className="-ml-1 self-start font-display text-[10px] font-bold text-brand-deep sm:text-xs">®</span>
      </div>
      <div className="mt-2 flex items-center justify-between gap-1">
        {["Search", "Filed", "Registered"].map((s, i) => (
          <span
            key={s}
            className={`flex-1 rounded-full py-[2px] text-center text-[7px] font-semibold sm:text-[8px] ${
              i === 2 ? "bg-lime text-ink" : "bg-brand-tint text-brand-deep"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </Window>
  );
}

function ImportExport() {
  return (
    <Window className="w-[88%] max-w-[240px]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[10px] font-bold text-ink sm:text-xs">IEC</span>
        <Pill>Active</Pill>
      </div>
      <svg viewBox="0 0 200 56" className="mt-1 h-10 w-full sm:h-12" fill="none">
        <path d="M14 44 C 60 -6, 140 -6, 186 36" stroke="#1C1917" strokeOpacity=".25" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="14" cy="44" r="5" fill="#008382" />
        <circle cx="186" cy="36" r="5" fill="#C9EE7C" stroke="#1C1917" strokeOpacity=".25" />
        <rect x="88" y="10" width="24" height="11" rx="3" fill="#fff" stroke="#1C1917" strokeOpacity=".2" />
      </svg>
      <div className="flex justify-between text-[7px] font-medium text-ink-muted sm:text-[8px]">
        <span>India</span>
        <span>Global markets</span>
      </div>
    </Window>
  );
}

function Labour() {
  return (
    <Window className="w-[88%] max-w-[240px]">
      <ul className="space-y-1.5">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className={`h-4 w-4 shrink-0 rounded-full sm:h-5 sm:w-5 ${i === 1 ? "bg-lime" : "bg-ink/10"}`} />
            <span className="flex-1">
              <Bar w={["70%", "55%", "64%"][i]} tone="soft" />
            </span>
            <Pill>PF</Pill>
            <Pill>ESI</Pill>
          </li>
        ))}
      </ul>
    </Window>
  );
}

function Roc() {
  const rows: [string, boolean][] = [
    ["AOC-4", true],
    ["MGT-7", true],
    ["DIR-3 KYC", false],
  ];
  return (
    <Window className="w-[88%] max-w-[240px]">
      <p className="text-[8px] font-semibold uppercase tracking-wider text-ink-muted sm:text-[9px]">Annual filings</p>
      <ul className="mt-1.5 space-y-1">
        {rows.map(([name, done]) => (
          <li
            key={name}
            className={`flex items-center justify-between rounded-md px-1.5 py-1 ${done ? "bg-cream-soft" : "border border-dashed border-ink/20"}`}
          >
            <span className="font-display text-[9px] font-bold text-ink sm:text-[10px]">{name}</span>
            {done ? <Tick /> : <span className="h-2 w-2 rounded-full bg-lime ring-2 ring-lime/40" />}
          </li>
        ))}
      </ul>
    </Window>
  );
}

const MAP: Record<PreviewKind, () => React.JSX.Element> = {
  incorporation: Incorporation,
  gst: Gst,
  "income-tax": IncomeTax,
  tds: Tds,
  ngo: Ngo,
  licenses: Licenses,
  trademark: Trademark,
  "import-export": ImportExport,
  labour: Labour,
  roc: Roc,
};

export function ServicePreview({ kind }: { kind: PreviewKind }) {
  const P = MAP[kind];
  return <P />;
}
