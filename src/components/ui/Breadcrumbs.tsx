import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail + matching BreadcrumbList schema, from one list.
 * `trail` excludes Home; the last item is the current page (not linked).
 * e.g. [{ name: "Chennai", path: "/chennai" }, { name: "Company Registration", path: "/chennai/company-registration" }]
 * Page graphs can reference it as { "@id": breadcrumbId(lastPath) }.
 */
export const breadcrumbId = (path: string) => `${site.url}${path}#breadcrumb`;

export function Breadcrumbs({ trail, align = "left", className = "" }: { trail: Crumb[]; align?: "left" | "center" | "center-lg-left"; className?: string }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...trail];
  const current = all[all.length - 1];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": breadcrumbId(current.path),
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${site.url}${c.path === "/" ? "/" : c.path}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className={`text-[12.5px] text-ink-muted ${className}`}>
        <ol className={`flex flex-wrap items-center gap-x-1 gap-y-0.5 ${align === "center" ? "justify-center" : align === "center-lg-left" ? "justify-center lg:justify-start" : ""}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="font-medium text-ink-soft">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <a href={c.path} className="rounded hover:text-ink">
                      {c.name}
                    </a>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
