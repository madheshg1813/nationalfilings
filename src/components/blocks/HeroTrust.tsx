import Image from "next/image";
import { platforms, visible } from "@/lib/proof";
import type { GoogleReviews } from "@/lib/google-reviews";
import { Stars } from "@/components/ui/Stars";

/**
 * Small credibility row under the hero badges: Google rating (live from Featurable when available) | Justdial listing.
 * Deliberately light so it supports the CTAs instead of competing with them.
 */
export function HeroTrust({ google }: { google: GoogleReviews | null }) {
  const listed = visible(platforms);
  const g = listed.find((p) => p.id === "google");
  const jd = listed.find((p) => p.id === "justdial");
  const rating = google?.rating ?? g?.rating;
  const reviews = google?.total ? `${Math.floor(google.total / 10) * 10}+` : g?.stats[1].value;
  if (!(g && rating) && !jd) return null;

  const link = "flex items-center gap-2.5 rounded-xl px-1.5 py-1 transition hover:bg-ink/[0.03]";

  return (
    <div className="mx-auto mt-6 flex w-fit items-center gap-3 border-t border-ink/[0.07] pt-5 text-left sm:mt-7 sm:gap-5 lg:mx-0">
      {g && rating && (
        <a href={g.url} target="_blank" rel="noopener noreferrer" className={link}>
          <Image src="/logos/google.svg" alt="" width={22} height={22} className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          <span>
            <span className="flex items-center gap-1.5 text-[13.5px] font-bold leading-none text-ink sm:text-[14.5px]">
              {rating.toFixed(1)}
              <Stars rating={rating} size="h-3 w-3" />
            </span>
            <span className="mt-1 block text-[11.5px] leading-none text-ink-muted sm:text-[12.5px]">{reviews} Google reviews</span>
          </span>
        </a>
      )}
      {g && rating && jd && <span className="h-8 w-px bg-ink/10" aria-hidden />}
      {jd && (
        <a href={jd.url} target="_blank" rel="noopener noreferrer" className={link}>
          <Image src={jd.logo!} alt="Justdial" width={540} height={139} className="h-3.5 w-auto sm:h-4" />
          <span>
            <span className="block text-[13.5px] font-bold leading-none text-ink sm:text-[14.5px]">Listed</span>
            <span className="mt-1 block text-[11.5px] leading-none text-ink-muted sm:text-[12.5px]">Chennai business profile</span>
          </span>
        </a>
      )}
    </div>
  );
}
