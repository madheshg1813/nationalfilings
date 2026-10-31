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

/** Any pillar's locality page (P1-A1 Kundrathur...) */
export const localityRoute = (id: string) => {
  const c = pillars.flatMap((p) => p.localities ?? []).find((x) => x.id === id);
  if (!c) throw new Error(`localityRoute: unknown locality ${id}`);
  return c;
};
export const localityHref = (id: string) => serviceHref(localityRoute(id));

/** Approximate centre of each area (lat, lng), used only to order "nearby areas" links */
const AREA_POINTS: Record<string, [number, number]> = {
  "P1-A1": [12.997, 80.097], // Kundrathur
  "P1-A2": [12.968, 80.15], // Pallavaram
  "P1-A3": [12.975, 80.134], // Pammal
  "P1-A4": [12.982, 80.124], // Anakaputhur
  "P1-A5": [12.951, 80.141], // Chromepet
  "P1-A6": [12.925, 80.118], // Tambaram
  "P1-A7": [13.036, 80.158], // Porur
  "P1-A8": [13.027, 80.11], // Mangadu
  "P1-A9": [13.047, 80.094], // Poonamallee
  "P1-A10": [13.01, 80.13], // Gerugambakkam
  "P1-A11": [13.039, 80.135], // Iyyappanthangal
  "P1-A12": [12.968, 79.946], // Sriperumbudur
};

/**
 * Related links for an area page: the 8 nearest other area pages (two full rows of four).
 * Unpublished areas render as plain cards and become links on their publish date.
 */
export const nearbyAreas = (id: string, count = 8) => {
  const [lat, lng] = AREA_POINTS[id];
  return pillars
    .flatMap((p) => p.localities ?? [])
    .filter((a) => a.id !== id && AREA_POINTS[a.id])
    .map((a) => ({ a, d: Math.hypot(AREA_POINTS[a.id][0] - lat, AREA_POINTS[a.id][1] - lng) }))
    .sort((x, y) => x.d - y.d)
    .slice(0, count)
    .map(({ a }) => ({ icon: "MapPinned", label: a.title, href: serviceHref(a) }));
};
export const pillarRoute = (id: string) => pillars.find((p) => p.id === id)!;
export const pillarHref = (id: string) => serviceHref(pillarRoute(id));
export const licenceHref = (id: string) => serviceHref(licences.find((l) => l.id === id)!);

/** Contact form options (the pillar labels) */
export const SERVICE = "Company Registration";
export const GST_SERVICE = "GST Services";
export const NGO_SERVICE = "NGO Registration";

export const relatedTitle = "Related registration services in Chennai";
