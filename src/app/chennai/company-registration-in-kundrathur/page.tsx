import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { kundrathurPage as data } from "@/lib/clusters/kundrathur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A1 · Company Registration in Kundrathur (locality page under the P1 pillar). Primary keyword: "company registration in kundrathur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Kundrathur, Chennai",
  // Home › Company Registration › Kundrathur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Kundrathur", path: route.path }],
  service: { name: "Company Registration in Kundrathur, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function KundrathurCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
