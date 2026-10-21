import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { section8Page as data } from "@/lib/clusters/section-8";
import { clusterRoute } from "@/lib/clusters/shared";

// P4-C3 · Section 8 Company Registration in Chennai. Primary keyword: "section 8 company registration in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Section 8 Company Registration in Chennai",
  service: { name: "Section 8 Company Registration in Chennai", serviceType: "Section 8 company registration" },
});
export const metadata = page.metadata;

export default function Section8RegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
