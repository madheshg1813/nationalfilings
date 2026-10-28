import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { sriperumbudurPage as data } from "@/lib/clusters/sriperumbudur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A12 · Company Registration in Sriperumbudur (locality page under the P1 pillar). Primary keyword: "company registration in sriperumbudur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Sriperumbudur",
  // Home › Company Registration › Sriperumbudur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Sriperumbudur", path: route.path }],
  service: { name: "Company Registration in Sriperumbudur", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function SriperumbudurCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
