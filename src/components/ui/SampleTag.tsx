/** Marks placeholder content on the dev server. Sample items never ship to production (see lib/proof.ts). */
export function SampleTag({ show, className = "" }: { show?: boolean; className?: string }) {
  if (!show) return null;
  return (
    <span
      className={`inline-flex items-center rounded-full border border-dashed border-ink/30 bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-muted ${className}`}
      title="Placeholder. Replace with real data in src/lib/proof.ts"
    >
      Sample
    </span>
  );
}
