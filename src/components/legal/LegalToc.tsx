"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { id: string; title: string };

/** Sticky "On this page" list on desktop (highlights the section being read); a collapsible card on phones. */
export function LegalToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-120px 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const list = (onPick?: (e: React.MouseEvent<HTMLAnchorElement>) => void) => (
    <ol className="space-y-0.5">
      {items.map((it, i) => {
        const on = it.id === active;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={onPick}
              aria-current={on ? "location" : undefined}
              className={`flex gap-2.5 rounded-lg border-l-2 py-1.5 pl-3 pr-2 text-[13.5px] leading-snug transition-colors ${
                on ? "border-brand-deep bg-brand-tint/70 font-semibold text-ink" : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              <span className={`tabular-nums ${on ? "text-brand-deep" : "text-ink-faint"}`}>{String(i + 1).padStart(2, "0")}</span>
              {it.title}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <details className="card group p-4 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
          On this page
          <ChevronDown className="h-4 w-4 text-ink-muted transition-transform group-open:rotate-180" aria-hidden />
        </summary>
        <nav aria-label="On this page" className="mt-3">
          {/* close the card after a pick so it doesn't push the section down */}
          {list((e) => e.currentTarget.closest("details")?.removeAttribute("open"))}
        </nav>
      </details>

      <aside className="hidden lg:block">
        <nav aria-label="On this page" className="sticky top-28">
          <p className="eyebrow-text">On this page</p>
          {list()}
        </nav>
      </aside>
    </>
  );
}
