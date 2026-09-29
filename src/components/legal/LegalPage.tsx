import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="shell max-w-3xl py-12 sm:py-20">
        <h1 className="font-display text-[2rem] font-extrabold tracking-tight text-ink sm:text-[2.75rem]">{title}</h1>
        {updated && <p className="mt-2 text-[13px] text-ink-faint">Last updated: {updated}</p>}
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-[16px] [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
