import { audiences } from "@/lib/home";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";

/** Information cards only (the user's call, 2026-10-05): no links, so nothing here interlinks to other pages. */
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
              <div className="card flex h-full flex-col p-3.5 sm:p-6">
                <LucideByName name={a.icon} className="h-5 w-5 text-ink sm:h-6 sm:w-6" />
                <h3 className="mt-2.5 font-display text-[14px] font-bold leading-snug text-ink [text-wrap:balance] sm:mt-4 sm:text-[16px]">{a.title}</h3>
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
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
