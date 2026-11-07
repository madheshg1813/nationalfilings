import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstTambaramPage as data } from "@/lib/clusters/gst-tambaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A6 · GST Consultant in Tambaram (locality page under the P2 pillar). Primary keyword: "gst consultant in tambaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Tambaram, Chennai",
  // Home › GST Services › Tambaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Tambaram", path: route.path }],
  service: { name: "GST Consultant in Tambaram, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function TambaramGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
