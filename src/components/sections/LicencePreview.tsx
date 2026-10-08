import { Check, KeyRound, Store, UtensilsCrossed } from "lucide-react";
import { Bar, ImportExport, Pill, Tick, Window } from "./ServicePreview";

/*
 * Mini illustrations for the home page licence cards. Same rules as ServicePreview:
 * monochrome + brand teal/lime only, each one different by structure, decorative (aria-hidden), no real numbers.
 */

function Udyam() {
  return (
    <Window className="w-[86%] max-w-[210px]">
      <div className="flex items-center justify-between gap-1">
        <span className="font-display text-[9px] font-bold tracking-[0.12em] text-ink sm:text-[10px]">UDYAM</span>
        <Pill>Registered</Pill>
      </div>
      <div className="mt-2 space-y-1">
        <Bar w="90%" />
        <Bar w="64%" tone="soft" />
      </div>
      <div className="mt-2 flex gap-1">
        {["Micro", "Small", "Medium"].map((t, i) => (
          <span key={t} className={`rounded-full px-1.5 py-[1px] text-[7px] font-semibold sm:text-[8px] ${i === 0 ? "bg-lime text-ink" : "bg-ink/[0.05] text-ink-muted"}`}>
            {t}
          </span>
        ))}
      </div>
    </Window>
  );
}

function Fssai() {
  return (
    <Window className="w-[86%] max-w-[210px]">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-tint">
          <UtensilsCrossed className="h-3.5 w-3.5 text-brand-deep" strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1 space-y-1">
          <span className="block font-display text-[9px] font-bold tracking-[0.1em] text-ink sm:text-[10px]">FOOD LICENCE</span>
          <Bar w="70%" tone="soft" />
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {["Basic", "State", "Central"].map((t, i) => (
          <span key={t} className={`rounded-md py-[2px] text-center text-[7px] font-semibold sm:text-[8px] ${i === 1 ? "bg-brand-deep text-white" : "bg-ink/[0.05] text-ink-muted"}`}>
            {t}
          </span>
        ))}
      </div>
    </Window>
  );
}

function TradeLicence() {
  return (
    <Window className="relative w-[86%] max-w-[210px]">
      <span className="font-display text-[9px] font-bold tracking-[0.12em] text-ink sm:text-[10px]">TRADE LICENCE</span>
      <div className="mt-2 space-y-1 pr-12">
        <Bar w="100%" />
        <Bar w="80%" tone="soft" />
        <Bar w="60%" tone="soft" />
      </div>
      {/* round "approved" stamp */}
      <span className="absolute bottom-2 right-2.5 grid h-9 w-9 -rotate-12 place-items-center rounded-full border-2 border-dashed border-brand-deep/60 sm:h-10 sm:w-10">
        <Check className="h-4 w-4 text-brand-deep" strokeWidth={3} />
      </span>
    </Window>
  );
}

function ShopEstablishment() {
  return (
    <Window className="w-[86%] max-w-[210px]">
      {/* striped awning over a shop front */}
      <div className="flex h-3.5 overflow-hidden rounded-t-md border border-b-0 border-ink/10">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className={`flex-1 ${i % 2 ? "bg-brand-tint" : "bg-brand-deep/80"}`} />
        ))}
      </div>
      <div className="flex items-end justify-between gap-2 rounded-b-md border border-t-0 border-ink/10 px-2 pb-1.5 pt-2">
        <Store className="h-4 w-4 text-ink/60" strokeWidth={1.75} />
        <Pill>Registered</Pill>
      </div>
    </Window>
  );
}

function Dsc() {
  return (
    <div className="flex w-[86%] max-w-[210px] items-center gap-2.5">
      {/* USB token */}
      <div className="relative flex h-14 w-9 shrink-0 flex-col items-center rounded-lg border border-ink/10 bg-white pt-2 shadow-[0_8px_24px_-16px_rgba(28,25,23,0.4)]">
        <span className="absolute -top-2 h-2.5 w-4 rounded-t-sm border border-b-0 border-ink/15 bg-ink/[0.06]" />
        <KeyRound className="h-3.5 w-3.5 text-brand-deep" strokeWidth={2} />
        <span className="mt-1.5 h-1 w-4 rounded-full bg-lime" />
      </div>
      <Window className="min-w-0 flex-1">
        <span className="block font-display text-[9px] font-bold text-ink sm:text-[10px]">Digital signature</span>
        <div className="mt-1.5 space-y-1">
          {["MCA", "GST", "Income Tax"].map((t) => (
            <span key={t} className="flex items-center gap-1 text-[7.5px] font-medium text-ink-soft sm:text-[8.5px]">
              <Tick /> {t}
            </span>
          ))}
        </div>
      </Window>
    </div>
  );
}

function Iso() {
  return (
    <div className="flex w-[86%] max-w-[210px] items-center gap-2.5">
      {/* certification seal */}
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-[3px] border-lime bg-white shadow-[0_8px_24px_-16px_rgba(28,25,23,0.4)]">
        <span className="font-display text-[11px] font-extrabold text-brand-deep">ISO</span>
      </span>
      <Window className="min-w-0 flex-1">
        <div className="space-y-1.5">
          {["Gap review", "Audit", "Certified"].map((t, i) => (
            <span key={t} className={`flex items-center gap-1 text-[7.5px] font-semibold sm:text-[8.5px] ${i === 2 ? "text-brand-deep" : "text-ink-soft"}`}>
              <Tick /> {t}
            </span>
          ))}
        </div>
      </Window>
    </div>
  );
}

const PREVIEWS: Record<string, () => React.ReactElement> = {
  L1: Udyam,
  L2: Fssai,
  L3: TradeLicence,
  L4: ShopEstablishment,
  L5: ImportExport,
  L6: Dsc,
  L7: Iso,
};

export function LicencePreview({ id }: { id: string }) {
  const P = PREVIEWS[id];
  return P ? <P /> : null;
}
