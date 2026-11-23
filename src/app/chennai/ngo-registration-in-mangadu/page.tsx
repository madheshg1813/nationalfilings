import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoMangaduPage as data } from "@/lib/clusters/ngo-mangadu";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A8 · NGO Registration in Mangadu (locality page under the P4 pillar). Primary keyword: "ngo registration in mangadu".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Mangadu",
  // Home › NGO Registration › Mangadu (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Mangadu", path: route.path }],
  service: { name: "NGO Registration in Mangadu", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function MangaduNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
