import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Check, Store } from "lucide-react";
import { platforms, visible, type Platform } from "@/lib/proof";
import { Reveal } from "@/components/ui/Reveal";
import { SampleTag } from "@/components/ui/SampleTag";
import { Stars } from "@/components/ui/Stars";
import type { GoogleReviews } from "@/lib/google-reviews";

// Keep these true for whatever is live (Google reviews + Justdial listing as of 2026-09-28).
const trustPoints = ["Public listings", "Public reviews", "Reachable support", "PAN India service"];

function PlatformCard({ p }: { p: Platform }) {
  const Tag = p.url ? "a" : "div";
  const linkProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Tag
      {...linkProps}
      aria-label={p.url ? `${p.cta} (opens in a new tab)` : undefined}
      className="card group relative flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:p-7"
    >
      <div className="flex items-start justify-between gap-3">
        {p.logo && p.logoSize && p.logoSize.width > p.logoSize.height * 1.5 ? (
          <span className="flex h-12 shrink-0 items-center rounded-2xl border border-ink/10 bg-white px-3.5 sm:h-14 sm:px-4">
            <Image
              src={p.logo}
              alt={`${p.name.split(" ")[0]} logo`}
              width={p.logoSize.width}
              height={p.logoSize.height}
              className="h-[18px] w-auto sm:h-5"
            />
          </span>
        ) : (
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-white sm:h-14 sm:w-14">
            {p.logo ? (
              <Image src={p.logo} alt={`${p.name.split(" ")[0]} logo`} width={28} height={28} className="h-7 w-7" />
            ) : (
              <Store className="h-6 w-6 text-ink" strokeWidth={1.6} aria-hidden />
            )}
          </span>
        )}
        <span className="flex flex-wrap items-center justify-end gap-1.5">
          <SampleTag show={p.sample} />
          <span className="tag-green gap-1 font-semibold">
            <BadgeCheck className="h-3.5 w-3.5 text-brand-deep" strokeWidth={2} aria-hidden />
            {p.badge}
          </span>
        </span>
      </div>

      <h3 className="mt-4 font-display text-[18px] font-bold leading-snug text-ink sm:mt-5 sm:text-[20px]">{p.name}</h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">{p.description}</p>

      <dl className="mt-5 grid grid-cols-2 divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-cream-soft/60 sm:mt-6">
        {p.stats.map((st, i) => (
          <div key={st.label} className="flex min-w-0 flex-col justify-end px-3.5 py-3.5 min-[375px]:px-4 sm:px-5 sm:py-4">
            {i === 0 && p.rating !== undefined && (
              <span className="mb-2">
                <Stars rating={p.rating} />
              </span>
            )}
            <dt className="sr-only">{st.label}</dt>
            <dd>
              <p className="font-display text-[19px] font-extrabold leading-none tracking-tight text-ink min-[375px]:text-[22px] sm:text-[26px]">{st.value}</p>
              <p className="mt-1 text-[12.5px] font-medium text-ink-muted">{st.label}</p>
            </dd>
          </div>
        ))}
      </dl>

      <span className="flex-1" aria-hidden />
      <span className="btn-ghost mt-5 min-h-[48px] self-start transition group-hover:border-ink group-hover:bg-ink group-hover:text-white sm:mt-6">
        {p.cta}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
      </span>
    </Tag>
  );
}

/** "Verified beyond our website": public profiles that back up the testimonials. */
export function PlatformProfiles({
  continued = false,
  google,
  sub = "Don't just take our word for it. Explore our public business profiles, reviews and listings on trusted platforms before you get in touch.",
}: {
  continued?: boolean;
  google?: GoogleReviews | null;
  sub?: string;
}) {
  // When the Places API is connected, the Google card shows today's rating and review count.
  const items = visible(platforms).map((p) =>
    p.id === "google" && google
      ? {
          ...p,
          rating: google.rating,
          url: p.url || google.mapsUrl,
          stats: [
            { value: google.rating.toFixed(1), label: "Rating" },
            { value: google.total.toLocaleString("en-IN"), label: "Google reviews" },
          ] as Platform["stats"],
        }
      : p,
  );
  if (!items.length) return null;
  return (
    <section
      aria-labelledby="platforms-title"
      className={`section bg-cream-soft ${continued ? "!pt-2 sm:!pt-4 lg:!pt-6" : ""}`}
    >
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Trusted across platforms</p>
          <h2 id="platforms-title" className="h2">
            Verified beyond our website
          </h2>
          <p className="lead mt-3">{sub}</p>
        </Reveal>

        <div className={`mx-auto mt-7 grid max-w-5xl gap-3 sm:mt-12 md:gap-4 lg:gap-6 ${items.length > 1 ? "md:grid-cols-2" : ""}`}>
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} className="h-full">
              <PlatformCard p={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <p className="font-display text-[15px] font-bold text-ink sm:text-[17px]">Real business. Public listings. Verified presence.</p>
          <ul className="mx-auto mt-3 grid w-fit grid-cols-2 gap-x-5 gap-y-2 text-left text-[12.5px] font-medium text-ink-soft min-[375px]:text-[13px] sm:mt-4 sm:flex sm:justify-center sm:gap-x-6 sm:text-sm">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="h-4 w-4 text-brand-deep" strokeWidth={2.6} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
