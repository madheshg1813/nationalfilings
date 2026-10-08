import Image from "next/image";
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
              <div className="card flex h-full flex-col overflow-hidden">
                {/* photo: resized to the rendered width and served as AVIF/WebP by the image loader */}
                <div className="relative aspect-[16/10] bg-ink/5">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 1280px) 290px, (min-width: 1024px) 23vw, 46vw"
                    quality={90}
                    className="object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/45 to-transparent" aria-hidden />
                  <span className="absolute bottom-2.5 left-2.5 grid h-8 w-8 place-items-center rounded-lg bg-white/90 shadow-sm backdrop-blur sm:bottom-3 sm:left-3 sm:h-9 sm:w-9">
                    <LucideByName name={a.icon} className="h-4 w-4 text-ink sm:h-[18px] sm:w-[18px]" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                {/* fixed heights for title and description, so the tags start at the same line in every card */}
                <h3 className="font-display text-[14px] font-bold leading-snug text-ink sm:min-h-[1.4em] sm:text-[16px]">{a.title}</h3>
                <p className="mt-1 min-h-[2.75em] text-[12px] leading-snug text-ink-muted sm:mt-1.5 sm:text-[14px]">{a.useCase}</p>
                {/* one tag per line, left-aligned: every card shows the same tidy column instead of ragged wrapping */}
                <ul className="mt-auto flex flex-col items-start gap-1.5 pt-3 sm:pt-4">
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
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
