import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  // hover: styles only on devices that can hover, so taps on phones don't leave cards "stuck" in hover
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C1917",
          soft: "#44403C",
          muted: "#625D58", // AA on white and cream
          faint: "#736D68", // AA on white, cream and tints
        },
        cream: { soft: "#F5F1EA" },
        // National Filings brand (from the logo)
        brand: {
          DEFAULT: "#009A99", // logo teal: H1 accent word, large text, decoration
          deep: "#008382", // CTA buttons, eyebrows, ticks (AA contrast on white)
          hover: "#006E6D",
          tint: "#E6F5F5",
        },
        // WhatsApp brand green, only for WhatsApp buttons
        whatsapp: { DEFAULT: "#25D366", hover: "#1EBE5D" },
        lime: {
          DEFAULT: "#C9EE7C", // logo lime: highlight marker, arcs
          tint: "#F1FADF", // tag pills
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1280px" },
      boxShadow: {
        lift: "0 18px 40px -18px rgba(28,25,23,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
