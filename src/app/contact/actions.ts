"use server";

import { redirect } from "next/navigation";
import { deliverLead, parseLead, type ContactState } from "@/lib/contact";

export async function submitLead(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Spam traps: a hidden field people never fill, and forms sent faster than a person can type
  if (form.get("company_website")) redirect("/thank-you");
  const started = Number(form.get("started"));
  if (started && Date.now() - started < 2500) redirect("/thank-you");

  const { lead, errors, values } = parseLead(form);
  if (!lead) return { status: "error", errors, values, message: "Please check the highlighted fields." };

  const ok = await deliverLead(lead);
  if (!ok) {
    return {
      status: "error",
      values,
      message: "Sorry, we couldn't send your enquiry just now. Please call or WhatsApp us instead.",
    };
  }
  redirect(`/thank-you?service=${encodeURIComponent(lead.service)}`);
}
