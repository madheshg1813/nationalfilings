import type { ReactNode } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import type { HeroHeadline } from "./ServiceHero";

type Props = {
  trail: Crumb[];
  /** Optional small label inside the H1, above the headline. Leave out when the headline itself carries the keyword. */
  eyebrow?: string;
  headline: HeroHeadline;
  sub: string;
  badges: string[];
  /** WhatsApp pre-filled message for the secondary CTA */
  whatsapp: string;
  /** Right-hand illustration (decorative, 1024px and up) */
  visual: ReactNode;
  /** Primary (click-to-call) button label */
  callLabel?: string;
  /** Small credibility signals under the badges, e.g. <HeroTrust /> (Google + Justdial) */
  proof?: ReactNode;
};

/**
 * Pillar page hero. The 2-line headline (76px desktop / 42px phones) runs the full width so it stays on 2 lines;
 * below it, sub + CTAs + badges sit left and the illustration right. Centred on phones.
 * Primary CTA calls (click-to-call), secondary opens WhatsApp.
 */
export function PillarHero({ trail, eyebrow, headline: h, sub, badges, whatsapp, visual, proof, callLabel = "Talk to an expert" }: Props) {
  const tel = telLink();
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-title">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <HeroBackdrop />
      <div className={`shell relative flex flex-col justify-center pb-14 pt-9 text-center sm:pb-20 sm:pt-14 lg:text-left lg:pb-16 lg:pt-6`}>
        <Breadcrumbs trail={trail} align="center-lg-left" className="mb-6 sm:mb-8" />

        <div className="relative">
          {/* soft stage behind the illustration; rises beside the headline so the right side never looks empty */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 bottom-0 top-[30%] hidden w-[46%] rounded-[2.5rem] border border-brand/10 bg-gradient-to-br from-brand-tint via-white to-lime-tint lg:block xl:-right-6"
          />
        <h1 id="hero-title" className="relative">
          {eyebrow && (
            <>
              <span className="eyebrow-text mb-4 block sm:mb-5">{eyebrow}</span>{" "}
            </>
          )}
          <span className="block font-display text-[2.625rem] font-extrabold max-[359px]:text-[2.25rem] leading-[1] tracking-[-0.04em] text-ink sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[4.75rem]">
            {/* phones: one flowing sentence (fewer, fuller lines); 2 fixed lines from sm up */}
            <span className="sm:block">{h.line1}</span>{" "}
            <span className="sm:mt-2 sm:block">
              {h.line2Before}
              <span className="accent-gradient">{h.accent}</span>
              {h.line2After}
            </span>
          </span>
        </h1>

        <div className="relative mt-6 grid items-center gap-10 sm:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:mt-8 lg:gap-14">
          <div className="lg:text-left">
            <p className="mx-auto max-w-[560px] text-[15.5px] leading-relaxed text-ink-muted sm:text-[19px] lg:mx-0 lg:text-[20px]">{sub}</p>

            {/* id is used by the mobile sticky bar to know when the hero buttons have scrolled away */}
            <div id="hero-ctas" className="mt-7 flex items-center justify-center gap-2.5 sm:mt-9 sm:gap-3.5 lg:justify-start">
              <a
                href={tel ?? whatsappLink(whatsapp)}
                className="btn-primary group !py-3.5 shadow-[0_14px_30px_-14px_rgba(0,131,130,0.9)] sm:!px-7 sm:!py-4 sm:!text-[16.5px] max-[374px]:!px-3.5 max-[374px]:!text-[13px]"
              >
                <Phone className="h-4 w-4 max-[374px]:hidden sm:h-[18px] sm:w-[18px]" aria-hidden />
                {callLabel}
                <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:block" aria-hidden />
              </a>
              <a
                href={whatsappLink(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn !py-3.5 text-ink-soft ring-1 ring-inset ring-ink/10 hover:bg-ink/[0.03] hover:text-ink sm:!px-6 sm:!py-4 sm:!text-[16px] max-[374px]:!px-3.5 max-[374px]:!text-[13px]"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp max-[374px]:hidden sm:h-[18px] sm:w-[18px]" />
                <span className="sm:hidden">WhatsApp</span>
                <span className="hidden sm:inline">WhatsApp consultation</span>
              </a>
            </div>

            <ul className="mx-auto mt-7 grid w-fit grid-cols-2 gap-x-3 gap-y-2.5 text-left text-[12px] font-medium text-ink-soft max-[374px]:grid-cols-1 sm:mt-9 sm:gap-x-6 sm:text-[14px] lg:mx-0">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-1.5 whitespace-nowrap">
                  <Check className="h-3.5 w-3.5 shrink-0 text-brand-deep sm:h-4 sm:w-4" strokeWidth={3} aria-hidden />
                  {b}
                </li>
              ))}
            </ul>

            {proof}
          </div>

          <div className="hidden pb-6 lg:-mt-14 lg:block" aria-hidden>
            {visual}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
