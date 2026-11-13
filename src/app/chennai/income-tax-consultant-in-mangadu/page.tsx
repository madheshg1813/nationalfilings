import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itMangaduPage as data } from "@/lib/clusters/it-mangadu";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A8 · Income Tax Consultant in Mangadu (locality page under the P3 pillar). Primary keyword: "income tax consultant in mangadu".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Mangadu, Chennai",
  // Home › Income Tax Services › Mangadu (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Mangadu", path: route.path }],
  service: { name: "Income Tax Consultant in Mangadu, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function MangaduIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
