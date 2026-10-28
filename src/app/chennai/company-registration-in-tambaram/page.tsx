import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { tambaramPage as data } from "@/lib/clusters/tambaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A6 · Company Registration in Tambaram (locality page under the P1 pillar). Primary keyword: "company registration in tambaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Tambaram, Chennai",
  // Home › Company Registration › Tambaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Tambaram", path: route.path }],
  service: { name: "Company Registration in Tambaram, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function TambaramCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
