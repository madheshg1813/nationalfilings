"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Conversion event for GA4 (generate_lead), also pushed to the dataLayer for Tag Manager. Once per page view. */
export function LeadTracked({ service }: { service: string }) {
  useEffect(() => {
    window.gtag?.("event", "generate_lead", { service });
    if (!window.gtag) (window.dataLayer ??= []).push({ event: "generate_lead", service });
  }, [service]);
  return null;
}
