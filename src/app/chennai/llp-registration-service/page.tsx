import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { llpPage as data } from "@/lib/clusters/llp";
import { clusterRoute } from "@/lib/clusters/shared";

// P1-C1 · LLP Registration in Chennai. Primary keyword: "llp registration in chennai".
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "LLP Registration in Chennai",
  service: { name: "LLP Registration in Chennai", serviceType: "LLP registration" },
});
export const metadata = page.metadata;

export default function LlpRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
