import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstChromepetPage as data } from "@/lib/clusters/gst-chromepet";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A5 · GST Consultant in Chromepet (locality page under the P2 pillar). Primary keyword: "gst consultant in chromepet".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Chromepet, Chennai",
  // Home › GST Services › Chromepet (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Chromepet", path: route.path }],
  service: { name: "GST Consultant in Chromepet, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function ChromepetGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
