"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const AUTO_MS = 2500;
const PAUSE_MS = 6000;

/**
 * A <ul> that auto-advances one item every 2.5 s (or `interval`) whenever it is horizontally scrollable (the phone swipe rows).
 * Loops back to the start, runs only while on screen, pauses after a touch, swipe or hover,
 * and stays still for reduced-motion users. On wider screens where the list is a grid, it does nothing.
 */
export function AutoScrollRow({
  className,
  children,
  label,
  interval = AUTO_MS,
}: {
  className: string;
  children: React.ReactNode;
  label?: string;
  /** ms between advances; use ~4000 for text-heavy cards */
  interval?: number;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    let visible = false;
    let pausedUntil = 0;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    const pause = () => (pausedUntil = Date.now() + PAUSE_MS);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("pointerdown", pause);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("mouseenter", pause);

    const id = window.setInterval(() => {
      if (!visible || Date.now() < pausedUntil) return;
      if (el.scrollWidth <= el.clientWidth + 4) return; // grid layout: nothing to scroll
      const items = el.children;
      const step = items.length > 1 ? (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft : el.clientWidth;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, interval);

    return () => {
      window.clearInterval(id);
      io.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("mouseenter", pause);
    };
  }, [reduce, interval]);

  return (
    <ul ref={ref} className={className} aria-label={label}>
      {children}
    </ul>
  );
}
