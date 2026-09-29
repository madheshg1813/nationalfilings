import type { Metadata } from "next";
import { Ban, FileLock2, Share2, UserCheck } from "lucide-react";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { addressLine, site, telLink, whatsappLink } from "@/lib/site";

// TODO(client): have a lawyer review this draft and name the grievance officer, then remove `robots` and add to the sitemap.
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, shares and protects the personal information and documents you give us.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

const UPDATED = "29 September 2026";

const ask = whatsappLink("Hi National Filings, I have a privacy question.");

const dataGroups = [
  {
    title: "Contact details",
    items: "Name, phone number, WhatsApp number, email address and city.",
    why: "To reply to your enquiry and keep you updated on your work.",
  },
  {
    title: "Identity and KYC documents",
    items: "PAN, Aadhaar, photographs, date of birth, address proof, and digital signature certificates (DSC) where a filing needs them.",
    why: "Government portals require them to register, file or verify.",
  },
  {
    title: "Business and financial records",
    items: "Business name and address, GSTIN, bank statements, invoices, sales and purchase data, salary records and financial statements.",
    why: "To prepare your returns, registrations and compliance filings.",
  },
  {
    title: "Website usage",
    items: "Pages visited, device and browser type, and approximate location, collected through analytics if it is switched on.",
    why: "To understand which pages help people, and improve the site.",
  },
];

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          {site.name} (“we”, “us”, “our”) is a private professional services firm that helps individuals, businesses and NGOs with company
          registration, GST, income tax, TDS, trademark, NGO, PF and ESI, and licence work.
        </p>
        <p>
          This policy explains what personal information we collect when you use this website or our services, why we collect it, who we
          share it with, and the choices you have. It is written to follow the Digital Personal Data Protection Act, 2023, and the
          Information Technology Act, 2000, with the rules made under them.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We only ask for what a particular service needs. Depending on the work, this may include:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {dataGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-ink/10 bg-white p-4 sm:p-5">
              <p className="font-display text-[15px] font-bold text-ink">{g.title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{g.items}</p>
              <p className="mt-3 border-t border-ink/10 pt-3 text-[13px] leading-relaxed text-ink-muted">
                <span className="font-semibold text-brand-deep">Why: </span>
                {g.why}
              </p>
            </div>
          ))}
        </div>
        <p>
          You give us most of this directly, over WhatsApp, phone, email or in person. Sometimes we receive it from government portals while
          working on your file, for example a GST or income tax record we download with your permission.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>prepare, file and follow up on the registrations, returns and applications you ask us to handle;</li>
          <li>reply to your enquiries and send you updates, reminders and due-date alerts about your work;</li>
          <li>send quotes and invoices, and keep our accounts;</li>
          <li>meet our own legal, tax and record-keeping obligations; and</li>
          <li>improve this website and our services.</li>
        </ul>
        <p>
          We process your information because you have consented to it or asked us to provide a service, or because the law requires it. We
          will not use your documents for anything unrelated to the work you gave us.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          <strong>We do not sell or rent your personal information.</strong> We share it only when your work needs it, or when the law
          requires it:
        </p>
        <ul>
          <li>
            <strong>Government departments and portals</strong>, such as the GST, Income Tax, MCA, EPFO, ESIC, IP India, FSSAI and Udyam
            portals, when we file on your behalf.
          </li>
          <li>
            <strong>Professionals working on your file</strong>, such as chartered accountants, company secretaries or advocates, who are
            bound to keep it confidential.
          </li>
          <li>
            <strong>Service providers</strong> we use to run the business, such as cloud storage, email, WhatsApp and website analytics.
            They may only use your information to provide their service to us.
          </li>
          <li>
            <strong>Authorities</strong>, when a court, regulator or law requires us to disclose it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "How we keep it safe",
    body: (
      <>
        <p>
          We take reasonable care to protect your documents from loss, misuse and unauthorised access. Access is limited to the people
          working on your file, and portal passwords and digital signature certificates are handled only for the filing you have approved.
        </p>
        <p>
          No method of sending or storing information is completely secure. If a breach affects your personal information, we will tell
          you and the relevant authorities as the law requires.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <p>
        We keep your information while we are working for you, and afterwards for as long as tax, company and other laws require us to keep
        records, or as long as we need it to deal with a query or dispute about our work. After that we delete it or return it to you.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>You can ask us to:</p>
        <ul>
          <li>tell you what personal information we hold about you and how we use it;</li>
          <li>correct information that is wrong or incomplete, or update it;</li>
          <li>delete your information once it is no longer needed, unless the law requires us to keep it;</li>
          <li>withdraw your consent, which stops future use but may mean we can’t finish work that depends on it; and</li>
          <li>nominate someone to act for you if you die or become unable to act.</li>
        </ul>
        <p>
          To make a request,{" "}
          <a href={ask} target="_blank" rel="noopener noreferrer">
            message us on WhatsApp
          </a>
          {site.email ? (
            <>
              {" "}
              or email <a href={`mailto:${site.email}`}>{site.email}</a>
            </>
          ) : null}
          . We may ask you to confirm your identity first.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <p>
        This website does not use advertising cookies. If analytics is switched on, we use Google Analytics, which sets cookies to measure
        visits and page views. You can block or delete cookies in your browser settings, and the site will still work.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children’s information",
    body: (
      <p>
        Our services are meant for adults. Where a filing needs a minor’s details, for example a family trust or a dependant’s tax record, we
        collect them only from a parent or lawful guardian, with their consent.
      </p>
    ),
  },
  {
    id: "other-sites",
    title: "Links to other websites",
    body: (
      <p>
        This site links to government portals, WhatsApp, Google and other sites that we don’t control. Their own privacy policies apply when
        you use them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our services or the law change. The date at the top of this page shows when it was last changed. If a
        change is significant, we will tell our current clients.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact and grievances",
    body: (
      <>
        <p>
          If you have a question or complaint about how we handle your personal information, contact us and we will respond as soon as we
          can.
        </p>
        <ul>
          <li>
            WhatsApp:{" "}
            <a href={ask} target="_blank" rel="noopener noreferrer">
              message us
            </a>
          </li>
          {site.email && (
            <li>
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          )}
          {site.phone && (
            <li>
              Phone: <a href={telLink()!}>{site.phone}</a>
            </li>
          )}
          {addressLine() && <li>Post: {addressLine()}</li>}
        </ul>
        <p>
          If you are not satisfied with our response, you can complain to the Data Protection Board of India.
        </p>
      </>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      accent="Policy"
      updated={UPDATED}
      intro="Your documents are personal. This page explains what we collect, why we need it, who sees it, and how you stay in control."
      highlights={[
        { icon: Ban, title: "We never sell your data", text: "Your information is used for your work, not sold or rented to anyone." },
        { icon: FileLock2, title: "Used only for your filing", text: "Documents you share are used for the service you asked for, nothing else." },
        { icon: Share2, title: "Shared only when needed", text: "With government portals and the professionals handling your file." },
        { icon: UserCheck, title: "You stay in control", text: "Ask us to see, correct or delete your information at any time." },
      ]}
      sections={sections}
      contact={{
        title: "Questions about your data?",
        text: "Ask us what we hold, request a correction or deletion, or raise a concern.",
        message: "Hi National Filings, I have a privacy question.",
      }}
    />
  );
}
