import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoIyyappanthangalPage as data } from "@/lib/clusters/ngo-iyyappanthangal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A11 · NGO Registration in Iyyappanthangal (locality page under the P4 pillar). Primary keyword: "ngo registration in iyyappanthangal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Iyyappanthangal, Chennai",
  // Home › NGO Registration › Iyyappanthangal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Iyyappanthangal", path: route.path }],
  service: { name: "NGO Registration in Iyyappanthangal, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function IyyappanthangalNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
