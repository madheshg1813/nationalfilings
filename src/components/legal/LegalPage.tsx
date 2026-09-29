import { CalendarDays, type LucideIcon } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCard } from "@/components/sections/ContactCard";
import { LegalToc } from "@/components/legal/LegalToc";

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
  const help = contact ?? {
    title: "Questions about this page?",
    text: "Message us and a member of the team will get back to you.",
    message: `Hi National Filings, I have a question about your ${title.toLowerCase()}.`,
  };

  return (
    <>
      <Header />
      <main>
        <PageHero crumb={title} eyebrow="Legal" title={title} accent={accent} intro={intro}>
          {updated && (
            <p className="chip mt-5 gap-1.5 sm:mt-6">
              <CalendarDays className="h-3.5 w-3.5 text-brand-deep" aria-hidden />
              Last updated {updated}
            </p>
          )}
        </PageHero>

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

        <ContactCard {...help} />
      </main>
      <Footer />
    </>
  );
}
