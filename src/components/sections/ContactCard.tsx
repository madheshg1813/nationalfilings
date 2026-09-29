import { ArrowRight, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

type Props = { title: string; text: string; message: string; showForm?: boolean };

/** Dark closing card for inner pages: WhatsApp, optional link to the call-back form, email when set. */
export function ContactCard({ title, text, message, showForm = false }: Props) {
  return (
    <section className="pb-12 sm:pb-20" aria-labelledby="contact-card-title">
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-5 py-9 sm:rounded-[2rem] sm:px-10 sm:py-12">
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-[0.12] sm:h-96 sm:w-96">
            <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
            <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#C9EE7C" />
          </svg>
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 id="contact-card-title" className="font-display text-[1.4rem] font-extrabold tracking-tight text-white sm:text-[1.9rem]">
                {title}
              </h2>
              <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-white/70 sm:text-[16px]">{text}</p>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WhatsAppIcon className="h-4 w-4" />
                Message us on WhatsApp
              </a>
              {showForm && (
                <a href="/contact" className="btn-on-ink group">
                  Request a call back
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} className="btn-on-ink">
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
