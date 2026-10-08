"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { isBuilt, pillars } from "@/lib/routes";
import { LucideByName } from "@/components/ui/LucideByName";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const CTA_MESSAGE = "Hi National Filings, I'd like to talk to an expert.";

// Pillar pages in this build. "Services" becomes a dropdown of them; with none built it stays a plain link.
const servicePages = pillars.filter((p) => isBuilt(p.path));
const SERVICES_HREF = "/#services";

/** Desktop "Services" dropdown: opens on hover or click, closes on Esc, outside click or leaving it */
function ServicesMenu({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft transition md:px-2.5 lg:px-3.5 hover:bg-ink/[0.04] hover:text-ink"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {/* pt bridges the gap so moving the pointer down doesn't close the panel */}
      <div id="services-menu" hidden={!open} className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-2">
        <div className="rounded-2xl border border-ink/10 bg-white p-2 shadow-lift">
          <ul>
            {servicePages.map((p) => (
              <li key={p.id}>
                <a href={p.path} onClick={() => setOpen(false)} className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-brand-tint/60">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-tint transition group-hover:bg-white">
                    <LucideByName name={p.icon} className="h-5 w-5 text-brand-deep" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-bold leading-snug text-ink">{p.label}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-ink-muted">{p.blurb}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SERVICES_HREF}
            onClick={() => setOpen(false)}
            className="group mt-1 flex items-center justify-between rounded-xl border-t border-ink/[0.06] px-3 py-3 text-[14px] font-semibold text-brand-deep hover:text-brand-hover"
          >
            All services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </li>
  );
}

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
              {site.nav.map((n) =>
                n.href === SERVICES_HREF && servicePages.length > 0 ? (
                  <ServicesMenu key={n.href} label={n.label} />
                ) : (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft transition md:px-2.5 lg:px-3.5 hover:bg-ink/[0.04] hover:text-ink"
                  >
                    {n.label}
                  </a>
                </li>
                ),
              )}
            </ul>
          </nav>


          {/* header CTA goes to the contact page (the user's call); every other CTA opens WhatsApp */}
          <a href="/contact" onClick={close} className="btn-primary group !gap-1.5 !px-3.5 !py-2.5 !text-[13px] sm:!px-5 sm:!text-[14px] md:ml-1">
            <span className="sm:hidden">Book now</span>
            <span className="hidden sm:inline">Talk to an expert</span>
            <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:block" aria-hidden />
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
            <ul className="grid grid-cols-3 gap-2">
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

            {servicePages.length > 0 && (
              <>
                <p className="mb-2 mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">Our services</p>
                <ul className="divide-y divide-ink/5 rounded-2xl border border-ink/10">
                  {servicePages.map((p) => (
                    <li key={p.id}>
                      <a href={p.path} onClick={close} className="flex min-h-[52px] items-center gap-3 px-3.5 text-[15px] font-semibold text-ink active:bg-ink/[0.03]">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-tint">
                          <LucideByName name={p.icon} className="h-4 w-4 text-brand-deep" />
                        </span>
                        <span className="flex-1">{p.label}</span>
                        <ArrowRight className="h-4 w-4 text-ink-faint" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

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
