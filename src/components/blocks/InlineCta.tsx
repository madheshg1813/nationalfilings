import { Check, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Slim mid-page CTA: one line of copy, click-to-call + WhatsApp. Use every 2-3 sections. */
export function InlineCta({
  title,
  sub,
  message,
  ticks,
  whatsappLabel = "WhatsApp",
  callLabel = "Talk to an expert",
}: {
  title: string;
  sub?: string;
  message: string;
  /** Light trust ticks shown above the box */
  ticks?: readonly string[];
  /** Full label from sm up; phones always show "WhatsApp" */
  whatsappLabel?: string;
  callLabel?: string;
}) {
  const tel = telLink();
  return (
    <>
    {ticks && (
      <ul className="mb-3.5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] font-medium text-ink-soft sm:mb-4 sm:text-[14px]">
        {ticks.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-brand-deep" strokeWidth={3} aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    )}
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand/15 bg-brand-tint/60 px-4 py-5 text-center sm:rounded-3xl sm:px-8 sm:py-6 md:flex-row md:justify-between md:text-left">
      <div className="min-w-0">
        <p className="font-display text-[16px] font-bold leading-snug text-ink [text-wrap:balance] sm:text-[19px]">{title}</p>
        {sub && <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted sm:text-[15px]">{sub}</p>}
      </div>
      <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {tel && (
          <a href={tel} className="btn-primary !py-3 max-[374px]:!px-3.5 max-[374px]:!text-[13px]">
            <Phone className="h-4 w-4 max-[374px]:hidden" aria-hidden />
            {callLabel}
          </a>
        )}
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp !py-3 max-[374px]:!px-3.5 max-[374px]:!text-[13px]"
        >
          <WhatsAppIcon className="h-4 w-4 max-[374px]:hidden" />
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">{whatsappLabel}</span>
        </a>
      </div>
    </div>
    </>
  );
}
