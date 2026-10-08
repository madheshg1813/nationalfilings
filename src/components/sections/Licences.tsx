import { ArrowRight } from "lucide-react";
import { licenceSection } from "@/lib/home";
import { licences, serviceHref } from "@/lib/routes";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";
import { InlineCta } from "@/components/blocks/InlineCta";
import { LicencePreview } from "./LicencePreview";

// A card is a plain crawlable link to its licence page once that page is published, and a plain card until then.
// Cards never open WhatsApp (the user's rule); the CTA panel below does.
const cards = licenceSection.cards.map((c) => ({ ...c, href: serviceHref(licences.find((l) => l.id === c.id)!) }));

function CardBody({ c }: { c: (typeof cards)[number] }) {
  return (
    <>
      {/* mini illustration, same style as the service cards above */}
      <div className="relative flex h-24 items-center justify-center overflow-hidden border-b border-ink/10 bg-cream-soft/70 px-2 sm:h-32" aria-hidden>
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]">
          <LicencePreview id={c.id} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <div className="flex items-start gap-2.5">
          <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-tint transition duration-300 group-hover:bg-brand-deep sm:grid">
            <LucideByName name={c.icon} className="h-[18px] w-[18px] text-brand-deep transition duration-300 group-hover:text-white" />
          </span>
          {/* min height = two title lines, so every description in a row starts at the same height */}
          <h3 className="flex min-h-[2.6em] items-center font-display text-[13px] font-bold leading-[1.3] text-ink sm:text-[16px]">
            {c.short ? (
              <>
                <span className="sm:hidden">{c.short}</span>
                <span className="hidden sm:inline">{c.name}</span>
              </>
            ) : (
              c.name
            )}
          </h3>
        </div>
        {/* phones show the title only, so all seven cards fit on screen without scrolling sideways */}
        <p className="mt-2 hidden pb-4 text-[13.5px] leading-relaxed text-ink-muted sm:block">{c.line}</p>
        {c.href && (
          <span className="mt-auto flex items-center gap-1 pt-2 text-[12px] font-semibold text-brand-deep sm:border-t sm:border-ink/[0.06] sm:pt-4 sm:text-[14px]">
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" aria-hidden />
          </span>
        )}
      </div>
    </>
  );
}

/** Home page: licences, registrations & certifications. Centred grid: 2 per row on phones, 4 on desktop. */
export function Licences() {
  const s = licenceSection;
  return (
    <section id="licences" className="section scroll-mt-16 border-t border-ink/[0.06]" aria-labelledby="licences-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">{s.eyebrow}</p>
          <h2 id="licences-title" className="h2">
            {s.title}
          </h2>
          <p className="lead mt-3">{s.lead}</p>
        </Reveal>

        {/* every card visible at once (no swipe row); the last row is centred so 7 cards never leave a hole */}
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-5">
          {cards.map((c, i) => (
            <Reveal
              as="li"
              key={c.id}
              delay={(i % 4) * 0.05}
              className="w-[calc(50%-5px)] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              {c.href ? (
                <a
                  href={c.href}
                  className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <CardBody c={c} />
                </a>
              ) : (
                <div className="card flex h-full flex-col overflow-hidden">
                  <CardBody c={c} />
                </div>
              )}
            </Reveal>
          ))}
        </ul>

        <div className="mt-6 sm:mt-10">
          <InlineCta title={s.cta.title} sub={s.cta.sub} message={s.cta.message} whatsappLabel="WhatsApp consultation" />
        </div>
      </div>
    </section>
  );
}
