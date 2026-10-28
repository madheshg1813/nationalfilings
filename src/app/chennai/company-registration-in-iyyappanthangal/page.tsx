import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { iyyappanthangalPage as data } from "@/lib/clusters/iyyappanthangal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A11 · Company Registration in Iyyappanthangal (locality page under the P1 pillar). Primary keyword: "company registration in iyyappanthangal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Iyyappanthangal, Chennai",
  // Home › Company Registration › Iyyappanthangal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Iyyappanthangal", path: route.path }],
  service: { name: "Company Registration in Iyyappanthangal, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function IyyappanthangalCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
