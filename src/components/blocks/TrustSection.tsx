import Image from "next/image";
import { Award, BadgeCheck, Users, type LucideIcon } from "lucide-react";
import { clientLogos, platforms, stats, visible, SHOW_SAMPLES, type ClientLogo } from "@/lib/proof";
import { getGoogleReviews } from "@/lib/google-reviews";

type Card = { key: string; icon?: LucideIcon; logo?: { src: string; w: number; h: number }; href?: string; value: string; title: string };

/** Dev-only slots shown while `clientLogos` is empty */
const placeholders: { name: string }[] = Array.from({ length: 8 }, (_, i) => ({ name: `placeholder-${i}` }));
/** Grid per card count: phones fit 3 across at most, so 4-5 cards wrap to 2 rows there. */
const grid: Record<number, string> = {
  1: "max-w-[260px]",
  2: "max-w-xl grid-cols-2",
  3: "max-w-4xl grid-cols-3",
  4: "max-w-5xl grid-cols-2 lg:grid-cols-4",
  5: "max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-sm:[&>li:last-child]:col-span-2",
};
const logoItems: (ClientLogo | { name: string })[] = clientLogos.length ? clientLogos : placeholders;

/**
 * Trust bar under every service hero (the SEO/CRO system's order): Google rating, Justdial listing, years of experience,
 * businesses assisted, registrations completed. Counts come from lib/proof.ts and stay hidden in production while marked sample,
 * then the client logo row (dashed placeholders on dev while `clientLogos` is empty, hidden in production).
 */
export async function TrustSection({
  title = "Trusted by businesses across Chennai",
  completedStat,
}: {
  title?: string;
  /** Replaces the third card ("Registrations completed"), e.g. GST filings on the GST pillar. Samples hidden in production. */
  completedStat?: { value: string; label: string; sample?: boolean };
}) {
  const listed = visible(platforms);
  const g = listed.find((p) => p.id === "google");
  const jd = listed.find((p) => p.id === "justdial");
  const google = await getGoogleReviews();
  const rating = google?.rating ?? g?.rating;
  const reviews = google?.total ? `${Math.floor(google.total / 10) * 10}+` : g?.stats[1].value;
  const founded = jd?.stats.find((s) => s.label === "Year established")?.value;
  const count = (label: string) => visible(stats).find((s) => s.label === label);
  const assisted = count("Businesses assisted");
  const completed = completedStat ? visible([completedStat])[0] : count("Registrations completed");

  const cards: Card[] = [
    ...(g && rating
      ? [{ key: "google", logo: { src: "/logos/google.svg", w: 22, h: 22 }, href: g.url, value: `${rating.toFixed(1)} / 5`, title: `Google rating${reviews ? `, ${reviews} reviews` : ""}` }]
      : []),
    ...(jd ? [{ key: "justdial", logo: { src: jd.logo!, w: 540, h: 139 }, href: jd.url, value: "Listed", title: "Justdial listing" }] : []),
    ...(founded
      ? [{ key: "since", icon: Award, value: `${new Date().getFullYear() - Number(founded)}+ years`, title: `Experience, since ${founded}` }]
      : []),
    ...(assisted
      ? [{ key: "assisted", icon: Users, value: assisted.value, title: "Businesses assisted" }]
      : []),
    ...(completed
      ? [{ key: "completed", icon: BadgeCheck, value: completed.value, title: completed.label }]
      : []),
  ];
  const showLogos = clientLogos.length > 0 || SHOW_SAMPLES;
  if (!cards.length && !showLogos) return null;

  return (
    <section className="border-y border-ink/[0.06] bg-cream-soft py-9 sm:py-12" aria-labelledby="trust-title">
      <div className="shell">
        <h2 id="trust-title" className="text-center font-display text-[20px] font-bold tracking-[-0.02em] text-ink sm:text-[26px]">
          {title}
        </h2>

        {cards.length > 0 && (
          <ul className={`mx-auto mt-6 grid gap-2 sm:mt-8 sm:gap-4 ${grid[cards.length] ?? grid[5]}`}>
            {cards.map((c) => {
              const inner = (
                <>
                  {c.logo ? (
                    // brand logos stay visible on phones so the rating and listing are recognisable at a glance
                    <span className="grid h-7 shrink-0 place-items-center sm:h-10 sm:min-w-10 sm:rounded-xl sm:bg-cream-soft sm:px-2">
                      <Image src={c.logo.src} alt="" width={c.logo.w} height={c.logo.h} className={c.logo.w > c.logo.h ? "h-3.5 w-auto sm:h-4" : "h-5 w-5"} />
                    </span>
                  ) : (
                    c.icon && (
                      <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-deep sm:grid">
                        <c.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </span>
                    )
                  )}
                  <span className="min-w-0">
                    <span className="block whitespace-nowrap font-display text-[16px] font-extrabold leading-none tracking-[-0.02em] text-ink min-[400px]:text-[18px] sm:text-[24px]">{c.value}</span>
                    <span className="mt-1 block text-[11.5px] leading-snug text-ink-muted sm:text-[13.5px]">{c.title}</span>
                  </span>
                </>
              );
              const box = "flex h-full flex-col items-center gap-2 rounded-2xl bg-white px-2 py-3.5 text-center ring-1 ring-ink/[0.05] transition duration-300 hover:-translate-y-0.5 hover:ring-brand/20 sm:flex-row sm:gap-3.5 sm:px-5 sm:py-4 sm:text-left";
              return (
                <li key={c.key}>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className={box}>
                      {inner}
                    </a>
                  ) : (
                    <div className={box}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {showLogos && (
          <div className="marquee mt-7 sm:mt-10" aria-label="Our clients">
            <ul className="marquee-track gap-3 sm:gap-5">
              {/* rendered twice for a seamless loop; the copy is hidden from screen readers */}
              {[0, 1].flatMap((copy) =>
                logoItems.map((l, i) => (
                  <li key={`${copy}-${i}`} aria-hidden={copy === 1 || undefined} className="shrink-0">
                    {"src" in l ? (
                      <span className="grid h-14 w-36 place-items-center rounded-xl bg-white px-4 ring-1 ring-ink/[0.05] sm:h-16 sm:w-44">
                        <Image
                          src={l.src}
                          alt={copy === 1 ? "" : l.name}
                          width={l.width}
                          height={l.height}
                          className="max-h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:max-h-9"
                        />
                      </span>
                    ) : (
                      <span className="grid h-14 w-36 place-items-center rounded-xl border border-dashed border-ink/15 text-[11px] font-semibold uppercase tracking-wider text-ink-faint sm:h-16 sm:w-44">
                        Client logo
                      </span>
                    )}
                  </li>
                )),
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
