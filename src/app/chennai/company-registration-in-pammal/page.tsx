import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { pammalPage as data } from "@/lib/clusters/pammal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A3 · Company Registration in Pammal (locality page under the P1 pillar). Primary keyword: "company registration in pammal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Pammal, Chennai",
  // Home › Company Registration › Pammal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pammal", path: route.path }],
  service: { name: "Company Registration in Pammal, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function PammalCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
