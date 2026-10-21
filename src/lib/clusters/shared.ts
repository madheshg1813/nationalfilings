import { licences, pillars, serviceHref } from "../routes";

/**
 * Shared links for the cluster pages (Company Registration P1-C*, GST P2-C*, NGO P4-C*).
 * Each page renders through components/licence/LicencePage.tsx; links resolve to "" (plain card) until a page is published.
 */
export const p1 = pillars.find((p) => p.id === "P1")!;

/** Any pillar's cluster (P1-C1, P2-C3...) */
export const clusterRoute = (id: string) => {
  const c = pillars.flatMap((p) => p.clusters).find((x) => x.id === id);
  if (!c) throw new Error(`clusterRoute: unknown cluster ${id}`);
  return c;
};

export const clusterHref = (id: string) => serviceHref(clusterRoute(id));
export const pillarHref = (id: string) => serviceHref(pillars.find((p) => p.id === id)!);
export const licenceHref = (id: string) => serviceHref(licences.find((l) => l.id === id)!);

/** Contact form options (the pillar labels) */
export const SERVICE = "Company Registration";
export const GST_SERVICE = "GST Services";
export const NGO_SERVICE = "NGO Registration";

export const relatedTitle = "Related registration services in Chennai";
