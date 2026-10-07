import { BadgeCheck, Check, HeartHandshake, ScrollText, Users } from "lucide-react";
import { IndiaFlag, TricolourBand } from "@/components/ui/IndiaFlag";

/**
 * Decorative hero illustration for the NGO pillar: a stylised registration certificate with the steps around it.
 * Same layout as IncorporationIllustration. Generic shapes only, no government emblem or registration numbers.
 */
export function NgoIllustration() {
  const steps = ["Consultation", "Structure", "Documents", "Filing", "Certificate"];
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[520px]">

      {/* paper behind */}
      <div className="absolute left-[24%] top-[14%] h-[66%] w-[50%] rotate-[5deg] rounded-2xl border border-ink/[0.06] bg-cream-soft" />

      {/* certificate */}
      <div className="absolute left-[21%] top-[12%] w-[54%] -rotate-[2deg] overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 pt-6 shadow-lift lg:p-6 lg:pt-7">
        <TricolourBand className="absolute inset-x-0 top-0" />
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-tint">
            <HeartHandshake className="h-[18px] w-[18px] text-brand-deep" />
          </span>
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Certificate of</p>
            <p className="font-display text-[14px] font-bold leading-tight text-ink lg:text-[15px]">Registration</p>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 font-display text-[13px] font-semibold text-ink lg:text-[14px]">
          Your Foundation
          <IndiaFlag className="h-3.5 w-[21px]" />
        </p>
        <div className="mt-3 space-y-2">
          <div className="h-1.5 w-full rounded-full bg-ink/[0.07]" />
          <div className="h-1.5 w-[86%] rounded-full bg-ink/[0.07]" />
          <div className="h-1.5 w-[64%] rounded-full bg-ink/[0.07]" />
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div className="space-y-1.5">
            <div className="h-1.5 w-16 rounded-full bg-ink/[0.07]" />
            <div className="font-display text-[15px] italic text-ink-faint [font-family:cursive]">Registered</div>
          </div>
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-brand-deep text-white ring-4 ring-lime/70">
            <BadgeCheck className="h-7 w-7" strokeWidth={1.75} />
          </span>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute right-[2%] top-[18%] flex items-center gap-2 rounded-full border border-ink/10 bg-white py-2 pl-2 pr-3.5 shadow-lift">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#E7F8EE]">
          <Check className="h-3.5 w-3.5 text-[#15803D]" strokeWidth={3} />
        </span>
        <span className="text-[12.5px] font-semibold text-ink">Deed registered</span>
      </div>

      <div className="absolute left-0 top-[46%] flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2.5 shadow-lift">
        <Users className="h-4 w-4 text-brand-deep" />
        <span className="text-[12.5px] font-semibold text-ink">Trustees verified</span>
      </div>

      <div className="absolute right-[4%] top-[56%] flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2.5 shadow-lift">
        <ScrollText className="h-4 w-4 text-brand-deep" />
        <span className="text-[12.5px] font-semibold text-ink">12A &amp; 80G next</span>
      </div>

      {/* progress card */}
      <div className="absolute bottom-[3%] left-[10%] right-[14%] rounded-2xl border border-ink/10 bg-white p-4 shadow-lift">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Registration progress</p>
          <p className="text-[11.5px] font-semibold text-brand-deep">4 of 5</p>
        </div>
        <ol className="mt-3 grid grid-cols-5 gap-1.5">
          {steps.map((s, i) => (
            <li key={s}>
              <div className={`h-1.5 rounded-full ${i < 4 ? "bg-brand" : "bg-ink/10"}`} />
              <p className={`mt-1.5 truncate text-[9.5px] font-medium lg:text-[10.5px] ${i < 4 ? "text-ink-soft" : "text-ink-faint"}`}>{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
