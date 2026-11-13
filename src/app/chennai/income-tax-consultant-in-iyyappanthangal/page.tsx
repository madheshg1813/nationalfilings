import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itIyyappanthangalPage as data } from "@/lib/clusters/it-iyyappanthangal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A11 · Income Tax Consultant in Iyyappanthangal (locality page under the P3 pillar). Primary keyword: "income tax consultant in iyyappanthangal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Iyyappanthangal, Chennai",
  // Home › Income Tax Services › Iyyappanthangal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Iyyappanthangal", path: route.path }],
  service: { name: "Income Tax Consultant in Iyyappanthangal, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function IyyappanthangalIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
