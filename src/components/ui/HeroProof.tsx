import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { platforms, stats, visible } from "@/lib/proof";
import { Stars } from "@/components/ui/Stars";

/**
 * Hero trust row: the metrics as quiet ticks under the CTAs (replaces the old stats box).
 * Sample metrics show on the dev server only; in production the row keeps just the real ones
 * and tops up with `fallback` lines so it never looks empty.
 */
export function HeroTicks({ fallback, className = "", quiet = false }: { fallback: string[]; className?: string; quiet?: boolean }) {
  const real = visible(stats).map((s) => ({ text: s.tick, sample: s.sample }));
  const items = [...real, ...fallback.map((text) => ({ text, sample: false }))]
    .filter((v, i, a) => a.findIndex((x) => x.text.toLowerCase() === v.text.toLowerCase()) === i)
    .slice(0, 4);
  return (
    <ul
      className={`grid w-fit grid-cols-2 gap-x-4 gap-y-1.5 text-[11.5px] font-medium text-ink-muted min-[375px]:flex min-[375px]:flex-nowrap min-[375px]:gap-x-2.5 min-[390px]:gap-x-3 min-[390px]:text-[12px] sm:gap-x-6 ${quiet ? "sm:text-[13px]" : "sm:text-[14px]"} ${className}`}
    >
      {items.map((t) => (
        <li
          key={t.text}
          className={`flex shrink-0 items-center gap-1 whitespace-nowrap sm:gap-1.5 ${
            t.sample ? "underline decoration-ink/25 decoration-dashed underline-offset-4" : ""
          }`}
          title={t.sample ? "Sample figure: replace in src/lib/proof.ts (hidden in production)" : undefined}
        >
          <Check className={`h-3.5 w-3.5 ${quiet ? "text-brand/70" : "text-brand-deep sm:h-4 sm:w-4"}`} strokeWidth={2.6} aria-hidden />
          {t.text}
        </li>
      ))}
    </ul>
  );
}

/** Small Google and Justdial tags linking to the public profiles (real data only). */
export function HeroPlatformTags({ className = "", quiet = false }: { className?: string; quiet?: boolean }) {
  const items = visible(platforms);
  const google = items.find((p) => p.id === "google");
  const justdial = items.find((p) => p.id === "justdial");
  if (!google && !justdial) return null;
  // Compact on phones so both tags fit one line; full labels from sm up
  const chip = (quiet
    ? "inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/[0.07] bg-transparent px-3 py-1.5 text-[12px] max-[359px]:gap-1 max-[359px]:px-2.5 max-[359px]:text-[11.5px] font-medium text-ink-muted transition hover:border-ink/20 hover:text-ink sm:gap-2 sm:px-3.5 sm:text-[12.5px]"
    : "inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/10 bg-white/90 px-3 py-1.5 text-[12px] max-[359px]:gap-1 max-[359px]:px-2.5 max-[359px]:text-[11.5px] font-medium text-ink-soft transition hover:border-ink/25 hover:text-ink sm:gap-2 sm:px-3.5 sm:text-[13px]");
  return (
    <ul className={`flex flex-wrap gap-2 max-[359px]:gap-1.5 ${className}`} aria-label="Public business profiles">
      {google && (
        <li>
          <a
            href={google.url}
            target="_blank"
            rel="noopener noreferrer"
            className={chip}
            aria-label={`Google rating ${google.rating?.toFixed(1) ?? ""} from ${google.stats[1]?.value} reviews (opens Google)`}
          >
            <Image src="/logos/google.svg" alt="Google" width={16} height={16} className="h-4 w-4" />
            {google.rating ? (
              <>
                <span className="font-display font-bold text-ink">{google.rating.toFixed(1)}</span>
                <Stars rating={google.rating} size="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </>
            ) : null}
            <span>
              {google.stats[1]?.value}
              <span className="hidden sm:inline"> reviews</span>
            </span>
            <ArrowUpRight className="hidden h-3.5 w-3.5 text-ink-faint sm:block" aria-hidden />
          </a>
        </li>
      )}
      {justdial && (
        <li>
          <a href={justdial.url} target="_blank" rel="noopener noreferrer" className={chip} aria-label="Listed business on Justdial (opens Justdial)">
            {justdial.logo && justdial.logoSize ? (
              <Image
                src={justdial.logo}
                alt="Justdial"
                width={justdial.logoSize.width}
                height={justdial.logoSize.height}
                className="h-3 w-auto sm:h-3.5"
              />
            ) : (
              <span className="font-semibold text-ink">Justdial</span>
            )}
            <span>
              Listed<span className="hidden sm:inline"> business</span>
            </span>
            <ArrowUpRight className="hidden h-3.5 w-3.5 text-ink-faint sm:block" aria-hidden />
          </a>
        </li>
      )}
    </ul>
  );
}
