import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredCategories, regularCategories, type ServiceCategory } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ServicePreview } from "./ServicePreview";

// Category pages come next; until then each card opens a WhatsApp chat about that category.
const cardHref = (c: ServiceCategory) => whatsappLink(`Hi National Filings, I need help with ${c.name}.`);

function PopularBadge() {
  return (
    <span className="tag-green absolute left-2.5 top-2.5 z-10 !px-2 !py-0.5 !text-[10px] font-semibold ring-1 ring-lime sm:left-3.5 sm:top-3.5 sm:!px-2.5 sm:!py-1 sm:!text-[11px]">
      Popular
    </span>
  );
}

function CornerArrow() {
  return (
    <span className="absolute right-2.5 top-2.5 z-10 grid h-7 w-7 place-items-center rounded-full border border-ink/10 bg-white text-ink-muted transition duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white sm:right-3.5 sm:top-3.5 sm:h-8 sm:w-8">
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
    </span>
  );
}

function PreviewArea({ c, tall }: { c: ServiceCategory; tall?: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-b border-ink/10 bg-cream-soft/70 px-3 ${
        tall ? "h-44 sm:h-56" : "h-32 sm:h-40"
      }`}
    >
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]"
      >
        <ServicePreview kind={c.preview} />
      </div>
    </div>
  );
}

function CardCta({ label }: { label: string }) {
  return (
    <span className="mt-auto flex items-center gap-1 pt-3 text-[12.5px] font-semibold text-brand-deep sm:pt-4 sm:text-[14px]">
      {label}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
    </span>
  );
}

const cardBase =
  "card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

function FeaturedCard({ c }: { c: ServiceCategory }) {
  return (
    <a href={cardHref(c)} target="_blank" rel="noopener noreferrer" aria-label={`${c.name}: ask an expert on WhatsApp`} className={cardBase}>
      {c.popular && <PopularBadge />}
      <CornerArrow />
      <PreviewArea c={c} tall />
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl border border-ink/10 sm:grid">
            <LucideByName name={c.icon} className="h-5 w-5 text-ink" />
          </span>
          <h3 className="font-display text-[17px] font-bold leading-snug text-ink sm:text-xl">{c.name}</h3>
        </div>
        <ul className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          {c.items?.map((i) => (
            <li key={i} className="chip">
              {i}
            </li>
          ))}
        </ul>
        <CardCta label="Ask an expert" />
      </div>
    </a>
  );
}

function CategoryCard({ c }: { c: ServiceCategory }) {
  return (
    <a href={cardHref(c)} target="_blank" rel="noopener noreferrer" aria-label={`${c.name}: ask an expert on WhatsApp`} className={cardBase}>
      {c.popular && <PopularBadge />}
      <CornerArrow />
      <PreviewArea c={c} />
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink/10 sm:grid">
            <LucideByName name={c.icon} className="h-[18px] w-[18px] text-ink" />
          </span>
          <h3 className="font-display text-[14px] font-bold leading-snug text-ink [text-wrap:balance] sm:text-[16px]">{c.name}</h3>
        </div>
        <ul className="mt-4 hidden space-y-2 border-t border-ink/5 pt-4 sm:block">
          {c.features.map((f, i) => (
            <li key={f} className="flex items-center gap-2 text-[13px] text-ink-soft">
              <LucideByName name={c.featureIcons[i]} className="h-3.5 w-3.5 shrink-0 text-ink-muted" />
              {f}
            </li>
          ))}
        </ul>
        <CardCta label="Enquire" />
      </div>
    </a>
  );
}

export function Services() {
  return (
    <section id="services" className="section scroll-mt-16" aria-labelledby="services-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Our services</p>
          <h2 id="services-title" className="h2">
            Every registration and filing, one team
          </h2>
          <p className="lead mt-3">Tap a category to ask an expert about it. Popular ones are marked.</p>
        </Reveal>

        <div className="mt-7 grid gap-3 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {featuredCategories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06} className="h-full">
              <FeaturedCard c={c} />
            </Reveal>
          ))}
        </div>

        <ul className="mt-3 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-4">
          {regularCategories.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 4) * 0.05} className="h-full">
              <CategoryCard c={c} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-4 sm:mt-6">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-ink/15 px-4 py-5 text-center sm:flex-row sm:justify-between sm:rounded-3xl sm:px-7 sm:py-6 sm:text-left">
            <div>
              <p className="font-display text-[15px] font-bold text-ink sm:text-[17px]">Not sure which service you need?</p>
              <p className="mt-1 text-[13px] text-ink-muted sm:text-[15px]">Describe your situation and we&apos;ll point you to the right filing.</p>
            </div>
            <a
              href={whatsappLink("Hi National Filings, I'm not sure which service I need. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              <WhatsAppIcon /> Ask an expert
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
