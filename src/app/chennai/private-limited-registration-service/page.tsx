import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { privateLimitedPage as data } from "@/lib/clusters/private-limited";
import { clusterRoute } from "@/lib/clusters/shared";

// P1-C6 · Private Limited Company Registration in Chennai. Primary keyword: "private limited registration in chennai".
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Private Limited Company Registration in Chennai",
  service: { name: "Private Limited Company Registration in Chennai", serviceType: "Private limited company registration" },
});
export const metadata = page.metadata;

export default function PrivateLimitedRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
