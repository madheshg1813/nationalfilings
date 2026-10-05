import { BookOpen, CalendarClock, Globe2, Landmark } from "lucide-react";
import { definePage } from "@/lib/page";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";

// TODO(client): have a lawyer review this draft before launch (the site-wide SITE_INDEXABLE switch keeps it noindex until then).
const page = definePage({
  path: "/disclaimer",
  title: `Disclaimer | ${site.name}`,
  description: `${site.name} is a private consultancy, not a government body. Read how we handle outcomes, timelines, advice and third-party names.`,
  trail: [{ name: "Disclaimer", path: "/disclaimer" }],
});
export const metadata = page.metadata;

const UPDATED = "30 September 2026";

const sections: LegalSection[] = [
  {
    id: "private-firm",
    title: "A private consultancy",
    body: (
      <>
        <p>
          {site.name} is a private professional services firm. We are not a government department, ministry, regulator or official portal, and
          we are not affiliated with, authorised by or endorsed by any government body.
        </p>
        <p>
          We prepare and file registrations, returns, licences and compliance work on behalf of our clients, for a professional fee. You can
          also file most of these yourself directly on the relevant government portal.
        </p>
      </>
    ),
  },
  {
    id: "names",
    title: "Government portals and brand names",
    body: (
      <>
        <p>
          Names such as GST, Income Tax, MCA, EPFO, ESIC, DGFT and IP India appear on this website only to describe the filings we handle.
          They belong to the respective government departments.
        </p>
        <p>
          Google, Justdial, WhatsApp and other brand names and logos belong to their owners. We show them only to link to our public profiles
          and contact channels; it does not mean those companies endorse us.
        </p>
      </>
    ),
  },
  {
    id: "outcomes",
    title: "Outcomes and timelines",
    body: (
      <>
        <p>
          Approvals, registrations, objections, queries and processing times are decided by the relevant government authorities. We prepare
          and file your application carefully and follow up on it, but we cannot guarantee a particular outcome, approval or date.
        </p>
        <p>Any timeline we share is an estimate based on normal processing and on receiving complete documents from you.</p>
      </>
    ),
  },
  {
    id: "advice",
    title: "General information, not advice",
    body: (
      <>
        <p>
          Articles, FAQs and other content on this website are general information about registrations, tax and compliance. They are not legal,
          tax or financial advice for your situation, and laws, rates and deadlines change.
        </p>
        <p>Please speak to us before acting on anything you read here, so we can check it against your business and the current rules.</p>
      </>
    ),
  },
  {
    id: "your-information",
    title: "Information you give us",
    body: (
      <p>
        Our work relies on the documents and details you provide. You are responsible for making sure they are accurate, complete and genuine.
        We are not responsible for delays, penalties or rejections caused by incorrect or incomplete information.
      </p>
    ),
  },
  {
    id: "reviews-links",
    title: "Reviews and links to other websites",
    body: (
      <p>
        Reviews shown on this website come from our public Google Business Profile and are displayed as posted by the reviewers. Links to
        Google, Justdial, WhatsApp, government portals and other websites are provided for convenience; we are not responsible for their content
        or privacy practices.
      </p>
    ),
  },
  {
    id: "service-area",
    title: "Service area",
    body: (
      <p>
        We serve clients across India (PAN India), mostly online, from our office in Chennai. Some services have state-specific rules or require a
        physical visit or signature; we tell you upfront when that applies.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        Our responsibility for any engagement is set out in our <a href="/terms-and-conditions">Terms and Conditions</a> and in your quote. Use
        of this website is at your own risk.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      page={page}
      title="Disclaimer"
      accent="Disclaimer"
      updated={UPDATED}
      intro="Please read this before relying on our website or engaging us for a filing."
      highlights={[
        { icon: Landmark, title: "Private firm", text: "We are not a government body, portal or regulator." },
        { icon: CalendarClock, title: "Authorities decide", text: "Approvals and timelines are set by government departments." },
        { icon: BookOpen, title: "General information", text: "Website content is not advice for your specific case." },
        { icon: Globe2, title: "PAN India", text: "We serve clients across India, mostly online." },
      ]}
      sections={sections}
      contact={{
        title: "Not sure what applies to you?",
        text: "Tell us about your situation and we'll explain what's needed.",
        message: "Hi National Filings, I have a question about your disclaimer.",
      }}
    />
  );
}
