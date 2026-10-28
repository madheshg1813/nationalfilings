import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { anakaputhurPage as data } from "@/lib/clusters/anakaputhur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A4 · Company Registration in Anakaputhur (locality page under the P1 pillar). Primary keyword: "company registration in anakaputhur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Anakaputhur, Chennai",
  // Home › Company Registration › Anakaputhur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Anakaputhur", path: route.path }],
  service: { name: "Company Registration in Anakaputhur, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function AnakaputhurCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
