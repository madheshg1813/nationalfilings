import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itKundrathurPage as data } from "@/lib/clusters/it-kundrathur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A1 · Income Tax Consultant in Kundrathur (locality page under the P3 pillar). Primary keyword: "income tax consultant in kundrathur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Kundrathur, Chennai",
  // Home › Income Tax Services › Kundrathur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Kundrathur", path: route.path }],
  service: { name: "Income Tax Consultant in Kundrathur, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function KundrathurIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
