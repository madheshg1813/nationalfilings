import { process } from "@/lib/home";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const n = process.steps.length;
  return (
    <section id="process" className="section scroll-mt-16" aria-labelledby="process-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">{process.eyebrow}</p>
          <h2 id="process-title" className="h2">
            {process.title}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-5xl sm:mt-12">
          <ol className="grid grid-cols-3 gap-y-8 sm:grid-cols-6">
            {process.steps.map((s, i) => {
              const lastInRow = i === n - 1 || i === 2; // phones break the row after step 3
              const handoff = s.who === "you" && process.steps[i + 1]?.who === "us";
              return (
                <li key={s.title} className="relative flex flex-col items-center px-1 text-center">
                  {i < n - 1 && (
                    <span
                      aria-hidden
                      className={`absolute left-1/2 top-[17px] w-full sm:top-5 ${lastInRow ? "hidden sm:block" : ""} ${
                        handoff ? "h-0 border-t-2 border-dashed border-ink/25" : "h-px bg-ink/20"
                      }`}
                    />
                  )}
                  <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-[13px] font-bold text-white ring-4 ring-white sm:h-10 sm:w-10 sm:text-sm">
                    {i + 1}
                  </span>
                  <span
                    className={`mt-2 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:text-[11px] ${
                      s.who === "you" ? "border border-ink/15 text-ink-soft" : "bg-lime-tint text-ink-soft ring-1 ring-lime"
                    }`}
                  >
                    {s.who === "you" ? "You" : "Us"}
                  </span>
                  <span className="mt-2 font-display text-[12.5px] font-bold leading-tight text-ink [text-wrap:balance] sm:mt-3 sm:text-[15px]">
                    {s.title}
                  </span>
                  <span className="mt-1 text-[11px] leading-tight text-ink-muted sm:text-[13px]">{s.sub}</span>

                </li>
              );
            })}
          </ol>
          <p className="mx-auto mt-8 max-w-xl text-center text-[13px] text-ink-muted sm:mt-10 sm:text-[15px]">
            After you share your documents, we take it from drafting to delivery and update you at every step.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
