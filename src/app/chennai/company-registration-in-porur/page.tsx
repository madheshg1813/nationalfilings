import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { porurPage as data } from "@/lib/clusters/porur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A7 · Company Registration in Porur (locality page under the P1 pillar). Primary keyword: "company registration in porur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Porur, Chennai",
  // Home › Company Registration › Porur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Porur", path: route.path }],
  service: { name: "Company Registration in Porur, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function PorurCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
