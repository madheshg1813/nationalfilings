import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstMangaduPage as data } from "@/lib/clusters/gst-mangadu";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A8 · GST Consultant in Mangadu (locality page under the P2 pillar). Primary keyword: "gst consultant in mangadu".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Mangadu, Chennai",
  // Home › GST Services › Mangadu (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Mangadu", path: route.path }],
  service: { name: "GST Consultant in Mangadu, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function MangaduGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
