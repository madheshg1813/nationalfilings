import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoGerugambakkamPage as data } from "@/lib/clusters/ngo-gerugambakkam";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A10 · NGO Registration in Gerugambakkam (locality page under the P4 pillar). Primary keyword: "ngo registration in gerugambakkam".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Gerugambakkam, Chennai",
  // Home › NGO Registration › Gerugambakkam (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Gerugambakkam", path: route.path }],
  service: { name: "NGO Registration in Gerugambakkam, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function GerugambakkamNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
