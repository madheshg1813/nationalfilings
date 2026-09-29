import {
  BadgeCheck,
  Building2,
  Calculator,
  FileCheck2,
  FileText,
  IndianRupee,
  Landmark,
  Percent,
  ReceiptIndianRupee,
  ShieldCheck,
  Stamp,
  type LucideIcon,
} from "lucide-react";

/**
 * Soft background texture for a centred hero: faint filing icons scattered at random
 * (fixed seed, so server and browser render the same layout), including behind the text.
 * A jittered grid keeps the scatter even without looking aligned.
 * The centre is dimmed, not cleared, so the headline stays crisp. Decorative only.
 */

const ICONS: LucideIcon[] = [
  ReceiptIndianRupee,
  IndianRupee,
  FileText,
  Building2,
  ShieldCheck,
  Percent,
  Landmark,
  BadgeCheck,
  FileCheck2,
  Calculator,
  Stamp,
];

// Small deterministic PRNG (mulberry32)
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Mark = { Icon: LucideIcon; left: number; top: number; size: number; rotate: number; teal: boolean; phone: boolean };

const COLS = 7;
const ROWS = 4;

const MARKS: Mark[] = (() => {
  const r = rng(20260928);
  const out: Mark[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (r() < 0.12) continue; // leave a few gaps so it never reads as a grid
      out.push({
        Icon: ICONS[Math.floor(r() * ICONS.length)],
        left: ((col + 0.1 + r() * 0.8) / COLS) * 100,
        top: ((row + 0.1 + r() * 0.8) / ROWS) * 100,
        size: 34 + Math.round(r() * 86), // 34–120px on desktop
        rotate: Math.round(r() * 44 - 22),
        teal: r() < 0.28,
        phone: (col + row) % 2 === 0, // checkerboard subset on phones
      });
    }
  }
  return out;
})();

export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_60%_55%_at_50%_48%,rgba(0,0,0,0.35)_20%,#000_80%)] [-webkit-mask-image:radial-gradient(ellipse_60%_55%_at_50%_48%,rgba(0,0,0,0.35)_20%,#000_80%)]"
    >
      {MARKS.map(({ Icon, left, top, size, rotate, teal, phone }, i) => (
        <Icon
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 ${phone ? "" : "hidden md:block"} ${
            teal ? "text-brand/[0.15]" : "text-ink/[0.065]"
          }`}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `clamp(30px, ${(size / 12).toFixed(2)}vw, ${size}px)`,
            height: `clamp(30px, ${(size / 12).toFixed(2)}vw, ${size}px)`,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
          strokeWidth={1.1}
        />
      ))}
    </div>
  );
}
