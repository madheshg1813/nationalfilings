import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstPoonamalleePage as data } from "@/lib/clusters/gst-poonamallee";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A9 · GST Consultant in Poonamallee (locality page under the P2 pillar). Primary keyword: "gst consultant in poonamallee".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Poonamallee, Chennai",
  // Home › GST Services › Poonamallee (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Poonamallee", path: route.path }],
  service: { name: "GST Consultant in Poonamallee, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function PoonamalleeGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
