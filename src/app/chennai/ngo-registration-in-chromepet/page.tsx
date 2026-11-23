import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoChromepetPage as data } from "@/lib/clusters/ngo-chromepet";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A5 · NGO Registration in Chromepet (locality page under the P4 pillar). Primary keyword: "ngo registration in chromepet".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Chromepet, Chennai",
  // Home › NGO Registration › Chromepet (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Chromepet", path: route.path }],
  service: { name: "NGO Registration in Chromepet, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function ChromepetNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
