import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstPorurPage as data } from "@/lib/clusters/gst-porur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A7 · GST Consultant in Porur (locality page under the P2 pillar). Primary keyword: "gst consultant in porur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Porur, Chennai",
  // Home › GST Services › Porur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Porur", path: route.path }],
  service: { name: "GST Consultant in Porur, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function PorurGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
