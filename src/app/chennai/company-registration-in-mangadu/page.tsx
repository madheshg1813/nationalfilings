import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { mangaduPage as data } from "@/lib/clusters/mangadu";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A8 · Company Registration in Mangadu (locality page under the P1 pillar). Primary keyword: "company registration in mangadu".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Mangadu, Chennai",
  // Home › Company Registration › Mangadu (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Mangadu", path: route.path }],
  service: { name: "Company Registration in Mangadu, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function MangaduCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
