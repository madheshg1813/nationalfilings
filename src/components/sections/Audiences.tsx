import { ArrowUpRight } from "lucide-react";
import { audiences } from "@/lib/home";
import { whatsappLink } from "@/lib/site";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";

export function Audiences() {
  return (
    <section className="section bg-cream-soft" aria-labelledby="audiences-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Who we help</p>
          <h2 id="audiences-title" className="h2">
            Find where you fit
          </h2>
          <p className="lead mt-3">Pick the one that sounds like you. We&apos;ll start with the filings you need first.</p>
        </Reveal>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.title} delay={(i % 4) * 0.05} className="h-full">
              <a
                href={whatsappLink(a.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${a.title}: ask an expert on WhatsApp`}
                className="card group relative flex h-full flex-col p-3.5 transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:p-6"
              >
                <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-ink-faint transition duration-300 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-ink sm:right-5 sm:top-5" />
                <LucideByName name={a.icon} className="h-5 w-5 text-ink sm:h-6 sm:w-6" />
                <h3 className="mt-2.5 pr-4 font-display text-[14px] font-bold leading-snug text-ink [text-wrap:balance] sm:mt-4 sm:text-[16px]">
                  {a.title}
                </h3>
                <p className="mt-1 text-[12px] leading-snug text-ink-muted sm:mt-1.5 sm:text-[14px]">{a.useCase}</p>
                <ul className="mt-auto flex flex-wrap gap-1 pt-3 sm:gap-1.5 sm:pt-4">
                  {a.needs.map((n) => (
                    <li
                      key={n}
                      className="tag-green !px-2 !py-0.5 !text-[10.5px] [&:nth-child(3)]:hidden sm:!px-2.5 sm:!py-1 sm:!text-xs sm:[&:nth-child(3)]:inline-flex"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
