"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const CTA_MESSAGE = "Hi National Filings, I'd like to talk to an expert.";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tel = telLink();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The sheet sits outside <header>: the header's backdrop-blur would otherwise trap `position: fixed`.
  // Esc closes; lock page scroll while the mobile sheet is open; tell the sticky bar to hide
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.documentElement.toggleAttribute("data-menu-open", open);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-colors ${
          scrolled || open ? "border-ink/10" : "border-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center gap-2 sm:h-20 sm:gap-3">
          <a href="/" className="mr-auto flex shrink-0 items-center" aria-label={`${site.name} home`} onClick={close}>
            <Image
              src="/brand/logo-full.png"
              alt={`${site.name}, ${site.tagline}`}
              width={924}
              height={465}
              priority
              className="h-12 w-auto sm:h-[66px]"
            />
          </a>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft transition md:px-2.5 lg:px-3.5 hover:bg-ink/[0.04] hover:text-ink"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>


          <a
            href={whatsappLink(CTA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !gap-1.5 !px-3.5 !py-2.5 !text-[13px] sm:!px-5 sm:!text-[14px] md:ml-1"
          >
            <WhatsAppIcon className="hidden h-4 w-4 sm:block" />
            <span className="sm:hidden">Book now</span>
            <span className="hidden sm:inline">Talk to an expert</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-ink/[0.04] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </header>

      {/* Mobile sheet: links, every service, and the two ways to reach us */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto border-t border-ink/10 bg-white md:hidden"
        >
          <nav aria-label="Mobile" className="shell w-full py-3">
            <ul className="grid grid-cols-2 gap-2">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={close}
                    className="flex min-h-[48px] items-center rounded-xl border border-ink/10 px-3.5 text-[15px] font-semibold text-ink active:bg-ink/[0.04]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mb-2 mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">Get help with</p>
            <ul className="divide-y divide-ink/5 rounded-2xl border border-ink/10">
              {serviceCategories.map((c) => (
                <li key={c.slug}>
                  <a
                    href={whatsappLink(`Hi National Filings, I need help with ${c.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="flex min-h-[48px] items-center justify-between px-3.5 text-[14px] font-medium text-ink-soft active:bg-ink/[0.03]"
                  >
                    {c.name}
                    <ArrowUpRight className="h-4 w-4 text-ink-faint" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sticky bottom-0 mt-auto border-t border-ink/10 bg-white/95 py-3 backdrop-blur [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="shell flex items-center gap-2.5">
              <a href={whatsappLink(CTA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1" onClick={close}>
                <WhatsAppIcon /> WhatsApp us
              </a>
              {tel ? (
                <a href={tel} className="btn-ghost flex-1" onClick={close}>
                  <Phone className="h-4 w-4" /> Call
                </a>
              ) : (
                <a href="/#contact" className="btn-ghost flex-1" onClick={close}>
                  Contact
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
