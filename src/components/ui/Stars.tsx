import { Star } from "lucide-react";

/** Golden rating stars (Google's star yellow), with partial fill for ratings like 4.9. */
export function Stars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span className="relative inline-flex shrink-0" role="img" aria-label={`${rating} out of 5 stars`}>
      <span className="flex gap-0.5 text-ink/15">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={`${size} fill-current`} strokeWidth={0} />
        ))}
      </span>
      <span className="absolute inset-0 flex gap-0.5 overflow-hidden text-[#FBBC04]" style={{ width: `${pct}%` }}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={`${size} shrink-0 fill-current`} strokeWidth={0} />
        ))}
      </span>
    </span>
  );
}
