import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { itGerugambakkamPage as data } from "@/lib/clusters/it-gerugambakkam";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P3-A10 · Income Tax Consultant in Gerugambakkam (locality page under the P3 pillar). Primary keyword: "income tax consultant in gerugambakkam".
const route = localityRoute(data.id);
const pillar = pillarRoute("P3");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Income Tax Consultant in Gerugambakkam, Chennai",
  // Home › Income Tax Services › Gerugambakkam (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Gerugambakkam", path: route.path }],
  service: { name: "Income Tax Consultant in Gerugambakkam, Chennai", serviceType: "Income tax consultant" },
});
export const metadata = page.metadata;

export default function GerugambakkamIncomeTaxConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
