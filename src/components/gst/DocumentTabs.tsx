"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";

type Tab = { id: string; label: string; items: readonly string[] };

/** Compact, accessible tabs (arrow keys move between tabs). All panels are in the HTML for search engines. */
export function DocumentTabs({ tabs }: { tabs: readonly Tab[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Business type"
        className="-mx-5 flex gap-1.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:justify-center sm:px-0"
      >
        <div className="flex gap-1.5 rounded-full bg-cream-soft p-1.5 ring-1 ring-ink/[0.05]">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`doc-tab-${t.id}`}
              aria-selected={active === i}
              aria-controls={`doc-panel-${t.id}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") move(i + 1);
                if (e.key === "ArrowLeft") move(i - 1);
              }}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-semibold transition sm:px-5 sm:text-[14.5px] ${
                active === i ? "bg-white text-ink shadow-[0_4px_14px_-6px_rgba(15,60,58,0.35)]" : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`doc-panel-${t.id}`}
          aria-labelledby={`doc-tab-${t.id}`}
          hidden={active !== i}
          className="mx-auto mt-6 max-w-3xl sm:mt-8"
        >
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {t.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-ink sm:text-[15.5px]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-tint">
                  <Check className="h-3 w-3 text-brand-deep" strokeWidth={3} aria-hidden />
                </span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
