import { Check } from "lucide-react";
import { HeroPlatformTags, HeroTicks } from "@/components/ui/HeroProof";

/**
 * Quiet trust row for heroes: short ticks + Google/Justdial tags.
 * `useStats` pulls the real figures from lib/proof.ts (samples hidden in production) and tops up with `ticks`.
 */
export function TrustBar({
  ticks,
  useStats = false,
  align = "center",
  quiet = false,
}: {
  ticks: string[];
  useStats?: boolean;
  align?: "center" | "left";
  /** Lighter ticks and tags so the headline and CTA stay dominant */
  quiet?: boolean;
}) {
  const justify = align === "center" ? "justify-center" : "justify-start";
  return (
    <>
      {useStats ? (
        <HeroTicks fallback={ticks} quiet={quiet} className={`mt-6 max-w-4xl sm:mt-8 ${justify}`} />
      ) : (
        <ul
          className={`mt-6 flex max-w-4xl flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] font-medium text-ink-muted sm:mt-8 sm:gap-x-6 ${quiet ? "sm:text-[13px]" : "sm:text-[14px]"} ${justify}`}
        >
          {ticks.map((t) => (
            <li key={t} className="flex items-center gap-1 whitespace-nowrap sm:gap-1.5">
              <Check className={`h-3.5 w-3.5 ${quiet ? "text-brand/70" : "text-brand-deep sm:h-4 sm:w-4"}`} strokeWidth={2.6} aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      )}
      <HeroPlatformTags quiet={quiet} className={`mt-4 ${justify}`} />
    </>
  );
}
