import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoPammalPage as data } from "@/lib/clusters/ngo-pammal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A3 · NGO Registration in Pammal (locality page under the P4 pillar). Primary keyword: "ngo registration in pammal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Pammal, Chennai",
  // Home › NGO Registration › Pammal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pammal", path: route.path }],
  service: { name: "NGO Registration in Pammal, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function PammalNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
