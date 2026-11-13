import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itPorurPage as data } from "@/lib/clusters/it-porur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A7 · Income Tax Consultant in Porur (locality page under the P3 pillar). Primary keyword: "income tax consultant in porur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Porur, Chennai",
  // Home › Income Tax Services › Porur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Porur", path: route.path }],
  service: { name: "Income Tax Consultant in Porur, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function PorurIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
