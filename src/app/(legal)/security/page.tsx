import { BadgeAlert, KeyRound, ShieldCheck, LockKeyhole } from "lucide-react";
import { definePage } from "@/lib/page";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { site, telLink, whatsappLink } from "@/lib/site";

// TODO(client): confirm these practices match how the office actually works.
const page = definePage({
  path: "/security",
  title: "Security | How National Filings Keeps Your Documents Safe",
  description: "Learn how National Filings protects your documents, portal logins and digital signatures, and how to spot fraud or fake messages using our name.",
  trail: [{ name: "Security", path: "/security" }],
});
export const metadata = page.metadata;

const UPDATED = "29 September 2026";

const report = whatsappLink("Hi National Filings, I want to report a security concern.");

const sections: LegalSection[] = [
  {
    id: "documents",
    title: "Your documents",
    body: (
      <>
        <p>
          Filing work means handling PAN, Aadhaar, bank statements and business records. We treat them as confidential and follow these
          practices:
        </p>
        <ul>
          <li>only the people working on your file can see your documents;</li>
          <li>we ask only for the documents a filing actually needs;</li>
          <li>documents are used only for the work you asked us to do; and</li>
          <li>when records no longer need to be kept by law, we delete them or return them to you.</li>
        </ul>
      </>
    ),
  },
  {
    id: "logins",
    title: "Portal logins and OTPs",
    body: (
      <>
        <p>
          Some filings need access to your GST, income tax, MCA or other government portal accounts. When they do, we use the login only
          for the filing you have approved, and we ask for OTPs only at the moment we need them.
        </p>
        <p>
          <strong>Tip:</strong> once your work is finished, you can change your portal password. If you tell us, we’ll note it on your file.
        </p>
      </>
    ),
  },
  {
    id: "dsc",
    title: "Digital signature certificates (DSC)",
    body: (
      <p>
        If you leave your DSC token with us, it is kept securely and used only to sign documents you have approved. We return it whenever you
        ask, and at the end of the engagement.
      </p>
    ),
  },
  {
    id: "never-ask",
    title: "What we will never ask for",
    body: (
      <>
        <p>No one from {site.name} will ever ask you for:</p>
        <ul>
          <li>your internet banking password, UPI PIN, card PIN or CVV;</li>
          <li>OTPs for bank transactions or payments; or</li>
          <li>remote access to your phone or computer through screen-sharing apps.</li>
        </ul>
        <p>If someone asks for these while claiming to be from us, don’t share them, and tell us straight away.</p>
      </>
    ),
  },
  {
    id: "fraud",
    title: "Avoiding fraud",
    body: (
      <>
        <p>Scammers sometimes pose as filing consultants or government officials. To stay safe:</p>
        <ul>
          <li>
            only contact us through the details on this website
            {site.phone ? (
              <>
                {" "}
                (our number is <strong>{site.phone}</strong>)
              </>
            ) : null}
            ;
          </li>
          <li>before paying, confirm the amount and account details with us on that number;</li>
          <li>government fees are paid only through official portals and challans, never to a personal account; and</li>
          <li>be wary of messages that threaten penalties or arrest unless you pay immediately. Genuine notices can be checked on the official portal.</li>
        </ul>
      </>
    ),
  },
  {
    id: "website",
    title: "This website",
    body: (
      <p>
        This website is served over a secure HTTPS connection. The contact form collects only what we need to call you back, and those
        details are handled as described in our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: "report",
    title: "Report a concern",
    body: (
      <p>
        If you think your information has been misused, received a suspicious message in our name, or found a security issue on this
        website,{" "}
        <a href={report} target="_blank" rel="noopener noreferrer">
          message us on WhatsApp
        </a>
        {telLink() ? (
          <>
            {" "}
            or call <a href={telLink()!}>{site.phone}</a>
          </>
        ) : null}
        . We’ll look into it promptly.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      page={page}
      title="Security"
      accent="Security"
      updated={UPDATED}
      intro="How we protect your documents, portal logins and digital signatures, and how to recognise fraud that uses our name."
      highlights={[
        { icon: LockKeyhole, title: "Need-to-know access", text: "Only the people working on your file see your documents." },
        { icon: KeyRound, title: "Logins used with approval", text: "Portal access and OTPs only for filings you've approved." },
        { icon: ShieldCheck, title: "DSC kept safe", text: "Used only to sign what you approve, and returned on request." },
        { icon: BadgeAlert, title: "No bank PINs, ever", text: "We never ask for banking passwords, UPI PINs or payment OTPs." },
      ]}
      sections={sections}
      contact={{
        title: "Something doesn't look right?",
        text: "Tell us about a suspicious call, message or payment request that uses our name.",
        message: "Hi National Filings, I want to report a security concern.",
      }}
    />
  );
}
