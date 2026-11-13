import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itPallavaramPage as data } from "@/lib/clusters/it-pallavaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A2 · Income Tax Consultant in Pallavaram (locality page under the P3 pillar). Primary keyword: "income tax consultant in pallavaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Pallavaram, Chennai",
  // Home › Income Tax Services › Pallavaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pallavaram", path: route.path }],
  service: { name: "Income Tax Consultant in Pallavaram, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function PallavaramIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
