import { chennaiAbout as a } from "@/lib/chennai";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";

export function CityAbout() {
  return (
    <section className="section border-t border-ink/10" aria-labelledby="about-title">
      <div className="shell grid gap-7 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow-text">{a.eyebrow}</p>
          <h2 id="about-title" className="h2">
            {a.title}
          </h2>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-muted sm:mt-5 sm:space-y-4 sm:text-[17px]">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="card p-5 sm:p-7">
            <h3 className="font-display text-[16px] font-bold text-ink sm:text-[18px]">{a.stepsTitle}</h3>
            <ol className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
              {a.steps.map((s, i) => (
                <li key={s.title} className="flex gap-3.5">
                  <span className="relative flex flex-col items-center">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-[13px] font-bold text-white">
                      {i + 1}
                    </span>
                    {i < a.steps.length - 1 && <span aria-hidden className="mt-1 w-px flex-1 bg-ink/15" />}
                  </span>
                  <span className="pb-1">
                    <span className="flex items-center gap-2 font-display text-[15px] font-bold text-ink">
                      <LucideByName name={s.icon} className="h-4 w-4 text-ink-muted" />
                      {s.title}
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-snug text-ink-muted sm:text-[14.5px]">{s.line}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
