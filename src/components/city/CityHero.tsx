import { Check, ChevronRight } from "lucide-react";
import { chennaiHero as h } from "@/lib/chennai";
import { whatsappLink } from "@/lib/site";
import { HeroDashboard } from "@/components/ui/HeroDashboard";
import { HeroPlatformTags } from "@/components/ui/HeroProof";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function CityHero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="city-title">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
      <div className="shell relative flex flex-col justify-center pb-10 pt-6 sm:pb-16 sm:pt-10 lg:min-h-[calc(85vh-80px)] lg:pb-20 lg:pt-10">
        <nav aria-label="Breadcrumb" className="text-[12.5px] text-ink-muted">
          <ol className="flex items-center justify-center gap-1 sm:justify-start">
            <li>
              <a href="/" className="hover:text-ink">
                Home
              </a>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-ink-soft">
              Chennai
            </li>
          </ol>
        </nav>

        <h1 id="city-title" className="mt-5 text-center sm:mt-8 sm:text-left">
          <span className="eyebrow-text block">{h.eyebrow}</span>
          <span className="block font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink min-[375px]:text-[2.45rem] sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3.85rem] xl:text-[4.6rem]">
            <span className="block">{h.line1}</span>
            <span className="block">
              {h.line2Before}
              <span className="accent-mark">{h.accent}</span>
              {h.line2After}
            </span>
          </span>
        </h1>

        <div className="mt-6 grid items-center gap-10 sm:mt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div className="text-center sm:text-left">
            <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-ink-muted sm:mx-0 sm:text-[19px]">{h.sub}</p>

            <div id="hero-ctas" className="mt-6 flex items-center justify-center gap-2 sm:justify-start min-[375px]:gap-2.5 sm:mt-8 sm:gap-3">
              <a
                href={whatsappLink(h.primary.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary sm:!px-7 sm:!py-3.5 sm:!text-[16px] max-[359px]:!px-3.5 max-[359px]:!text-[13px]"
              >
                <WhatsAppIcon className="h-4 w-4 max-[359px]:hidden" />
                {h.primary.label}
              </a>
              <a href={h.secondary.href} className="btn-ghost sm:!px-7 sm:!py-3.5 sm:!text-[16px] max-[359px]:!px-3.5 max-[359px]:!text-[13px]">
                {h.secondary.label}
              </a>
            </div>

            <ul className="mx-auto mt-6 grid w-fit grid-cols-1 text-left sm:mx-0 gap-x-4 gap-y-2 text-[13px] font-medium text-ink-soft min-[375px]:grid-cols-2 sm:mt-7 sm:gap-x-6 sm:text-[14.5px]">
              {h.ticks.map((t) => (
                <li key={t} className="flex items-center gap-1.5 whitespace-nowrap">
                  <Check className="h-4 w-4 text-brand-deep" strokeWidth={2.6} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <HeroPlatformTags className="mt-5 justify-center sm:justify-start" />
          </div>

          <div className="hidden sm:block">
            <HeroDashboard variant="chennai" />
          </div>
        </div>
      </div>
    </section>
  );
}
