/** Small Indian tricolour (3:2) with a simplified 24-spoke Ashoka Chakra. Decorative only. */
export function IndiaFlag({ className = "h-4 w-6" }: { className?: string }) {
  const spokes = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);
  return (
    <svg viewBox="0 0 30 20" className={`${className} overflow-hidden rounded-[3px] ring-1 ring-ink/10`} aria-hidden>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <g transform="translate(15 10)" stroke="#000080" fill="none">
        <circle r="2.9" strokeWidth="0.5" />
        {spokes.map((a) => (
          <line key={a} x1="0" y1="0" x2="0" y2="-2.9" strokeWidth="0.22" transform={`rotate(${a})`} />
        ))}
      </g>
    </svg>
  );
}

/** Thin saffron / white / green band, e.g. along the top of an ID or certificate */
export function TricolourBand({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-2 overflow-hidden ${className}`} aria-hidden>
      <span className="flex-1 bg-[#FF9933]" />
      {/* off-white so the middle stripe still reads on a white card */}
      <span className="flex-1 bg-[#F3F1EC]" />
      <span className="flex-1 bg-[#138808]" />
    </div>
  );
}
