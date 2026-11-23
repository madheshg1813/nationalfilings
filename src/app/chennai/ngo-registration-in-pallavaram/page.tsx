import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoPallavaramPage as data } from "@/lib/clusters/ngo-pallavaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A2 · NGO Registration in Pallavaram (locality page under the P4 pillar). Primary keyword: "ngo registration in pallavaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Pallavaram, Chennai",
  // Home › NGO Registration › Pallavaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pallavaram", path: route.path }],
  service: { name: "NGO Registration in Pallavaram, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function PallavaramNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
