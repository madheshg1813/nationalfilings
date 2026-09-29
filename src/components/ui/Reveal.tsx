"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

/** Subtle fade-up on scroll. Renders static content for reduced-motion users. */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const M = as === "li" ? m.li : m.div;
  return (
    <LazyMotion features={domAnimation} strict>
      <M
        className={className}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay }}
      >
        {children}
      </M>
    </LazyMotion>
  );
}
