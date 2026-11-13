import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itPoonamalleePage as data } from "@/lib/clusters/it-poonamallee";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A9 · Income Tax Consultant in Poonamallee (locality page under the P3 pillar). Primary keyword: "income tax consultant in poonamallee".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Poonamallee, Chennai",
  // Home › Income Tax Services › Poonamallee (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Poonamallee", path: route.path }],
  service: { name: "Income Tax Consultant in Poonamallee, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function PoonamalleeIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
