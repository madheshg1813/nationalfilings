import { Check, FileCheck2, Landmark, UserRound } from "lucide-react";
import { IndiaFlag, TricolourBand } from "@/components/ui/IndiaFlag";

/** Placeholder text lines inside a mini document */
function Lines({ widths }: { widths: string[] }) {
  return (
    <div className="space-y-1.5">
      {widths.map((w, i) => (
        <div key={i} className="h-1.5 rounded-full bg-ink/[0.08]" style={{ width: w }} />
      ))}
    </div>
  );
}

function Verified() {
  return (
    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand-deep text-white ring-[3px] ring-white">
      <Check className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
  );
}

/**
 * Decorative illustration for the Income Tax documents section: Form 16, PAN, bank statement and AIS cards.
 * Same layout as DocumentsIllustration. Generic shapes only, no emblems or real-looking ID numbers.
 */
export function TaxDocumentsIllustration() {
  return (
    <div className="relative mx-auto aspect-[1/1] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-brand/10 bg-gradient-to-br from-brand-tint via-white to-lime-tint">
      {/* faint rings */}
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10" />
      <div className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10" />

      {/* Form 16 */}
      <div className="absolute left-[8%] top-[10%] w-[46%] -rotate-[5deg] rounded-2xl border border-ink/10 bg-white p-3.5 pt-[18px] shadow-lift">
        <TricolourBand className="absolute inset-x-0 top-0 rounded-t-2xl" />
        <Verified />
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-deep">Form 16</span>
          <IndiaFlag className="h-3 w-[18px]" />
        </div>
        <div className="mt-3 flex gap-2.5">
          <span className="grid h-10 w-9 shrink-0 place-items-center rounded-md bg-brand-tint">
            <UserRound className="h-4 w-4 text-brand-deep" />
          </span>
          <div className="flex-1 pt-1">
            <Lines widths={["100%", "72%", "50%"]} />
          </div>
        </div>
      </div>

      {/* PAN card */}
      <div className="absolute right-[7%] top-[20%] w-[44%] rotate-[4deg] rounded-2xl border border-ink/10 bg-white p-3.5 pt-[18px] shadow-lift">
        <TricolourBand className="absolute inset-x-0 top-0 rounded-t-2xl" />
        <Verified />
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-deep">PAN Card</span>
          <IndiaFlag className="h-3 w-[18px]" />
        </div>
        <div className="mt-3 flex gap-2.5">
          <div className="flex-1 pt-1">
            <Lines widths={["90%", "100%", "60%"]} />
          </div>
          <span className="grid h-10 w-9 shrink-0 place-items-center rounded-md bg-lime-tint">
            <UserRound className="h-4 w-4 text-brand-deep" />
          </span>
        </div>
      </div>

      {/* Bank statement */}
      <div className="absolute bottom-[9%] left-[10%] w-[40%] rotate-[3deg] rounded-2xl border border-ink/10 bg-white p-3.5 shadow-lift">
        <Verified />
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-tint">
            <Landmark className="h-3.5 w-3.5 text-brand-deep" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-deep">Bank Statement</span>
        </div>
        <div className="mt-3">
          <Lines widths={["100%", "86%", "94%", "58%"]} />
        </div>
      </div>

      {/* AIS summary */}
      <div className="absolute bottom-[7%] right-[9%] w-[26%] -rotate-[6deg] rounded-2xl border border-ink/10 bg-white p-2.5 shadow-lift">
        <Verified />
        <div className="flex aspect-[4/5] items-end justify-center gap-[8%] overflow-hidden rounded-xl bg-gradient-to-b from-brand-tint to-white px-[12%] pb-[12%]">
          {["46%", "72%", "58%", "88%"].map((h) => (
            <span key={h} className="w-full rounded-t-md bg-brand/30" style={{ height: h }} />
          ))}
        </div>
        <p className="mt-2 text-center text-[9.5px] font-bold uppercase tracking-[0.12em] text-brand-deep">AIS / 26AS</p>
      </div>

      {/* status chip */}
      <div className="absolute left-[46%] top-[55%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-ink/10 bg-white py-2 pl-2 pr-3.5 shadow-lift">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#E7F8EE]">
          <FileCheck2 className="h-3.5 w-3.5 text-[#15803D]" />
        </span>
        <span className="text-[12px] font-semibold text-ink">Matched before filing</span>
      </div>
    </div>
  );
}
