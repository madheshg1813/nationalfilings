import { Reveal } from "@/components/ui/Reveal";

export type Step = { title: string; sub: string; who?: "you" | "us" };

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  steps: Step[];
  note?: string;
  className?: string;
};

// Static class maps so Tailwind keeps them (3–6 steps)
const DESKTOP_COLS: Record<number, string> = { 3: "sm:grid-cols-3", 4: "sm:grid-cols-4", 5: "sm:grid-cols-5", 6: "sm:grid-cols-6" };
const PHONE_COLS: Record<number, number> = { 3: 3, 4: 2, 5: 3, 6: 3 };

/** Compact stepper: numbered black dots on one line, short title + 2–4 word subline, optional You/Us tags. */
export function ProcessSteps({ id = "process", eyebrow, title, steps, note, className = "" }: Props) {
  const n = steps.length;
  const perRow = PHONE_COLS[n] ?? 3;
  return (
    <section id={id} className={`section scroll-mt-16 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">{eyebrow}</p>
          <h2 id={`${id}-title`} className="h2">
            {title}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-5xl sm:mt-12">
          <ol className={`grid gap-y-8 ${perRow === 2 ? "grid-cols-2" : "grid-cols-3"} ${DESKTOP_COLS[n] ?? "sm:grid-cols-6"}`}>
            {steps.map((s, i) => {
              const lastInPhoneRow = i === n - 1 || (i + 1) % perRow === 0;
              const handoff = s.who === "you" && steps[i + 1]?.who === "us";
              return (
                <li key={s.title} className="relative flex flex-col items-center px-1 text-center">
                  {i < n - 1 && (
                    <span
                      aria-hidden
                      className={`absolute left-1/2 top-[17px] w-full sm:top-5 ${lastInPhoneRow ? "hidden sm:block" : ""} ${
                        handoff ? "h-0 border-t-2 border-dashed border-ink/25" : "h-px bg-ink/20"
                      }`}
                    />
                  )}
                  <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-[13px] font-bold text-white ring-4 ring-white sm:h-10 sm:w-10 sm:text-sm">
                    {i + 1}
                  </span>
                  {s.who && (
                    <span
                      className={`mt-2 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:text-[11px] ${
                        s.who === "you" ? "border border-ink/15 text-ink-soft" : "bg-lime-tint text-ink-soft ring-1 ring-lime"
                      }`}
                    >
                      {s.who === "you" ? "You" : "Us"}
                    </span>
                  )}
                  <span className="mt-2 font-display text-[12.5px] font-bold leading-tight text-ink [text-wrap:balance] sm:mt-3 sm:text-[15px]">
                    {s.title}
                  </span>
                  <span className="mt-1 text-[11px] leading-tight text-ink-muted sm:text-[13px]">{s.sub}</span>
                </li>
              );
            })}
          </ol>
          {note && <p className="mx-auto mt-8 max-w-xl text-center text-[13px] text-ink-muted sm:mt-10 sm:text-[15px]">{note}</p>}
        </Reveal>
      </div>
    </section>
  );
}
