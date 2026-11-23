import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoPoonamalleePage as data } from "@/lib/clusters/ngo-poonamallee";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A9 · NGO Registration in Poonamallee (locality page under the P4 pillar). Primary keyword: "ngo registration in poonamallee".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Poonamallee, Chennai",
  // Home › NGO Registration › Poonamallee (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Poonamallee", path: route.path }],
  service: { name: "NGO Registration in Poonamallee, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function PoonamalleeNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
