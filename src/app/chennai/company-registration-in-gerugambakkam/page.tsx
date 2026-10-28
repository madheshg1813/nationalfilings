import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gerugambakkamPage as data } from "@/lib/clusters/gerugambakkam";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A10 · Company Registration in Gerugambakkam (locality page under the P1 pillar). Primary keyword: "company registration in gerugambakkam".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Gerugambakkam, Chennai",
  // Home › Company Registration › Gerugambakkam (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Gerugambakkam", path: route.path }],
  service: { name: "Company Registration in Gerugambakkam, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function GerugambakkamCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
