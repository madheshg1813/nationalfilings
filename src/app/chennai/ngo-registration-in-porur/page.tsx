import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoPorurPage as data } from "@/lib/clusters/ngo-porur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A7 · NGO Registration in Porur (locality page under the P4 pillar). Primary keyword: "ngo registration in porur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Porur, Chennai",
  // Home › NGO Registration › Porur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Porur", path: route.path }],
  service: { name: "NGO Registration in Porur, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function PorurNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
