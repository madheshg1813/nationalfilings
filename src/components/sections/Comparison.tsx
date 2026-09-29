"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, UserRound } from "lucide-react";
import { barLevels, comparison, metrics, type Factor } from "@/lib/home";
import { whatsappLink } from "@/lib/site";
import { LucideByName } from "@/components/ui/LucideByName";

const AUTO_MS = 2500;
const PAUSE_MS = 6000;

function Bar({ value, tone, on, delay = 0, thin }: { value: number; tone: "alone" | "ours"; on: boolean; delay?: number; thin?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-full bg-ink/[0.06] ${thin ? "h-1" : "h-1.5 sm:h-2"}`}>
      <m.div
        className={`h-full rounded-full ${tone === "alone" ? "bg-ink/40" : "bg-brand"}`}
        initial={{ width: 0 }}
        animate={{ width: on ? `${value}%` : "0%" }}
        transition={{ duration: 0.7, ease: "easeOut", delay }}
      />
    </div>
  );
}

/** Desktop/tablet: the original two-panel layout, now scored on five outcomes. */
function Panel({ f, tone, on }: { f: Factor; tone: "alone" | "ours"; on: boolean }) {
  const ours = tone === "ours";
  return (
    <div className={`card relative h-full p-6 ${ours ? "border-brand/40 ring-1 ring-brand/20" : ""}`}>
      {ours && <span className="tag-green absolute right-4 top-4">Handled for you</span>}
      <div className="flex items-center gap-2.5">
        <span className={`grid h-9 w-9 place-items-center rounded-full ${ours ? "bg-brand-tint" : "border border-ink/10"}`}>
          {ours ? (
            <Check className="h-4 w-4 text-brand-deep" strokeWidth={2.6} />
          ) : (
            <UserRound className="h-4 w-4 text-ink-muted" strokeWidth={1.8} />
          )}
        </span>
        <h3 className={`font-display text-[17px] font-bold ${ours ? "text-ink" : "text-ink-soft"}`}>
          {ours ? "With National Filings" : "Doing it alone"}
        </h3>
      </div>
      <ul className="mt-6 space-y-4">
        {metrics.map((mt, i) => (
          <li key={mt.key}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">{mt.label}</span>
            </div>
            <p className={`mb-1.5 mt-0.5 text-[14px] leading-snug ${ours ? "text-ink" : "text-ink-muted"}`}>
              {f.rows[mt.key][ours ? 1 : 0]}
            </p>
            <Bar value={barLevels[tone][i]} tone={tone} on={on} delay={i * 0.06} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Phones: one card, one row per outcome, alone vs ours stacked, so nothing gets squeezed at 320px. */
function MobileRows({ f, on }: { f: Factor; on: boolean }) {
  return (
    <div className="card divide-y divide-ink/5 !rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3 text-[11px] font-semibold">
        <span className="flex items-center gap-1.5 text-ink-muted">
          <span className="h-2 w-2 rounded-full bg-ink/40" /> Alone
        </span>
        <span className="flex items-center gap-1.5 text-brand-deep">
          <span className="h-2 w-2 rounded-full bg-brand" /> With National Filings
        </span>
      </div>
      {metrics.map((mt, i) => (
        <div key={mt.key} className="px-4 py-3">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
            <LucideByName name={mt.icon} className="h-3.5 w-3.5" /> {mt.label}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div>
              <p className="min-h-[2.5em] text-[12px] leading-snug text-ink-muted">{f.rows[mt.key][0]}</p>
              <div className="mt-1.5">
                <Bar value={barLevels.alone[i]} tone="alone" on={on} delay={i * 0.05} thin />
              </div>
            </div>
            <div>
              <p className="min-h-[2.5em] text-[12px] font-medium leading-snug text-ink">{f.rows[mt.key][1]}</p>
              <div className="mt-1.5">
                <Bar value={barLevels.ours[i]} tone="ours" on={on} delay={i * 0.05} thin />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Comparison() {
  const factors = comparison.factors;
  const [active, setActive] = useState(0);
  const f = factors[active];
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Phones: auto-advance the task tabs while on screen
  useEffect(() => {
    if (reduce || !inView) return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setActive((a) => (a + 1) % factors.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [inView, reduce, factors.length]);

  // Keep the active tab visible inside the strip without scrolling the page
  useEffect(() => {
    const strip = stripRef.current;
    const btn = strip?.querySelector<HTMLButtonElement>(`[data-i="${active}"]`);
    if (!strip || !btn || strip.scrollWidth <= strip.clientWidth) return;
    strip.scrollTo({ left: btn.offsetLeft - strip.clientWidth / 2 + btn.clientWidth / 2, behavior: reduce ? "auto" : "smooth" });
  }, [active, reduce]);

  const choose = (i: number) => {
    pausedUntil.current = Date.now() + PAUSE_MS;
    setActive(i);
  };

  return (
    <section ref={sectionRef} className="section" aria-labelledby="compare-title">
      <LazyMotion features={domAnimation}>
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-text">{comparison.eyebrow}</p>
            <h2 id="compare-title" className="h2">
              {comparison.title}
            </h2>
          </div>

          <div className="mt-7 grid gap-4 sm:mt-12 md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[260px_1fr]">
            <div
              ref={stripRef}
              role="tablist"
              aria-label="Compare by task"
              className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-col md:overflow-visible md:px-0"
              onTouchStart={() => (pausedUntil.current = Date.now() + PAUSE_MS)}
            >
              {factors.map((x, i) => {
                const on = i === active;
                return (
                  <button
                    key={x.id}
                    data-i={i}
                    role="tab"
                    id={`tab-${x.id}`}
                    aria-selected={on}
                    aria-controls="compare-panel"
                    onClick={() => choose(i)}
                    className={`flex min-h-[40px] shrink-0 items-center gap-2.5 rounded-full border px-3.5 py-2 text-left text-[13px] font-semibold transition md:rounded-2xl md:px-4 md:py-3.5 md:text-[15px] ${
                      on ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink-soft hover:border-ink/25 hover:text-ink"
                    }`}
                  >
                    <LucideByName name={x.icon} className="hidden h-[18px] w-[18px] shrink-0 md:block" />
                    {x.label}
                  </button>
                );
              })}
            </div>

            <div id="compare-panel" role="tabpanel" aria-labelledby={`tab-${f.id}`}>
              {/* Every task shares one grid cell, so the height never jumps between tabs */}
              <div className="grid">
                {factors.map((x, i) => {
                  const on = i === active;
                  return (
                    <div
                      key={x.id}
                      aria-hidden={!on}
                      className={`col-start-1 row-start-1 transition-opacity duration-300 ${on ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
                    >
                      <div className="md:hidden">
                        <MobileRows f={x} on={on} />
                      </div>
                      <div className="hidden grid-cols-2 gap-4 md:grid">
                        <Panel f={x} tone="alone" on={on} />
                        <Panel f={x} tone="ours" on={on} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-8">
                <a href={whatsappLink(f.cta.message)} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  {f.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="text-[11px] text-ink-faint sm:text-xs">{comparison.note}</p>
              </div>
            </div>
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
