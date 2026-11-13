import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itChromepetPage as data } from "@/lib/clusters/it-chromepet";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A5 · Income Tax Consultant in Chromepet (locality page under the P3 pillar). Primary keyword: "income tax consultant in chromepet".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Chromepet, Chennai",
  // Home › Income Tax Services › Chromepet (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Chromepet", path: route.path }],
  service: { name: "Income Tax Consultant in Chromepet, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function ChromepetIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
