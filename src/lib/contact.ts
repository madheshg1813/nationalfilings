import { licences, pillars } from "./routes";

/** Options for "What do you need help with?" (same labels as the Chennai directory) */
export const serviceOptions = [...pillars.map((p) => p.label), ...licences.map((l) => l.label), "Something else"];

export type LeadField = "name" | "phone" | "email" | "service" | "message";

export type Lead = {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  page: string;
};

export type ContactState = {
  status: "idle" | "error";
  message?: string;
  errors?: Partial<Record<LeadField, string>>;
  values?: Partial<Lead>;
};

const str = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Indian mobile numbers, with or without +91 / 0 prefix */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? `+91 ${digits.slice(0, 5)} ${digits.slice(5)}` : null;
}

export function parseLead(form: FormData): { lead?: Lead; errors?: ContactState["errors"]; values: Partial<Lead> } {
  const values: Lead = {
    name: str(form.get("name"), 80),
    phone: str(form.get("phone"), 20),
    email: str(form.get("email"), 120),
    service: str(form.get("service"), 60),
    city: str(form.get("city"), 60),
    message: str(form.get("message"), 1500),
    page: str(form.get("page"), 200),
  };
  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  const phone = normalisePhone(values.phone);
  if (!phone) errors.phone = "Please enter a 10-digit mobile number.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please check your email address.";
  if (!serviceOptions.includes(values.service)) errors.service = "Please choose a service.";
  if (Object.keys(errors).length) return { errors, values };
  return { lead: { ...values, phone: phone! }, values };
}

/**
 * Sends a lead to the Google Sheet web app (scripts/lead-sheet.gs), which adds a row and emails the team.
 * LEAD_WEBHOOK_URL is the web app URL; LEAD_WEBHOOK_SECRET must match SECRET in the script.
 */
export async function deliverLead(lead: Lead): Promise<boolean> {
  const { LEAD_WEBHOOK_URL, LEAD_WEBHOOK_SECRET } = process.env;
  if (!LEAD_WEBHOOK_URL) {
    // Nothing configured: fine while developing, a failure in production
    console.warn("[contact] LEAD_WEBHOOK_URL is not set.", lead);
    return process.env.NODE_ENV !== "production";
  }
  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret: LEAD_WEBHOOK_SECRET ?? "", submittedAt: new Date().toISOString() }),
    });
    // Apps Script answers 200 with {"ok":true|false}, even for errors
    const body = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !body?.ok) console.error("[contact] webhook failed", res.status, body?.error);
    return res.ok && Boolean(body?.ok);
  } catch (e) {
    console.error("[contact] webhook failed", e);
    return false;
  }
}
