import type { IconName } from "@/components/ui/LucideByName";

/**
 * Social proof: stats, testimonials, team and recent approvals.
 *
 * Nothing here is real yet. Every item marked `sample: true` shows on the local
 * dev server with a "Sample" tag so the design can be reviewed, and is left out of
 * the production build. To go live, replace the item with real client data and
 * delete `sample: true`. Never publish invented numbers, reviews or approvals.
 */

export const SHOW_SAMPLES =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_SAMPLES === "1";

export const visible = <T extends { sample?: boolean }>(items: T[]) =>
  items.filter((i) => !i.sample || SHOW_SAMPLES);

/* Trust bar ---------------------------------------------------------- */

export type Stat = {
  value: string;
  label: string;
  note: string;
  icon: IconName;
  /** Very short hero tick (all four must fit one line on a phone), e.g. "500+ clients" */
  tick: string;
  sample?: boolean;
};

export const stats: Stat[] = [
  { value: "500+", label: "Businesses assisted", note: "Startups, SMEs and NGOs", icon: "Users", tick: "500+ clients", sample: true },
  { value: "1,000+", label: "Registrations completed", note: "Company, GST, trademark and more", icon: "BadgeCheck", tick: "1K+ filings", sample: true },
  { value: "10+", label: "Years of experience", note: "In tax and compliance", icon: "Award", tick: "10+ years", sample: true },
  { value: "PAN India", label: "Service coverage", note: "Online, from any state", icon: "MapPinned", tick: "PAN India" },
];

/* Testimonials ------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  rating?: number;
  /** Where the review was posted. "google" shows the Google icon and a "Google review" label. */
  source?: "google" | "justdial";
  /** As shown on the platform, e.g. "2 months ago" or "Aug 2026" */
  when?: string;
  /** Link to the review or profile on that platform */
  url?: string;
  name: string;
  role: string;
  org: string;
  service: string;
  sample?: boolean;
};

/*
 * To add a real Google review, paste an entry like this at the top of the list
 * (copy the reviewer's name and words exactly as they appear on Google):
 *
 *   {
 *     quote: "Their exact review text",
 *     name: "Reviewer name",
 *     role: "Google review", org: "",
 *     service: "",                 // optional tag, e.g. "GST registration"
 *     rating: 5,
 *     source: "google",
 *     when: "2 months ago",
 *     url: "https://share.google/zjLwaTCe8tTkQ7DkT",
 *   },
 *
 * Once real reviews are added, delete the sample entries below.
 */
// Real Google reviews now come from Featurable (see lib/google-reviews.ts).
// Hand-added testimonials go here and are shown only if Google reviews can't be loaded.
export const testimonials: Testimonial[] = [];

/* Team --------------------------------------------------------------- */

export type Member = {
  name: string;
  role: string;
  credential: string;
  focus: string[];
  photo?: string; // /team/<file>.jpg (natural photo, not stock)
  sample?: boolean;
};

export const team: Member[] = [
  { name: "Founder name", role: "Founder", credential: "Add qualification, e.g. CA / CS", focus: ["Business advisory", "Tax planning"], sample: true },
  { name: "Team member", role: "Compliance expert", credential: "Add qualification", focus: ["ROC filings", "Annual compliance"], sample: true },
  { name: "Team member", role: "GST specialist", credential: "Add qualification", focus: ["GST returns", "Notices"], sample: true },
  { name: "Team member", role: "Registration consultant", credential: "Add qualification", focus: ["Company & LLP", "NGO & trust"], sample: true },
];

/* Recent approvals --------------------------------------------------- */

export type Activity = {
  title: string;
  client: string; // anonymised, e.g. "Retail trader, Pune"
  date: string; // month-level, e.g. "Sep 2026" (no fake "2 minutes ago")
  icon: IconName;
  sample?: boolean;
};

export const activity: Activity[] = [
  { title: "GST registration approved", client: "Retail trader", date: "Month YYYY", icon: "ReceiptIndianRupee", sample: true },
  { title: "Private Limited company registered", client: "Tech startup", date: "Month YYYY", icon: "Building2", sample: true },
  { title: "Trademark application filed", client: "D2C brand", date: "Month YYYY", icon: "ShieldCheck", sample: true },
  { title: "NGO 12A & 80G approved", client: "Education trust", date: "Month YYYY", icon: "HeartHandshake", sample: true },
  { title: "Import Export Code issued", client: "Spice exporter", date: "Month YYYY", icon: "Ship", sample: true },
  { title: "FSSAI licence issued", client: "Cloud kitchen", date: "Month YYYY", icon: "UtensilsCrossed", sample: true },
  { title: "LLP incorporated", client: "Design studio", date: "Month YYYY", icon: "Building2", sample: true },
  { title: "PF & ESI registration done", client: "Manufacturing unit", date: "Month YYYY", icon: "Users", sample: true },
];

/* Third-party profiles ---------------------------------------------- */

export type Platform = {
  id: string;
  name: string;
  badge: string; // only claim "Verified" if the platform actually shows it
  description: string;
  /** Star rating exactly as shown on the platform. Leave out if the platform shows none. */
  rating?: number;
  /** Two facts shown in the stats box, copied from the live profile. */
  stats: [{ value: string; label: string }, { value: string; label: string }];
  cta: string;
  url: string; // public profile link
  logo?: string; // official full-colour logo in /public/logos (never a redrawn mark)
  /** Wordmark logos (wider than tall) get a wide tile instead of a square one. */
  logoSize?: { width: number; height: number };
  sample?: boolean;
};

export const platforms: Platform[] = [
  {
    // Checked 2026-09-28 on Google: 4.9 stars, 383 reviews. The panel still shows "Own this business?",
    // so we don't claim "Verified" until the owner confirms the profile is verified in Business Profile Manager.
    id: "google",
    name: "Google Business Profile",
    badge: "Google Reviews",
    description: "Read our customer reviews and see our office address, working hours and directions on Google.",
    rating: 4.9,
    stats: [
      { value: "4.9", label: "Rating" },
      { value: "380+", label: "Google reviews" },
    ],
    cta: "View Google Profile",
    url: "https://share.google/zjLwaTCe8tTkQ7DkT",
    logo: "/logos/google.svg",
  },
  {
    // Checked 2026-09-28: the listing shows no star rating, review count or verified badge,
    // so the card shows listing facts instead. Update if ratings appear.
    id: "justdial",
    name: "Justdial Business Listing",
    badge: "Active Listing",
    description: "See our business profile, address, services and contact options on Justdial.",
    stats: [
      { value: "2012", label: "Year established" },
      { value: "Chennai", label: "Kundrathur office" },
    ],
    cta: "View Justdial Listing",
    url: "https://www.justdial.com/Chennai/National-Filings-Near-Manikandan-Nagar-Bus-Stop-Kundrathur/044PXX44-XX44-141206125444-B2Z8_BZDET",
    logo: "/logos/justdial.png", // trimmed, transparent copy of justdial-original.png
    logoSize: { width: 540, height: 139 },
  },
];
