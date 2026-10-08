import { ArrowRight, ArrowUpRight } from "lucide-react";
import { homePillars, keyServices, type PillarCard, type PreviewKind } from "@/lib/services";
import { pillars, serviceHref, type Pillar, type ServicePage } from "@/lib/routes";
import { whatsappLink } from "@/lib/site";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ServicePreview } from "./ServicePreview";

// Each card links to its page once that page is published, and is a plain card until then.
// Cards never open WhatsApp (the user's rule); only the "Not sure which service" CTA below does.
type Card = PillarCard & { page: Pillar; href: string; live: boolean };

const cards: Card[] = homePillars.map((c) => {
  const page = pillars.find((p) => p.id === c.id)!;
  const href = serviceHref(page);
  return { ...c, page, href, live: Boolean(href) };
});
const featured = cards.filter((c) => c.featured);
const regular = cards.filter((c) => !c.featured);

const key = keyServices.map((k) => {
  const c = pillars.flatMap((p) => p.clusters).find((x) => x.id === k.id) as ServicePage;
  const href = serviceHref(c);
  return { ...k, title: c.title, href, live: Boolean(href) };
});

/** The card itself: a link when its page is published, otherwise the same card without link or hover */
function Shell({ href, className, plain, children }: { href: string; className: string; plain: string; children: React.ReactNode }) {
  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <div className={plain}>{children}</div>
  );
}

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

function PreviewArea({ preview, tall }: { preview: PreviewKind; tall?: boolean }) {
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
        <ServicePreview kind={preview} />
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
// Same card before its page is published: no link, no hover lift
const cardPlain = "card relative flex h-full flex-col overflow-hidden";

function FeaturedCard({ c }: { c: Card }) {
  return (
    <Shell href={c.href} className={cardBase} plain={cardPlain}>
      {c.popular && <PopularBadge />}
      {c.live && <CornerArrow />}
      <PreviewArea preview={c.preview} tall />
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl border border-ink/10 sm:grid">
            <LucideByName name={c.page.icon} className="h-5 w-5 text-ink" />
          </span>
          <h3 className="font-display text-[17px] font-bold leading-snug text-ink sm:text-xl">{c.page.label}</h3>
        </div>
        <ul className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          {c.items?.map((i) => (
            <li key={i} className="chip">
              {i}
            </li>
          ))}
        </ul>
        {c.live && <CardCta label="View service" />}
      </div>
    </Shell>
  );
}

function CategoryCard({ c }: { c: Card }) {
  return (
    <Shell href={c.href} className={cardBase} plain={cardPlain}>
      {c.popular && <PopularBadge />}
      {c.live && <CornerArrow />}
      <PreviewArea preview={c.preview} />
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink/10 sm:grid">
            <LucideByName name={c.page.icon} className="h-[18px] w-[18px] text-ink" />
          </span>
          <h3 className="font-display text-[14px] font-bold leading-snug text-ink [text-wrap:balance] sm:text-[16px]">{c.page.label}</h3>
        </div>
        <ul className="mt-4 hidden space-y-2 border-t border-ink/5 pt-4 sm:block">
          {c.features.map((f, i) => (
            <li key={f} className="flex items-center gap-2 text-[13px] text-ink-soft">
              <LucideByName name={c.featureIcons[i]} className="h-3.5 w-3.5 shrink-0 text-ink-muted" />
              {f}
            </li>
          ))}
        </ul>
        {c.live && <CardCta label="View service" />}
      </div>
    </Shell>
  );
}

/** Small tile for a key cluster service: icon + name only (the user's call: small cards). The line shows as a tooltip. */
function KeyServiceCard({ k }: { k: (typeof key)[number] }) {
  return (
    <Shell
      href={k.href}
      className="card group flex h-full items-center gap-2.5 !rounded-xl px-3 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      plain="card flex h-full items-center gap-2.5 !rounded-xl px-3 py-2.5"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-tint transition group-hover:bg-brand-deep">
        <LucideByName name={k.icon} className="h-4 w-4 text-brand-deep transition group-hover:text-white" />
      </span>
      <span className="min-w-0 font-display text-[12.5px] font-bold leading-tight text-ink [text-wrap:balance] sm:text-[13.5px]">{k.title}</span>
    </Shell>
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
          <p className="lead mt-3">Explore our core services, or jump straight to a key filing below. Popular ones are marked.</p>
        </Reveal>

        <div className="mt-7 grid gap-3 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {featured.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06} className="h-full">
              <FeaturedCard c={c} />
            </Reveal>
          ))}
        </div>

        <ul className="mt-3 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-4">
          {regular.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 4) * 0.05} className="h-full">
              <CategoryCard c={c} />
            </Reveal>
          ))}
        </ul>

        <h3 className="mt-8 text-center font-display text-[16px] font-bold text-ink sm:mt-12 sm:text-[18px]">Key services</h3>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {key.map((k, i) => (
            <Reveal as="li" key={k.id} delay={(i % 6) * 0.04} className="h-full">
              <KeyServiceCard k={k} />
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
