import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstAnakaputhurPage as data } from "@/lib/clusters/gst-anakaputhur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A4 · GST Consultant in Anakaputhur (locality page under the P2 pillar). Primary keyword: "gst consultant in anakaputhur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Anakaputhur, Chennai",
  // Home › GST Services › Anakaputhur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Anakaputhur", path: route.path }],
  service: { name: "GST Consultant in Anakaputhur, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function AnakaputhurGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
