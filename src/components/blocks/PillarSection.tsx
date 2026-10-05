import type { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

/** Standard pillar-page section: centred header, content, optional inline CTA at the bottom. */
export function PillarSection({
  id,
  eyebrow,
  title,
  lead,
  tone = "white",
  children,
  cta,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "white" | "cream";
  children: ReactNode;
  /** Usually an <InlineCta />, shown under the content */
  cta?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section scroll-mt-16 ${tone === "cream" ? "bg-cream-soft" : "border-t border-ink/[0.06] bg-white"}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="shell">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-7 sm:mt-12">{children}</div>
        {cta && <div className="mt-8 sm:mt-12">{cta}</div>}
      </div>
    </section>
  );
}
