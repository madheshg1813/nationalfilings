import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { ngoTambaramPage as data } from "@/lib/clusters/ngo-tambaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P4-A6 · NGO Registration in Tambaram (locality page under the P4 pillar). Primary keyword: "ngo registration in tambaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P4");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "NGO Registration in Tambaram, Chennai",
  // Home › NGO Registration › Tambaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Tambaram", path: route.path }],
  service: { name: "NGO Registration in Tambaram, Chennai", serviceType: "NGO registration" },
});
export const metadata = page.metadata;

export default function TambaramNgoRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
