"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, ArrowRight, ChevronDown, Loader2, Lock } from "lucide-react";
import { submitLead } from "@/app/contact/actions";
import { serviceOptions, type ContactState, type LeadField } from "@/lib/contact";

const initial: ContactState = { status: "idle" };

const input =
  "w-full rounded-xl border bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-faint transition focus:outline-none focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-red-400";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary group w-full !py-3.5 !text-[15px] disabled:cursor-wait disabled:opacity-80">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Sending…
        </>
      ) : (
        <>
          Get a call back
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </>
      )}
    </button>
  );
}

export function ContactForm({ defaultService, page }: { defaultService?: string; page?: string }) {
  const [state, action] = useActionState(submitLead, initial);
  const [started, setStarted] = useState("");
  useEffect(() => setStarted(String(Date.now())), []);

  const v = state.values ?? {};
  const err = (f: LeadField) => state.errors?.[f];
  const border = (f: LeadField) => (err(f) ? "border-red-400" : "border-ink/15 focus:border-brand");
  const fieldError = (f: LeadField) =>
    err(f) ? (
      <p id={`${f}-error`} className="mt-1.5 text-[12.5px] font-medium text-red-600">
        {err(f)}
      </p>
    ) : null;
  const a11y = (f: LeadField) => ({ "aria-invalid": Boolean(err(f)), "aria-describedby": err(f) ? `${f}-error` : undefined });

  return (
    // key: remount with the submitted values after a failed attempt, so nothing typed is lost
    <form key={JSON.stringify(v)} action={action} noValidate className="space-y-4">
      {state.status === "error" && state.message && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-[13.5px] font-medium text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {state.message}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13.5px] font-semibold text-ink">
            Your name
          </label>
          <input id="name" name="name" autoComplete="name" required defaultValue={v.name} className={`${input} ${border("name")}`} {...a11y("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[13.5px] font-semibold text-ink">
            Mobile number
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] text-ink-muted">+91</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              placeholder="98xxx xxxxx"
              defaultValue={v.phone}
              className={`${input} ${border("phone")} pl-12`}
              {...a11y("phone")}
            />
          </div>
          {fieldError("phone")}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13.5px] font-semibold text-ink">
            Email <span className="font-normal text-ink-faint">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" defaultValue={v.email} className={`${input} ${border("email")}`} {...a11y("email")} />
          {fieldError("email")}
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-[13.5px] font-semibold text-ink">
            City <span className="font-normal text-ink-faint">(optional)</span>
          </label>
          <input id="city" name="city" autoComplete="address-level2" defaultValue={v.city ?? "Chennai"} className={`${input} border-ink/15 focus:border-brand`} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-[13.5px] font-semibold text-ink">
          What do you need help with?
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            required
            defaultValue={v.service ?? defaultService ?? ""}
            className={`${input} ${border("service")} appearance-none pr-10 ${v.service || defaultService ? "" : "text-ink-faint"}`}
            onChange={(e) => e.currentTarget.classList.toggle("text-ink-faint", !e.currentTarget.value)}
            {...a11y("service")}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
        </div>
        {fieldError("service")}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[13.5px] font-semibold text-ink">
          Anything we should know? <span className="font-normal text-ink-faint">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="E.g. I want to register a private limited company with two directors."
          defaultValue={v.message}
          className={`${input} resize-y border-ink/15 focus:border-brand`}
        />
      </div>

      {/* spam traps and context, not shown to people */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="started" value={started} />
      <input type="hidden" name="page" value={page ?? ""} />

      <Submit />
      <p className="flex items-start justify-center gap-1.5 text-center text-[12.5px] leading-relaxed text-ink-muted">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-deep" aria-hidden />
        <span>
          We only use your details to reply to you. See our{" "}
          <a href="/privacy" className="font-semibold text-brand-deep underline underline-offset-2">
            privacy policy
          </a>
          .
        </span>
      </p>
    </form>
  );
}
