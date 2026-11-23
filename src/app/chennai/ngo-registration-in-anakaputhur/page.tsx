import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoAnakaputhurPage as data } from "@/lib/clusters/ngo-anakaputhur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A4 · NGO Registration in Anakaputhur (locality page under the P4 pillar). Primary keyword: "ngo registration in anakaputhur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Anakaputhur, Chennai",
  // Home › NGO Registration › Anakaputhur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Anakaputhur", path: route.path }],
  service: { name: "NGO Registration in Anakaputhur, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function AnakaputhurNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
