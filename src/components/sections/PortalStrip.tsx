import { Info } from "lucide-react";
import { portals, portalsSection as ps } from "@/lib/home";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Official portals: trust section after the hero.
 * Cards are informational (no destination), so hover is a lift only, not a link affordance.
 */
export function PortalStrip() {
  return (
    <section aria-labelledby="portals-title" className="section border-y border-ink/10 bg-cream-soft">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">{ps.eyebrow}</p>
          <h2 id="portals-title" className="h2">
            {ps.title}
          </h2>
          <p className="lead mt-3">{ps.sub}</p>
        </Reveal>

        {/* Phones: 2-col grid with equal rows (auto-rows-fr), odd last card centred. sm+: flex-wrap 4-up, then 7-up. */}
        <ul className="mx-auto mt-6 grid max-w-6xl auto-rows-fr grid-cols-2 gap-2.5 sm:mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          {portals.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={(i % 7) * 0.04}
              className="[&:last-child:nth-child(odd)]:col-span-2 [&:last-child:nth-child(odd)]:mx-auto [&:last-child:nth-child(odd)]:w-[calc(50%-5px)] sm:w-[calc(25%-12px)] sm:[&:last-child:nth-child(odd)]:mx-0 sm:[&:last-child:nth-child(odd)]:w-[calc(25%-12px)] lg:w-[calc((100%-6*16px)/7)] lg:[&:last-child:nth-child(odd)]:w-[calc((100%-6*16px)/7)]"
            >
              {/* Phones: slim row (icon left, text right). sm+: tall centred card. */}
              <div className="group flex h-full min-h-[64px] items-center gap-3 rounded-2xl border border-ink/10 bg-white px-3 py-2.5 text-left transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift sm:flex-col sm:gap-0 sm:rounded-3xl sm:px-4 sm:py-6 sm:text-center">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white transition duration-300 group-hover:border-lime group-hover:bg-lime-tint sm:h-14 sm:w-14 sm:rounded-2xl">
                  <LucideByName name={p.icon} className="h-[18px] w-[18px] text-ink sm:h-6 sm:w-6" />
                </span>
                <span className="flex min-w-0 flex-col sm:items-center">
                  <span className="font-display text-[14px] font-bold leading-tight text-ink sm:mt-4 sm:text-[17px]">{p.name}</span>
                  <span className="mt-0.5 text-[11.5px] leading-[1.25] text-ink-muted [text-wrap:balance] sm:mt-1 sm:min-h-[2.5em] sm:text-[13.5px]">
                    {p.caption}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mx-auto mt-5 flex max-w-2xl items-start justify-center gap-2 text-center text-[11.5px] leading-relaxed text-ink-faint sm:mt-9 sm:text-[13px]">
          <Info className="mt-0.5 hidden h-3.5 w-3.5 shrink-0 sm:block" strokeWidth={1.8} aria-hidden />
          {ps.disclaimer}
        </p>
      </div>
    </section>
  );
}
