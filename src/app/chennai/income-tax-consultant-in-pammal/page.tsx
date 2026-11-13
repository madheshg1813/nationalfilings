import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itPammalPage as data } from "@/lib/clusters/it-pammal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A3 · Income Tax Consultant in Pammal (locality page under the P3 pillar). Primary keyword: "income tax consultant in pammal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Pammal, Chennai",
  // Home › Income Tax Services › Pammal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pammal", path: route.path }],
  service: { name: "Income Tax Consultant in Pammal, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function PammalIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
