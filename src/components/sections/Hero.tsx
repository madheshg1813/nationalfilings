import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/home";
import { whatsappLink } from "@/lib/site";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { HeroPlatformTags, HeroTicks } from "@/components/ui/HeroProof";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  const h = hero.headline;
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-title">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
      <HeroBackdrop />
      <div className="shell relative flex flex-col items-center justify-center pb-12 pt-10 text-center sm:pb-20 sm:pt-16 lg:min-h-[calc(85vh-80px)] lg:pb-24 lg:pt-12">
        <h1
          id="hero-title"
          className="font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink min-[375px]:text-[2.45rem] sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3.85rem] xl:text-[4.6rem]"
        >
          <span className="block">{h.before}</span>
          <span className="block">
            {h.lineTwoBefore}
            <span className="accent-mark">{h.accent}</span>
            {h.after}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:mt-7 sm:text-[19px]">{hero.sub}</p>

        <div id="hero-ctas" className="mt-6 flex items-center justify-center gap-2 min-[375px]:gap-2.5 sm:mt-9 sm:gap-3">
          <a
            href={whatsappLink(hero.primary.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group sm:!px-7 sm:!py-3.5 sm:!text-[16px] max-[359px]:!px-3.5 max-[359px]:!text-[13px]"
          >
            <WhatsAppIcon className="h-4 w-4 max-[359px]:hidden" />
            {hero.primary.label}
            <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:block" />
          </a>
          <a href={hero.secondary.href} className="btn-ghost sm:!px-7 sm:!py-3.5 sm:!text-[16px] max-[359px]:!px-3.5 max-[359px]:!text-[13px]">
            {hero.secondary.label}
          </a>
        </div>

        <HeroTicks fallback={hero.ticks} className="mt-6 max-w-4xl justify-center sm:mt-8" />
        <HeroPlatformTags className="mt-5 justify-center" />
      </div>
    </section>
  );
}
