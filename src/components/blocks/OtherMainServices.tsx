import { ArrowUpRight } from "lucide-react";
import { LucideByName } from "@/components/ui/LucideByName";
import { isBuilt, licences, pillars } from "@/lib/routes";

/** The main service pages: the six pillars, then the licences */
export const mainServices = [
  ...pillars.map((p) => ({ label: p.label, path: p.path, icon: p.icon, blurb: p.blurb })),
  ...licences.map((l) => ({ label: l.label, path: l.path, icon: l.icon, blurb: l.blurb })),
];

export const isMainService = (path: string) => mainServices.some((s) => s.path === path);

/**
 * Cards linking a main service page to every other main service. Only published pages are listed,
 * so a service appears here on its go-live date.
 */
export function OtherMainServices({ currentPath }: { currentPath: string }) {
  const items = mainServices.filter((s) => s.path !== currentPath && isBuilt(s.path));
  if (!items.length) return null;
  return (
    <ul className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {items.map((s) => (
        <li key={s.path}>
          <a
            href={s.path}
            className="card group flex h-full flex-col !rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-lift sm:p-5"
          >
            <span className="flex items-start justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint">
                <LucideByName name={s.icon} className="h-5 w-5 text-brand-deep" strokeWidth={1.75} aria-hidden />
              </span>
              <ArrowUpRight className="h-4 w-4 text-ink-faint transition group-hover:text-ink" aria-hidden />
            </span>
            <span className="mt-4 font-display text-[14.5px] font-bold leading-snug text-ink sm:text-[16px]">{s.label}</span>
            <span className="mt-1 text-[12.5px] leading-snug text-ink-muted sm:text-[13px]">{s.blurb}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
