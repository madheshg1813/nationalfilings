import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstPammalPage as data } from "@/lib/clusters/gst-pammal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A3 · GST Consultant in Pammal (locality page under the P2 pillar). Primary keyword: "gst consultant in pammal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Pammal, Chennai",
  // Home › GST Services › Pammal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Pammal", path: route.path }],
  service: { name: "GST Consultant in Pammal, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function PammalGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
