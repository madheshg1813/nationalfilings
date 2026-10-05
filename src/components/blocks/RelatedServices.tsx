import { ArrowUpRight } from "lucide-react";
import { licences, linkTarget, pillars, serviceHref } from "@/lib/routes";
import { SectionHeader } from "./SectionHeader";

type Item = { title: string; href: string; group: string };

/** Every service page in the registry, labelled with its category. */
function allServices(): Item[] {
  return [
    ...pillars.flatMap((p) => [
      { title: p.label, href: serviceHref(p, p.label), group: p.label },
      ...p.clusters.map((c) => ({ title: c.title, href: serviceHref(c), group: p.label })),
    ]),
    ...licences.map((l) => ({ title: l.label, href: serviceHref(l, l.label), group: "Licences" })),
  ];
}

// Seeded shuffle: random-looking but fixed per page, so the links never change between visits or builds
function seeded(seedText: string) {
  let h = 2166136261;
  for (const ch of seedText) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/**
 * 8 related service links (two rows of four), randomised but fixed per page (seeded by its path).
 * Excludes the current page; `prefer` puts same-category pages first (e.g. siblings of a cluster page).
 */
export function RelatedServices({
  currentPath,
  prefer,
  count = 8,
  title = "Related services",
  className = "",
}: {
  currentPath: string;
  prefer?: string;
  count?: number;
  title?: string;
  className?: string;
}) {
  const rand = seeded(currentPath);
  const pool = allServices().filter((s) => s.href !== currentPath);
  const shuffled = pool
    .map((s) => ({ s, k: rand() - (prefer && s.group === prefer ? 1 : 0) }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.s)
    .slice(0, count);

  return (
    <section className={`section ${className}`} aria-labelledby="related-title">
      <div className="shell">
        <SectionHeader id="related-title" eyebrow="Explore more" title={title} />
        <ul className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {shuffled.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                {...linkTarget(s.href)}
                className="card group flex h-full items-start justify-between gap-2 !rounded-2xl p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-lift sm:p-4"
              >
                <span className="min-w-0">
                  <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-ink-faint sm:text-[11px]">{s.group}</span>
                  <span className="mt-1 block font-display text-[13.5px] font-bold leading-snug text-ink [text-wrap:balance] sm:text-[15px]">{s.title}</span>
                </span>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint transition group-hover:text-ink" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
