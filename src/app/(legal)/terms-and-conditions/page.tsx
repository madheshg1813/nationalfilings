import { CalendarClock, FileSignature, Landmark, ReceiptIndianRupee } from "lucide-react";
import { definePage } from "@/lib/page";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { site, whatsappLink } from "@/lib/site";

// TODO(client): have a lawyer review this draft (fees, refunds, liability, jurisdiction), before launch (the site-wide SITE_INDEXABLE switch keeps it noindex until then).
const page = definePage({
  path: "/terms-and-conditions",
  title: `Terms and Conditions | ${site.name}`,
  description: `The terms that apply when you use the ${site.name} website or engage us for registration, tax and compliance services.`,
  trail: [{ name: "Terms and Conditions", path: "/terms-and-conditions" }],
});
export const metadata = page.metadata;

const UPDATED = "29 September 2026";

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms apply when you use this website or engage {site.name} (“we”, “us”, “our”) for any service. By using the website or
          asking us to start work, you agree to them. If a written quote or engagement letter we send you says something different, that
          document applies to that piece of work.
        </p>
        <p>
          How we handle your personal information is explained in our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Our services",
    body: (
      <>
        <p>
          We are a private professional services firm. We prepare, file and follow up on registrations, returns, licences and compliance
          work with government departments on your behalf.
        </p>
        <p>
          <strong>We are not a government body</strong> and we are not affiliated with any government department or portal. You can file
          most applications yourself on the official portals; you engage us for our time, expertise and follow-up.
        </p>
        <p>The scope of each engagement is what we confirm with you before starting. Work outside that scope is quoted separately.</p>
      </>
    ),
  },
  {
    id: "your-part",
    title: "Your responsibilities",
    body: (
      <>
        <p>To let us do the work properly, you agree to:</p>
        <ul>
          <li>give us complete, accurate and genuine information and documents, and tell us promptly if anything changes;</li>
          <li>share documents, approvals and one-time passwords (OTPs) in time to meet filing deadlines;</li>
          <li>check the drafts and details we send you before we file them; and</li>
          <li>have the legal right to share any information about other people, such as partners, directors or employees.</li>
        </ul>
        <p>
          You are responsible for the accuracy of the information you give us. Delays, penalties or rejections caused by missing, late or
          incorrect information are not our responsibility.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees and payment",
    body: (
      <>
        <p>
          We share our professional fee with you before we start. Unless we say otherwise, it does not include government fees, stamp duty,
          taxes such as GST, or third-party charges, which are payable at actual cost.
        </p>
        <p>
          Payment terms, including any advance, are set out in your quote. We may pause work if an agreed payment is overdue. Refunds, if
          any, are handled as agreed in your quote; government fees already paid to a department can’t be recovered by us.
        </p>
      </>
    ),
  },
  {
    id: "timelines",
    title: "Timelines and outcomes",
    body: (
      <p>
        Any timeline we give is an estimate based on normal processing. Approvals, objections, queries and processing times are decided by
        the government authorities, so we can’t guarantee a particular result or date. If an authority raises a query or objection, we will
        tell you and help you respond as part of, or in addition to, the agreed scope.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <p>
        We keep your information and documents confidential and use them only for your work, except where we need to share them with
        government portals or professionals working on your file, or where the law requires it. See our{" "}
        <a href="/privacy-policy">Privacy Policy</a> and <a href="/security">Security</a> page for details.
      </p>
    ),
  },
  {
    id: "website",
    title: "Use of this website",
    body: (
      <>
        <p>
          Information on this website is general and may not suit your situation. It is not legal, tax or financial advice, and laws and
          fees change. Please talk to us before acting on it.
        </p>
        <p>
          The website’s content, design and branding belong to {site.name}. You may not copy or reuse them without our permission. Links
          to other websites, including government portals, are provided for convenience; we are not responsible for their content.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        We take reasonable care in our work. To the extent the law allows, our total liability for any claim relating to a piece of work is
        limited to the professional fee you paid us for that work, and we are not liable for indirect losses such as lost profit or
        business opportunity.
      </p>
    ),
  },
  {
    id: "ending",
    title: "Ending an engagement",
    body: (
      <p>
        Either of us can end an engagement by telling the other. You pay for work done up to that point and any government or third-party
        costs already incurred, and we return your original documents.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: <p>These terms are governed by the laws of India. Any dispute is subject to the courts in Chennai, Tamil Nadu.</p>,
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The date at the top of this page shows when they last changed. Work already agreed
        continues on the terms that applied when you engaged us.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        For any question about these terms,{" "}
        <a href={whatsappLink("Hi National Filings, I have a question about your terms.")} target="_blank" rel="noopener noreferrer">
          message us on WhatsApp
        </a>{" "}
        or use our <a href="/contact">contact form</a>.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      page={page}
      title="Terms and Conditions"
      accent="Conditions"
      updated={UPDATED}
      intro="The ground rules for working with us: what we do, what we need from you, fees, timelines and your rights."
      highlights={[
        { icon: ReceiptIndianRupee, title: "Fee shared upfront", text: "You get our fee before we start. Government fees are charged at actual cost." },
        { icon: FileSignature, title: "You approve every filing", text: "We send drafts for you to check before anything is filed." },
        { icon: CalendarClock, title: "Honest timelines", text: "Estimates are based on normal processing; the authority decides the final date." },
        { icon: Landmark, title: "A private firm", text: "We file on your behalf. We are not a government body or portal." },
      ]}
      sections={sections}
      contact={{
        title: "Questions before you start?",
        text: "Ask us about scope, fees or timelines for your work. We'll explain it plainly.",
        message: "Hi National Filings, I have a question about your terms.",
      }}
    />
  );
}
