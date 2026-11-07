import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstPallavaramPage as data } from "@/lib/clusters/gst-pallavaram";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A2 · GST Consultant in Pallavaram (locality page under the P2 pillar). Primary keyword: "gst consultant in pallavaram".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Pallavaram, Chennai",
  // Home › GST Services › Pallavaram (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pallavaram", path: route.path }],
  service: { name: "GST Consultant in Pallavaram, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function PallavaramGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
