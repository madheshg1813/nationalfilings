import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoKundrathurPage as data } from "@/lib/clusters/ngo-kundrathur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A1 · NGO Registration in Kundrathur (locality page under the P4 pillar). Primary keyword: "ngo registration in kundrathur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Kundrathur, Chennai",
  // Home › NGO Registration › Kundrathur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Kundrathur", path: route.path }],
  service: { name: "NGO Registration in Kundrathur, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function KundrathurNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
