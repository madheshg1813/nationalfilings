import { JsonLd } from "@/components/JsonLd";
import type { Page } from "@/lib/page";

/** Renders the page's own JSON-LD (WebPage/AboutPage/ContactPage + Service) from its definePage() definition. */
export function PageSchema({ page, extra }: { page: Page; extra?: Record<string, unknown>[] }) {
  const graph = page.jsonLd["@graph"] as Record<string, unknown>[];
  return <JsonLd data={{ ...page.jsonLd, "@graph": extra ? [...graph, ...extra] : graph }} />;
}
