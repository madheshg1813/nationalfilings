import { Ban, ReceiptIndianRupee, RotateCcw, Scale } from "lucide-react";
import { definePage } from "@/lib/page";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { site, telLink, whatsappLink } from "@/lib/site";

// TODO(client): confirm the refund rules and add a processing time (e.g. "within X working days"), then have a lawyer review before launch.
const page = definePage({
  path: "/refund-policy",
  title: "Refund Policy | National Filings Professional Fee Refunds",
  description: "Understand when National Filings refunds professional fees, which government and third-party charges can't be refunded, and how to ask for one.",
  trail: [{ name: "Refund Policy", path: "/refund-policy" }],
});
export const metadata = page.metadata;

const UPDATED = "30 September 2026";

export default function Page() {
  const tel = telLink();
  const ask = whatsappLink("Hi National Filings, I'd like to request a refund.");

  const sections: LegalSection[] = [
    {
      id: "scope",
      title: "What this policy covers",
      body: (
        <>
          <p>
            This policy explains when we refund the professional fee you pay {site.name} for a service. If your written quote or engagement
            letter says something different, that document applies to that piece of work.
          </p>
          <p>
            Our fees and payment terms are also covered in our <a href="/terms-and-conditions">Terms and Conditions</a>.
          </p>
        </>
      ),
    },
    {
      id: "non-refundable",
      title: "Government and third-party fees",
      body: (
        <>
          <p>Some amounts are paid out on your behalf and cannot be recovered by us once paid. These are not refundable:</p>
          <ul>
            <li>Government fees, filing fees, late fees and penalties paid to a department or portal</li>
            <li>Stamp duty and notary charges</li>
            <li>Digital Signature Certificate (DSC) charges paid to the certifying authority</li>
            <li>Name reservation, trademark, copyright and other statutory application fees</li>
          </ul>
          <p>If a department itself refunds a fee, we pass the amount on to you once it is received.</p>
        </>
      ),
    },
    {
      id: "eligible",
      title: "When you can get a refund",
      body: (
        <>
          <h3>Before work starts</h3>
          <p>
            If you cancel before we begin work, we refund the professional fee in full, less any government or third-party costs already paid
            for you.
          </p>
          <h3>Work partly done</h3>
          <p>
            If you cancel after we have started, we refund the part of the professional fee for work not yet done. We explain the stage your
            work has reached and how the amount was worked out.
          </p>
          <h3>Work completed</h3>
          <p>Once an application or return has been filed, or the agreed work is complete, the professional fee is not refundable.</p>
          <h3>Duplicate or extra payments</h3>
          <p>If you pay twice or pay more than the agreed amount by mistake, we refund the extra amount in full.</p>
        </>
      ),
    },
    {
      id: "rejections",
      title: "Rejections, queries and objections",
      body: (
        <>
          <p>
            Approvals are decided by government authorities, so a query, objection or rejection by a department is not by itself a reason for a
            refund. We will tell you what the authority needs and help you respond as part of, or in addition to, the agreed scope.
          </p>
          <p>
            If an application is rejected because of a mistake on our part, we will correct and re-file it without charging a further
            professional fee.
          </p>
        </>
      ),
    },
    {
      id: "how-to-request",
      title: "How to request a refund",
      body: (
        <>
          <p>Contact us with your name, the service, and your payment reference or date:</p>
          <ul>
            <li>
              WhatsApp:{" "}
              <a href={ask} target="_blank" rel="noopener noreferrer">
                message us
              </a>
            </li>
            {tel && (
              <li>
                Phone: <a href={tel}>{site.phone}</a>
              </li>
            )}
            {site.email && (
              <li>
                Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
          </ul>
          <p>We confirm the refund amount with you before processing it.</p>
        </>
      ),
    },
    {
      id: "processing",
      title: "How refunds are paid",
      body: (
        <p>
          Approved refunds are paid to the original payment method, or by bank transfer if that isn&apos;t possible. We&apos;ll tell you when
          the refund has been sent.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: (
        <p>
          We may update this policy from time to time. The version on this page applies to payments made after the date shown above.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      page={page}
      title="Refund Policy"
      accent="Refund"
      updated={UPDATED}
      intro="Clear rules on what we refund, what we can't, and how to ask."
      highlights={[
        { icon: RotateCcw, title: "Cancel before we start", text: "Full refund of our professional fee." },
        { icon: Scale, title: "Work partly done", text: "Refund for the part not yet done." },
        { icon: Ban, title: "Government fees", text: "Paid to departments and can't be recovered by us." },
        { icon: ReceiptIndianRupee, title: "Extra payments", text: "Duplicate or excess amounts refunded in full." },
      ]}
      sections={sections}
      contact={{
        title: "Need to discuss a payment?",
        text: "Message us with your payment details and we'll sort it out.",
        message: "Hi National Filings, I have a question about a payment or refund.",
      }}
    />
  );
}
