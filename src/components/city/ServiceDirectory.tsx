import { ArrowRight } from "lucide-react";
import { licences, pillars } from "@/lib/routes";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";

const cardCls =
  "card group relative flex h-full flex-col p-4 transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:p-6";

/** Section 3: the six pillars. The main job of the city hub is routing people here. */
export function ServiceDirectory() {
  return (
    <section id="chennai-services" className="section scroll-mt-16 bg-cream-soft" aria-labelledby="dir-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Our services in Chennai</p>
          <h2 id="dir-title" className="h2">
            Choose what you need help with
          </h2>
          <p className="lead mt-3">Each category covers related services, with details, documents and next steps.</p>
        </Reveal>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const count = p.clusters.length + 1;
            return (
              <Reveal as="li" key={p.id} delay={(i % 3) * 0.05} className="h-full">
                <a href={p.path} className={cardCls} aria-label={`${p.label}: ${count} services`}>
                  <div className="flex items-start justify-between gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white sm:h-12 sm:w-12">
                      <LucideByName name={p.icon} className="h-5 w-5 text-ink sm:h-[22px] sm:w-[22px]" />
                    </span>
                    <span className="tag-green whitespace-nowrap !px-2 !py-0.5 !text-[10.5px] font-semibold sm:!px-2.5 sm:!py-1 sm:!text-xs">
                      {count} services
                    </span>
                  </div>
                  <h3 className="mt-3.5 font-display text-[14.5px] font-bold leading-snug text-ink [text-wrap:balance] sm:mt-5 sm:text-[18px]">
                    {p.label}
                  </h3>
                  <p className="mt-1.5 hidden text-[14.5px] leading-relaxed text-ink-muted sm:block">{p.blurb}</p>
                  <span className="mt-auto flex items-center gap-1 pt-3 text-[12.5px] font-semibold text-brand-deep sm:pt-5 sm:text-[14px]">
                    <span className="sm:hidden">Explore</span>
                    <span className="hidden sm:inline">Explore {p.short}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Section 4: standalone licence pages. */
export function LicenceGrid() {
  return (
    <section className="section" aria-labelledby="lic-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Licences & registrations</p>
          <h2 id="lic-title" className="h2">
            Licences to open and operate
          </h2>
        </Reveal>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {licences.map((l, i) => (
            <Reveal as="li" key={l.id} delay={(i % 4) * 0.05} className="h-full">
              <a href={l.path} className={cardCls}>
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white">
                  <LucideByName name={l.icon} className="h-5 w-5 text-ink" />
                </span>
                <h3 className="mt-3.5 font-display text-[14.5px] font-bold leading-snug text-ink [text-wrap:balance] sm:mt-4 sm:text-[16px]">
                  {l.label}
                </h3>
                <p className="mt-1 hidden text-[13.5px] leading-snug text-ink-muted sm:block">{l.blurb}</p>
                <span className="mt-auto flex items-center gap-1 pt-3 text-[12.5px] font-semibold text-brand-deep sm:pt-4 sm:text-[13.5px]">
                  View details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Section 10: every pillar with its child pages, for navigation and internal linking. */
export function ExploreServices() {
  return (
    <section className="section" aria-labelledby="explore-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">All services</p>
          <h2 id="explore-title" className="h2">
            Explore all services
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 sm:mt-12 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3">
          {pillars.map((p) => (
            <nav key={p.id} aria-label={p.label}>
              <a href={p.path} className="group inline-flex items-center gap-2 font-display text-[14px] font-bold text-ink sm:text-[16px]">
                <LucideByName name={p.icon} className="hidden h-[18px] w-[18px] text-ink-muted sm:block" />
                <span className="group-hover:underline group-hover:underline-offset-4">{p.label}</span>
              </a>
              <ul className="mt-2.5 space-y-2 border-l border-ink/10 pl-3 sm:mt-3 sm:pl-4">
                {p.clusters.map((c) => (
                  <li key={c.id}>
                    <a href={c.path} className="text-[13px] leading-snug text-ink-muted transition hover:text-ink sm:text-[14.5px]">
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </section>
  );
}
