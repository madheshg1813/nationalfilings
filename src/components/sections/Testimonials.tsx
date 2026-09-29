import { ArrowUpRight, Quote } from "lucide-react";
import { platforms, testimonials, visible } from "@/lib/proof";
import type { GoogleReviews } from "@/lib/google-reviews";
import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SampleTag } from "@/components/ui/SampleTag";
import { Stars } from "@/components/ui/Stars";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/** Shown in a horizontal carousel; manage which ones show by pinning/hiding in Featurable. */
const MAX_GOOGLE_REVIEWS = 12;

type Card = {
  text: string;
  name: string;
  meta: string;
  rating?: number;
  photo?: string;
  nameUrl?: string;
  reviewUrl?: string;
  tag?: string;
  google?: boolean;
  sample?: boolean;
};

function ReviewCard({ c }: { c: Card }) {
  return (
    <figure className="card relative flex h-full w-full flex-col p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        {c.rating ? <Stars rating={c.rating} /> : <Quote className="h-6 w-6 text-brand" strokeWidth={1.6} aria-hidden />}
        <span className="flex items-center gap-2">
          <SampleTag show={c.sample} />
          {c.google && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/logos/google.svg" alt="Google review" width={18} height={18} className="h-[18px] w-[18px]" />
          )}
        </span>
      </div>
      <blockquote className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-soft sm:text-[15px]">
        <p className="line-clamp-6">“{c.text}”</p>
      </blockquote>
      {c.reviewUrl && (
        <a
          href={c.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 self-start text-[12.5px] font-semibold text-brand-deep hover:underline"
        >
          Read on Google <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {c.tag && <span className="tag-green mt-4 self-start">{c.tag}</span>}
      <figcaption className="mt-4 flex items-center gap-3 border-t border-ink/5 pt-4">
        {c.photo ? (
          // Google profile photos are served by Google; shown as-is for attribution
          // eslint-disable-next-line @next/next/no-img-element
          <img src={c.photo} alt="" width={40} height={40} referrerPolicy="no-referrer" className="h-10 w-10 shrink-0 rounded-full object-cover" />
        ) : (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime-tint font-display text-[13px] font-bold text-ink ring-1 ring-lime">
            {initials(c.name)}
          </span>
        )}
        <span className="min-w-0">
          {c.nameUrl ? (
            <a href={c.nameUrl} target="_blank" rel="noopener noreferrer" className="block truncate font-display text-[14px] font-bold text-ink hover:underline">
              {c.name}
            </a>
          ) : (
            <span className="block truncate font-display text-[14px] font-bold text-ink">{c.name}</span>
          )}
          <span className="block text-[12.5px] leading-snug text-ink-muted">{c.meta}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Real Google reviews when the Places API is connected (see lib/google-reviews.ts);
 * otherwise the hand-entered testimonials in lib/proof.ts (samples show in dev only).
 */
export function Testimonials({ google }: { google?: GoogleReviews | null }) {
  const fromGoogle = google?.reviews.length ? google : null;
  // Featurable v2 doesn't return a profile link, so fall back to our Google profile link
  const profileUrl = fromGoogle?.mapsUrl || platforms.find((p) => p.id === "google")?.url || "";
  const cards: Card[] = fromGoogle
    ? fromGoogle.reviews.slice(0, MAX_GOOGLE_REVIEWS).map((r) => ({
        text: r.text,
        name: r.author,
        meta: r.when ? `Google review · ${r.when}` : "Google review",
        rating: r.rating,
        photo: r.photo,
        nameUrl: r.authorUrl,
        reviewUrl: r.url || profileUrl || undefined,
        google: true,
      }))
    : visible(testimonials).map((t) => ({
        text: t.quote,
        name: t.name,
        meta:
          t.source === "google"
            ? ["Google review", t.when].filter(Boolean).join(" · ")
            : [t.role, t.org].filter(Boolean).join(" · "),
        rating: t.rating,
        tag: t.service || undefined,
        reviewUrl: t.url,
        google: t.source === "google",
        sample: t.sample,
      }));
  if (!cards.length) return null;

  return (
    <section className="section bg-cream-soft" aria-labelledby="stories-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">{fromGoogle ? "Google reviews" : "Client stories"}</p>
          <h2 id="stories-title" className="h2">
            In their words
          </h2>
          {fromGoogle && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[14px] text-ink-soft sm:text-[15px]">
              <span className="flex items-center gap-2">
                <span className="font-display text-[18px] font-extrabold text-ink">{fromGoogle.rating.toFixed(1)}</span>
                <Stars rating={fromGoogle.rating} />
              </span>
              <span>
                from {fromGoogle.total.toLocaleString("en-IN")} reviews on Google
              </span>
              {profileUrl && (
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-deep hover:underline"
                >
                  Read all <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </Reveal>

        <div className="mt-7 sm:mt-12">
          <ReviewCarousel label="Google reviews">
            {cards.map((c, i) => (
              <li key={i} className="flex">
                <ReviewCard c={c} />
              </li>
            ))}
          </ReviewCarousel>
        </div>
      </div>
    </section>
  );
}
