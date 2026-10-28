import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { pallavaramPage as data } from "@/lib/clusters/pallavaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A2 · Company Registration in Pallavaram (locality page under the P1 pillar). Primary keyword: "company registration in pallavaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Pallavaram, Chennai",
  // Home › Company Registration › Pallavaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pallavaram", path: route.path }],
  service: { name: "Company Registration in Pallavaram, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function PallavaramCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
