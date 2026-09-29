import { chennaiAudiences } from "@/lib/chennai";
import { whatsappLink } from "@/lib/site";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";

export function CityAudiences() {
  return (
    <section className="section bg-cream-soft" aria-labelledby="city-aud-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Who we help</p>
          <h2 id="city-aud-title" className="h2">
            Working with Chennai businesses at every stage
          </h2>
        </Reveal>
        <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {chennaiAudiences.map((a, i) => (
            <Reveal as="li" key={a.title} delay={(i % 3) * 0.05} className="h-full">
              <a
                href={whatsappLink(a.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${a.title}: ask an expert on WhatsApp`}
                className="card flex h-full items-start gap-3 p-3.5 transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift sm:gap-4 sm:p-6"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white sm:h-11 sm:w-11">
                  <LucideByName name={a.icon} className="h-[18px] w-[18px] text-ink sm:h-5 sm:w-5" />
                </span>
                <span>
                  <span className="block font-display text-[14px] font-bold leading-snug text-ink sm:text-[16px]">{a.title}</span>
                  <span className="mt-1 hidden text-[14px] leading-snug text-ink-muted sm:block">{a.line}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
