import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoSriperumbudurPage as data } from "@/lib/clusters/ngo-sriperumbudur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A12 · NGO Registration in Sriperumbudur (locality page under the P4 pillar). Primary keyword: "ngo registration in sriperumbudur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Sriperumbudur",
  // Home › NGO Registration › Sriperumbudur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Sriperumbudur", path: route.path }],
  service: { name: "NGO Registration in Sriperumbudur", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function SriperumbudurNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
