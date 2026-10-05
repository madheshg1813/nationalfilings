import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { TrustBar } from "./TrustBar";

export type HeroHeadline = { line1: string; line2Before?: string; accent: string; line2After?: string };

type Props = {
  /** Breadcrumb trail (excluding Home). Omit on the homepage. */
  trail?: Crumb[];
  /** Subtle uppercase authority line above the H1 (not part of it), e.g. "Trusted by startups, SMEs & NGOs" */
  kicker?: string;
  /** Small label inside the H1, e.g. "National Filings Chennai", so the H1 text leads with the keyword */
  eyebrow?: string;
  headline: HeroHeadline;
  sub: string;
  primary: { label: string; message: string };
  secondary: { label: string; href: string };
  ticks: string[];
  /** Use the real stats from lib/proof.ts for the ticks (homepage) */
  useStats?: boolean;
};

/**
 * Centred hero used by every page type. Hierarchy, in order of weight:
 * headline (2 lines, 76px desktop / 42px phones, gradient accent) → primary CTA → sub → quiet trust row.
 * ~90vh on desktop with a very faint icon backdrop. Supporting content is capped at 900px; the headline may run wider to stay on 2 lines.
 */
export function ServiceHero({ trail, kicker, eyebrow, headline: h, sub, primary, secondary, ticks, useStats }: Props) {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-title">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <HeroBackdrop />
      <div
        className={`shell relative flex flex-col items-center justify-center pb-16 text-center sm:pb-24 lg:min-h-[calc(90vh-80px)] lg:pb-28 ${
          trail ? "pt-9 sm:pt-14 lg:pt-12" : "pt-14 sm:pt-20 lg:pt-16"
        }`}
      >
        {trail && <Breadcrumbs trail={trail} align="center" className="mb-6 sm:mb-8" />}

        {kicker && (
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-muted sm:mb-7 sm:text-[12.5px]">{kicker}</p>
        )}

        <h1 id="hero-title" className="w-full">
          {eyebrow && <span className="eyebrow-text mb-4 block sm:mb-5">{eyebrow} </span>}
          <span className="mx-auto block max-w-[1180px] font-display text-[2.625rem] font-extrabold leading-[1] tracking-[-0.04em] text-ink sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3.85rem] xl:text-[4.75rem]">
            <span className="block">{h.line1}</span>
            <span className="mt-1 block sm:mt-2">
              {h.line2Before}
              <span className="accent-gradient">{h.accent}</span>
              {h.line2After}
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[900px] text-[15.5px] leading-relaxed text-ink-muted sm:mt-8 sm:text-[19px] lg:text-[20px]">{sub}</p>

        {/* id is used by the mobile sticky bar to know when the hero buttons have scrolled away */}
        <div id="hero-ctas" className="mt-8 flex items-center justify-center gap-2.5 sm:mt-10 sm:gap-4">
          <a
            href={whatsappLink(primary.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group !py-3.5 shadow-[0_14px_30px_-14px_rgba(0,131,130,0.9)] sm:!px-8 sm:!py-4 sm:!text-[16.5px] max-[359px]:!px-3.5 max-[359px]:!text-[13px]"
          >
            <WhatsAppIcon className="h-4 w-4 max-[359px]:hidden sm:h-[18px] sm:w-[18px]" />
            {primary.label}
            <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:block" />
          </a>
          <a
            href={secondary.href}
            className="btn !py-3.5 text-ink-soft ring-1 ring-inset ring-ink/10 hover:bg-ink/[0.03] hover:text-ink sm:!px-7 sm:!py-4 sm:!text-[16px] max-[359px]:!px-3.5 max-[359px]:!text-[13px]"
          >
            {secondary.label}
          </a>
        </div>

        <div className="mt-2 flex w-full max-w-[900px] flex-col items-center sm:mt-4">
          <TrustBar ticks={ticks} useStats={useStats} quiet />
        </div>
      </div>
    </section>
  );
}
