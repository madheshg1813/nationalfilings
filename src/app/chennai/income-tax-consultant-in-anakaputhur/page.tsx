import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itAnakaputhurPage as data } from "@/lib/clusters/it-anakaputhur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A4 · Income Tax Consultant in Anakaputhur (locality page under the P3 pillar). Primary keyword: "income tax consultant in anakaputhur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Anakaputhur, Chennai",
  // Home › Income Tax Services › Anakaputhur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Anakaputhur", path: route.path }],
  service: { name: "Income Tax Consultant in Anakaputhur, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function AnakaputhurIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
