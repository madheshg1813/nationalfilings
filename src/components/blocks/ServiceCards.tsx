import { ArrowRight } from "lucide-react";
import { LucideByName, type IconName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";
import { linkTarget } from "@/lib/routes";
import { SectionHeader } from "./SectionHeader";

export type ServiceCard = {
  title: string;
  href: string;
  icon: IconName;
  /** One line; hidden on phones where the title says enough */
  blurb?: string;
  /** Small green tag, e.g. "6 services" */
  badge?: string;
  /** Link text on tablet/desktop (phones show `ctaShort`) */
  cta?: string;
  ctaShort?: string;
};

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  items: ServiceCard[];
  columns?: 3 | 4;
  size?: "lg" | "md";
  className?: string;
};

const COLS = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

/** Whole-card links: icon, name, optional badge + blurb, CTA line. 2 per row on phones. */
export function ServiceCards({ id, eyebrow, title, lead, items, columns = 3, size = "lg", className = "" }: Props) {
  const lg = size === "lg";
  return (
    <section id={id} className={`section scroll-mt-16 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="shell">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} lead={lead} />
        <ul className={`mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 ${COLS[columns]}`}>
          {items.map((c, i) => (
            <Reveal as="li" key={c.href} delay={(i % columns) * 0.05} className="h-full">
              <a
                href={c.href}
                {...linkTarget(c.href)}
                aria-label={c.badge ? `${c.title}: ${c.badge}` : undefined}
                className={`card group relative flex h-full flex-col p-4 transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${lg ? "sm:p-6" : "sm:p-5"}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`grid place-items-center rounded-xl border border-ink/10 bg-white ${lg ? "h-10 w-10 sm:h-12 sm:w-12" : "h-10 w-10"}`}>
                    <LucideByName name={c.icon} className={`text-ink ${lg ? "h-5 w-5 sm:h-[22px] sm:w-[22px]" : "h-5 w-5"}`} />
                  </span>
                  {c.badge && (
                    <span className="tag-green whitespace-nowrap !px-2 !py-0.5 !text-[10.5px] font-semibold sm:!px-2.5 sm:!py-1 sm:!text-xs">{c.badge}</span>
                  )}
                </div>
                <h3
                  className={`mt-3.5 font-display font-bold leading-snug text-ink [text-wrap:balance] ${lg ? "text-[14.5px] sm:mt-5 sm:text-[18px]" : "text-[14.5px] sm:mt-4 sm:text-[16px]"}`}
                >
                  {c.title}
                </h3>
                {c.blurb && <p className={`mt-1.5 hidden leading-relaxed text-ink-muted sm:block ${lg ? "text-[14.5px]" : "text-[13.5px] !leading-snug"}`}>{c.blurb}</p>}
                <span className={`mt-auto flex items-center gap-1 pt-3 font-semibold text-brand-deep ${lg ? "text-[12.5px] sm:pt-5 sm:text-[14px]" : "text-[12.5px] sm:pt-4 sm:text-[13.5px]"}`}>
                  <span className="sm:hidden">{c.ctaShort ?? "Explore"}</span>
                  <span className="hidden sm:inline">{c.cta ?? "View details"}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
