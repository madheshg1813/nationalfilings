"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_MS = 3500;
const PAUSE_MS = 6000;

/**
 * Horizontal review carousel at every width: snap scrolling, next card peeking,
 * arrow buttons on tablet/desktop, swipe on phones.
 * Auto-advances while on screen; pauses on hover, touch or arrow click; static for reduced-motion users.
 */
export function ReviewCarousel({ children, label = "Reviews" }: { children: React.ReactNode; label?: string }) {
  const track = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const pausedUntil = useRef(0);
  const hovering = useRef(false);
  const [edges, setEdges] = useState({ start: true, end: false });
  const count = Children.count(children);

  const step = useCallback(() => {
    const el = track.current;
    if (!el) return 0;
    const items = el.children;
    return items.length > 1
      ? (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
      : el.clientWidth;
  }, []);

  const go = useCallback(
    (dir: 1 | -1, fromUser = false) => {
      const el = track.current;
      if (!el) return;
      if (fromUser) pausedUntil.current = Date.now() + PAUSE_MS;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      const atStart = el.scrollLeft <= 8;
      const left = dir === 1 && atEnd ? 0 : dir === -1 && atStart ? el.scrollWidth : el.scrollLeft + dir * step();
      el.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
    },
    [reduce, step],
  );

  // Track edges for the arrow states
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdges({ start: el.scrollLeft <= 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Auto-advance while visible
  useEffect(() => {
    const el = track.current;
    if (!el || reduce || count < 2) return;
    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    const pause = () => (pausedUntil.current = Date.now() + PAUSE_MS);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("pointerdown", pause);
    el.addEventListener("wheel", pause, { passive: true });
    const id = window.setInterval(() => {
      if (!visible || hovering.current || Date.now() < pausedUntil.current) return;
      go(1);
    }, AUTO_MS);
    return () => {
      window.clearInterval(id);
      io.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("wheel", pause);
    };
  }, [reduce, count, go]);

  const arrow =
    "grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-sm transition hover:border-ink/30 disabled:opacity-40";

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <ul
        ref={track}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-2 sm:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_32px,#000_calc(100%-32px),transparent)] sm:[mask-image:linear-gradient(to_right,transparent,#000_32px,#000_calc(100%-32px),transparent)] sm:-mx-8 sm:gap-5 sm:scroll-px-8 sm:px-8 [&>li]:w-[86%] [&>li]:shrink-0 [&>li]:snap-start sm:[&>li]:w-[calc((100%-20px)/1.6)] md:[&>li]:w-[calc((100%-40px)/2.3)] lg:[&>li]:w-[calc((100%-60px)/3.25)]"
      >
        {children}
      </ul>

      <div className="mt-5 flex items-center justify-center gap-3 sm:mt-7">
        <button type="button" onClick={() => go(-1, true)} aria-label="Previous reviews" className={`${arrow} hidden sm:grid`} disabled={edges.start && count < 2}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="text-[11px] font-medium text-ink-faint sm:hidden">Swipe →</p>
        <button type="button" onClick={() => go(1, true)} aria-label="Next reviews" className={`${arrow} hidden sm:grid`} disabled={count < 2}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
