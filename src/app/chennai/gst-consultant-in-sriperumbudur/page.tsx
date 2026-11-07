import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstSriperumbudurPage as data } from "@/lib/clusters/gst-sriperumbudur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A12 · GST Consultant in Sriperumbudur (locality page under the P2 pillar). Primary keyword: "gst consultant in sriperumbudur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Sriperumbudur",
  // Home › GST Services › Sriperumbudur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Sriperumbudur", path: route.path }],
  service: { name: "GST Consultant in Sriperumbudur", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function SriperumbudurGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
