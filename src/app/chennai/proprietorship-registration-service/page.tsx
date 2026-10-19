import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { proprietorshipPage as data } from "@/lib/clusters/proprietorship";
import { clusterRoute } from "@/lib/clusters/shared";

// P1-C4 · Proprietorship Registration in Chennai. Primary keyword: "proprietorship registration in chennai".
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Proprietorship Registration in Chennai",
  service: { name: "Proprietorship Registration in Chennai", serviceType: "Sole proprietorship registration" },
});
export const metadata = page.metadata;

export default function ProprietorshipRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
