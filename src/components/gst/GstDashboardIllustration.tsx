import { ArrowLeftRight, BadgeCheck, Check, FileSpreadsheet, MailCheck, ReceiptIndianRupee } from "lucide-react";
import { IndiaFlag, TricolourBand } from "@/components/ui/IndiaFlag";

/**
 * Decorative hero visual: a GST dashboard with the certificate, filed returns, a resolved notice and input tax credit.
 * Generic shapes only: the GSTIN is masked, there are no government emblems and no real figures.
 */
export function GstDashboardIllustration() {
  const returns = [
    { name: "GSTR-1", period: "Sales" },
    { name: "GSTR-3B", period: "Summary" },
    { name: "GSTR-2B", period: "Reconciled" },
  ];
  const bars = [46, 62, 54, 78, 70, 92];
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[520px]">
      {/* dashboard panel */}
      <div className="absolute inset-x-[4%] top-[6%] rounded-3xl border border-ink/10 bg-white p-4 shadow-lift lg:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-tint">
              <ReceiptIndianRupee className="h-4 w-4 text-brand-deep" />
            </span>
            <p className="font-display text-[13px] font-bold text-ink lg:text-[14px]">GST dashboard</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#E7F8EE] px-2.5 py-1 text-[10.5px] font-semibold text-[#15803D]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            All filings up to date
          </span>
        </div>

        {/* returns filed */}
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Returns filed</p>
        <ul className="mt-2 grid grid-cols-3 gap-2">
          {returns.map((r) => (
            <li key={r.name} className="rounded-xl bg-cream-soft px-2.5 py-2">
              <div className="flex items-center justify-between">
                <span className="text-[11.5px] font-bold text-ink lg:text-[12px]">{r.name}</span>
                <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-deep">
                  <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                </span>
              </div>
              <p className="mt-0.5 text-[9.5px] text-ink-muted lg:text-[10px]">{r.period}</p>
            </li>
          ))}
        </ul>

        {/* input tax credit */}
        <div className="mt-3 rounded-xl border border-ink/[0.07] p-3">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
              <ArrowLeftRight className="h-3.5 w-3.5 text-brand-deep" />
              Input tax credit
            </p>
            <span className="text-[10px] font-semibold text-brand-deep">Matched with GSTR-2B</span>
          </div>
          <div className="mt-2.5 flex h-14 items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-brand-deep" : "bg-brand/25"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* GST certificate */}
      <div className="absolute -left-[2%] bottom-[4%] w-[46%] -rotate-[4deg] overflow-hidden rounded-2xl border border-ink/10 bg-white p-3.5 pt-5 shadow-lift">
        <TricolourBand className="absolute inset-x-0 top-0" />
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Registration certificate</p>
          <IndiaFlag className="h-3 w-[18px]" />
        </div>
        <p className="mt-1 font-display text-[14px] font-bold leading-tight text-ink">GST Certificate</p>
        <p className="mt-2 font-mono text-[10.5px] tracking-wider text-ink-soft">GSTIN 33 •••• •••• •Z•</p>
        <div className="mt-2.5 flex items-center gap-1.5 text-[10.5px] font-semibold text-brand-deep">
          <BadgeCheck className="h-3.5 w-3.5" />
          Active
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute bottom-[12%] right-[0%] flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2.5 shadow-lift">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#E7F8EE]">
          <MailCheck className="h-3.5 w-3.5 text-[#15803D]" />
        </span>
        <span className="text-[12px] font-semibold text-ink">Notice resolved</span>
      </div>

      <div className="absolute bottom-[0%] right-[18%] flex items-center gap-2 rounded-full border border-ink/10 bg-white py-2 pl-2 pr-3.5 shadow-lift">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-tint">
          <FileSpreadsheet className="h-3.5 w-3.5 text-brand-deep" />
        </span>
        <span className="text-[12px] font-semibold text-ink">GST returns filed</span>
      </div>
    </div>
  );
}
