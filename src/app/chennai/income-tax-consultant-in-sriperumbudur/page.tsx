import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itSriperumbudurPage as data } from "@/lib/clusters/it-sriperumbudur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A12 · Income Tax Consultant in Sriperumbudur (locality page under the P3 pillar). Primary keyword: "income tax consultant in sriperumbudur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Sriperumbudur",
  // Home › Income Tax Services › Sriperumbudur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Sriperumbudur", path: route.path }],
  service: { name: "Income Tax Consultant in Sriperumbudur", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function SriperumbudurIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
