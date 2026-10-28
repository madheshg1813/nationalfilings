import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { poonamalleePage as data } from "@/lib/clusters/poonamallee";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A9 · Company Registration in Poonamallee (locality page under the P1 pillar). Primary keyword: "company registration in poonamallee".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Poonamallee, Chennai",
  // Home › Company Registration › Poonamallee (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Poonamallee", path: route.path }],
  service: { name: "Company Registration in Poonamallee, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function PoonamalleeCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
