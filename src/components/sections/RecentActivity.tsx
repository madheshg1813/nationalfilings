"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { activity, visible } from "@/lib/proof";
import { whatsappLink } from "@/lib/site";
import { LucideByName } from "@/components/ui/LucideByName";
import { SampleTag } from "@/components/ui/SampleTag";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const SHOWN = 5;
const ROTATE_MS = 3200;

/**
 * "Recent approvals" feed. Rotates through real entries (newest on top) while on screen.
 * Dates are month-level on purpose: no invented "2 minutes ago" timestamps.
 */
export function RecentActivity() {
  const items = visible(activity);
  const [offset, setOffset] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || items.length <= SHOWN) return;
    let on = false;
    const io = new IntersectionObserver(([e]) => (on = e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    const id = window.setInterval(() => on && setOffset((o) => (o + 1) % items.length), ROTATE_MS);
    return () => {
      window.clearInterval(id);
      io.disconnect();
    };
  }, [reduce, items.length]);

  if (!items.length) return null;
  const shown = Array.from({ length: Math.min(SHOWN, items.length) }, (_, i) => {
    const idx = (items.length - offset + i) % items.length;
    return { ...items[idx], key: idx };
  });

  return (
    <section ref={ref} className="section border-t border-ink/10" aria-labelledby="activity-title">
      <div className="shell grid items-center gap-7 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="eyebrow-text">Recent work</p>
          <h2 id="activity-title" className="h2">
            Recent approvals and filings
          </h2>
          <p className="lead mx-auto mt-3 max-w-md lg:mx-0">
            A few recent outcomes for clients like you. Client names stay private.
          </p>
          <a
            href={whatsappLink("Hi National Filings, I'd like to get started.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 sm:mt-7"
          >
            <WhatsAppIcon /> Start yours
          </a>
        </div>

        <LazyMotion features={domAnimation}>
          <div className="card overflow-hidden !rounded-2xl sm:!rounded-3xl">
            <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3 sm:px-5">
              <span className="flex items-center gap-2 text-[12px] font-semibold text-ink sm:text-[13px]">
                <span className="relative flex h-2 w-2">
                  {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Recent activity
              </span>
              <SampleTag show={items.some((i) => i.sample)} />
            </div>
            <ul className="divide-y divide-ink/5">
              <AnimatePresence initial={false}>
                {shown.map((a, i) => (
                  <m.li
                    key={a.key}
                    layout={!reduce}
                    initial={reduce ? false : { opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className={`flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 ${i === SHOWN - 1 ? "max-sm:hidden" : ""}`}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white">
                      <LucideByName name={a.icon} className="h-4 w-4 text-ink" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-semibold leading-snug text-ink sm:text-[15px]">{a.title}</span>
                      <span className="block truncate text-[12px] text-ink-muted sm:text-[13px]">
                        {a.client} · {a.date}
                      </span>
                    </span>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint">
                      <Check className="h-3.5 w-3.5 text-brand-deep" strokeWidth={3} />
                    </span>
                  </m.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
