import { LucideByName, type IconName } from "@/components/ui/LucideByName";
import { linkTarget } from "@/lib/routes";
import { SectionHeader } from "./SectionHeader";

export type LinkGroup = { title: string; href?: string; icon?: IconName; links: { label: string; href: string }[] };

/** Link hub: groups of links (pillar heading + its child pages). Improves crawl paths and navigation. */
export function InternalLinks({
  id = "all-services",
  eyebrow,
  title,
  groups,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  groups: LinkGroup[];
  className?: string;
}) {
  return (
    <section className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="shell">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} />
        <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 sm:mt-12 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3">
          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              {g.href ? (
                <a href={g.href} {...linkTarget(g.href)} className="group inline-flex items-center gap-2 font-display text-[14px] font-bold text-ink sm:text-[16px]">
                  {g.icon && <LucideByName name={g.icon} className="hidden h-[18px] w-[18px] text-ink-muted sm:block" />}
                  <span className="group-hover:underline group-hover:underline-offset-4">{g.title}</span>
                </a>
              ) : (
                <p className="inline-flex items-center gap-2 font-display text-[14px] font-bold text-ink sm:text-[16px]">
                  {g.icon && <LucideByName name={g.icon} className="hidden h-[18px] w-[18px] text-ink-muted sm:block" />}
                  {g.title}
                </p>
              )}
              <ul className="mt-2.5 space-y-2 border-l border-ink/10 pl-3 sm:mt-3 sm:pl-4">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} {...linkTarget(l.href)} className="text-[13px] leading-snug text-ink-muted transition hover:text-ink sm:text-[14.5px]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </section>
  );
}
