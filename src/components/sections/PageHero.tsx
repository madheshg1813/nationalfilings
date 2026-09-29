import { ChevronRight } from "lucide-react";

type Props = {
  /** Breadcrumb label for this page */
  crumb: string;
  eyebrow: string;
  title: string;
  /** Word(s) inside `title` drawn with the brand marker, as in the home page H1 */
  accent?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
};

/** Inner-page hero: breadcrumb, eyebrow, H1 with accent word, intro, on the grid backdrop with the logo's arcs. */
export function PageHero({ crumb, eyebrow, title, accent, intro, children }: Props) {
  const at = accent ? title.indexOf(accent) : -1;
  const [before, after] = at >= 0 ? [title.slice(0, at), title.slice(at + accent!.length)] : [title, ""];
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-white" aria-labelledby="page-title">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
      {/* the logo's arcs, kept faint */}
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
              {crumb}
            </li>
          </ol>
        </nav>

        <h1 id="page-title" className="mt-5 max-w-3xl sm:mt-8">
          <span className="eyebrow-text block">{eyebrow}</span>
          <span className="block font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink [text-wrap:balance] sm:text-[3rem] lg:text-[3.6rem]">
            {before}
            {at >= 0 && <span className="accent-mark">{accent}</span>}
            {after}
          </span>
        </h1>
        {intro && <p className="lead mt-4 max-w-2xl sm:mt-5">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
