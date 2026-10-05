"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { finalCta } from "@/lib/home";
import { telLink, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/**
 * Phones only. Appears once the hero buttons scroll away, hides while the final CTA is on screen.
 * The mobile menu has its own buttons, so the bar is hidden while it's open (CSS, via data-menu-open).
 */
export function MobileCtaBar({ callLabel = "Call us", message }: { callLabel?: string; message?: string } = {}) {
  const [heroGone, setHeroGone] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const tel = telLink();

  useEffect(() => {
    const hero = document.getElementById("hero-ctas");
    const cta = document.getElementById("contact");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setHeroGone(!e.isIntersecting && e.boundingClientRect.top < 0);
        if (e.target === cta) setCtaVisible(e.isIntersecting);
      }
    });
    if (hero) io.observe(hero);
    if (cta) io.observe(cta);
    return () => io.disconnect();
  }, []);

  const show = heroGone && !ctaVisible;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 backdrop-blur-md transition-transform duration-300 md:hidden [html[data-menu-open]_&]:hidden [padding-bottom:max(0.625rem,env(safe-area-inset-bottom))] ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="shell flex items-center gap-2.5 pt-2.5">
        <a
          href={whatsappLink(message ?? finalCta.whatsapp.message)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="btn-whatsapp min-w-0 flex-1 !py-3"
        >
          <WhatsAppIcon /> WhatsApp
        </a>
        <a
          href={tel ?? whatsappLink(finalCta.consult.message)}
          {...(tel ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          tabIndex={show ? 0 : -1}
          className="btn-ghost min-w-0 flex-1 !py-3"
        >
          {tel ? (
            <>
              <Phone className="h-4 w-4 max-[359px]:hidden" /> {callLabel}
            </>
          ) : (
            <>
              <span className="min-[400px]:hidden">Consultation</span>
              <span className="hidden min-[400px]:inline">Book a consultation</span>
            </>
          )}
        </a>
      </div>
    </div>
  );
}
