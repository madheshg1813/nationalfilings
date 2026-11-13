import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itTambaramPage as data } from "@/lib/clusters/it-tambaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A6 · Income Tax Consultant in Tambaram (locality page under the P3 pillar). Primary keyword: "income tax consultant in tambaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Tambaram, Chennai",
  // Home › Income Tax Services › Tambaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Tambaram", path: route.path }],
  service: { name: "Income Tax Consultant in Tambaram, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function TambaramIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
