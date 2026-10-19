import { licences, pillars, serviceHref } from "../routes";

/**
 * Shared links for the P1 Company Registration cluster pages (LLP, Private Limited, OPC, Partnership, Proprietorship).
 * Each page renders through components/licence/LicencePage.tsx; links resolve to "" (plain card) until a page is published.
 */
export const p1 = pillars.find((p) => p.id === "P1")!;

export const clusterRoute = (id: string) => {
  const c = p1.clusters.find((x) => x.id === id);
  if (!c) throw new Error(`clusterRoute: unknown cluster ${id}`);
  return c;
};

export const clusterHref = (id: string) => serviceHref(clusterRoute(id));
export const pillarHref = (id: string) => serviceHref(pillars.find((p) => p.id === id)!);
export const licenceHref = (id: string) => serviceHref(licences.find((l) => l.id === id)!);

/** Contact form option for every cluster page (the pillar's label) */
export const SERVICE = "Company Registration";

export const relatedTitle = "Related registration services in Chennai";
