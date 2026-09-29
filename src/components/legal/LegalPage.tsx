import { CalendarDays, ChevronRight, Mail, type LucideIcon } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LegalToc } from "@/components/legal/LegalToc";
import { site, whatsappLink } from "@/lib/site";

export type LegalSection = { id: string; title: string; body: React.ReactNode };
export type LegalHighlight = { icon: LucideIcon; title: string; text: string };

type Props = {
  title: string;
  /** Word(s) inside `title` drawn with the brand marker, as in the home page H1 */
  accent?: string;
  intro?: React.ReactNode;
  updated?: string;
  /** "At a glance" cards under the hero */
  highlights?: LegalHighlight[];
  /** Numbered sections with a table of contents. Pages without them render `children` as one block. */
  sections?: LegalSection[];
  children?: React.ReactNode;
  contact?: { title: string; text: string; message: string };
};

export function LegalPage({ title, accent, intro, updated, highlights, sections, children, contact }: Props) {
  const at = accent ? title.indexOf(accent) : -1;
  const [before, after] = at >= 0 ? [title.slice(0, at), title.slice(at + accent!.length)] : [title, ""];
  const help = contact ?? {
    title: "Questions about this page?",
    text: "Message us and a member of the team will get back to you.",
    message: `Hi National Filings, I have a question about your ${title.toLowerCase()}.`,
  };

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-ink/10 bg-white" aria-labelledby="legal-title">
          <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
          {/* the logo's lime arcs, kept faint */}
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-28 -top-20 hidden h-96 w-96 opacity-[0.35] sm:block">
            <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
            <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#E6F5F5" />
          </svg>
          <div className="shell relative pb-10 pt-6 sm:pb-16 sm:pt-10">
            <nav aria-label="Breadcrumb" className="text-[12.5px] text-ink-muted">
              <ol className="flex items-center gap-1">
                <li>
                  <a href="/" className="hover:text-ink">
                    Home
                  </a>
                </li>
                <li aria-hidden>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li aria-current="page" className="font-medium text-ink-soft">
                  {title}
                </li>
              </ol>
            </nav>

            <h1 id="legal-title" className="mt-5 max-w-3xl sm:mt-8">
              <span className="eyebrow-text block">Legal</span>
              <span className="block font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3rem] lg:text-[3.6rem]">
                {before}
                {at >= 0 && <span className="accent-mark">{accent}</span>}
                {after}
              </span>
            </h1>
            {intro && <p className="lead mt-4 max-w-2xl sm:mt-5">{intro}</p>}
            {updated && (
              <p className="chip mt-5 gap-1.5 sm:mt-6">
                <CalendarDays className="h-3.5 w-3.5 text-brand-deep" aria-hidden />
                Last updated {updated}
              </p>
            )}
          </div>
        </section>

        {highlights && highlights.length > 0 && (
          <section aria-labelledby="glance-title" className="bg-cream-soft/60 py-8 sm:py-12">
            <div className="shell">
              <h2 id="glance-title" className="eyebrow-text">
                At a glance
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {highlights.map(({ icon: Icon, title: t, text }) => (
                  <li key={t} className="card p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand-deep">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="mt-4 font-display text-[15px] font-bold text-ink sm:text-base">{t}</p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <div className="shell py-10 sm:py-16">
          {sections && sections.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-14">
              <LegalToc items={sections.map((s) => ({ id: s.id, title: s.title }))} />
              <div className="min-w-0 max-w-3xl">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-28 border-b border-ink/10 py-8 first:pt-0 last:border-0">
                    <h2 id={`${s.id}-title`} className="flex items-start gap-3 font-display text-[1.25rem] font-bold leading-snug tracking-tight text-ink sm:text-[1.5rem]">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-tint text-[12px] font-bold text-brand-deep sm:h-8 sm:w-8 sm:text-[13px]">
                        {i + 1}
                      </span>
                      {s.title}
                    </h2>
                    <div className="legal-prose mt-4 sm:pl-11">{s.body}</div>
                  </section>
                ))}
              </div>
            </div>
          ) : (
            <div className="legal-prose mx-auto max-w-3xl">{children}</div>
          )}
        </div>

        <section className="pb-12 sm:pb-20" aria-labelledby="legal-help-title">
          <div className="shell">
            <div className="relative overflow-hidden rounded-3xl bg-ink px-5 py-9 sm:rounded-[2rem] sm:px-10 sm:py-12">
              <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-[0.12] sm:h-96 sm:w-96">
                <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
                <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#C9EE7C" />
              </svg>
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 id="legal-help-title" className="font-display text-[1.4rem] font-extrabold tracking-tight text-white sm:text-[1.9rem]">
                    {help.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-white/70 sm:text-[16px]">{help.text}</p>
                </div>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  <a href={whatsappLink(help.message)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <WhatsAppIcon className="h-4 w-4" />
                    Message us on WhatsApp
                  </a>
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
      </main>
      <Footer />
    </>
  );
}
