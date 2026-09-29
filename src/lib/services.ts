import type { IconName } from "@/components/ui/LucideByName";

export type PreviewKind =
  | "incorporation"
  | "gst"
  | "income-tax"
  | "tds"
  | "ngo"
  | "licenses"
  | "trademark"
  | "import-export"
  | "labour"
  | "roc";

export type ServiceCategory = {
  slug: string;
  name: string;
  icon: IconName;
  preview: PreviewKind;
  /** Large card on top of the grid */
  featured?: boolean;
  /** "Popular" badge on the card */
  popular?: boolean;
  /** Shown as chips on featured cards */
  items?: string[];
  /** Three feature rows on regular cards (desktop only) */
  features: [string, string, string];
  featureIcons: [IconName, IconName, IconName];
};

/**
 * Categories only (full service detail lives on each category page later).
 * Source: NF Service Data.pdf
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "business-registration",
    popular: true,
    name: "Business Registration",
    icon: "Building2",
    preview: "incorporation",
    featured: true,
    items: [
      "Private Limited",
      "LLP",
      "One Person Company",
      "Partnership",
      "Proprietorship",
      "Section 8",
      "Nidhi Company",
    ],
    features: ["Right structure advice", "Name approval", "Incorporation certificate"],
    featureIcons: ["Compass", "SearchCheck", "Award"],
  },
  {
    slug: "gst",
    popular: true,
    name: "GST Services",
    icon: "ReceiptIndianRupee",
    preview: "gst",
    featured: true,
    items: [
      "GST registration",
      "Return filing",
      "ITC management",
      "Reconciliation",
      "Notice reply",
      "Amendment & cancellation",
    ],
    features: ["Monthly or quarterly returns", "Input tax credit", "Notice support"],
    featureIcons: ["CalendarCheck", "ArrowLeftRight", "MessageSquareText"],
  },
  {
    slug: "income-tax",
    popular: true,
    name: "Income Tax",
    icon: "IndianRupee",
    preview: "income-tax",
    features: ["ITR filing", "Tax planning", "Notice & refund support"],
    featureIcons: ["FileCheck2", "PiggyBank", "MailCheck"],
  },
  {
    slug: "tds",
    name: "TDS Compliance",
    icon: "Percent",
    preview: "tds",
    features: ["TAN registration", "Quarterly TDS returns", "Correction statements"],
    featureIcons: ["IdCard", "CalendarRange", "FilePen"],
  },
  {
    slug: "ngo-trust",
    name: "NGO & Trust",
    icon: "HeartHandshake",
    preview: "ngo",
    features: ["Trust & society registration", "12A & 80G approval", "CSR registration"],
    featureIcons: ["Landmark", "BadgeCheck", "Handshake"],
  },
  {
    slug: "licenses",
    name: "Government Licenses",
    icon: "FileBadge",
    preview: "licenses",
    features: ["Udyam MSME", "FSSAI licence", "Shop & trade licence"],
    featureIcons: ["Factory", "UtensilsCrossed", "Store"],
  },
  {
    slug: "trademark",
    popular: true,
    name: "Trademark & Certifications",
    icon: "ShieldCheck",
    preview: "trademark",
    features: ["Trademark registration", "Objection reply", "Copyright & ISO"],
    featureIcons: ["Tag", "Scale", "Award"],
  },
  {
    slug: "import-export",
    name: "Import Export",
    icon: "Ship",
    preview: "import-export",
    features: ["IEC registration", "DGFT services", "Export scheme help"],
    featureIcons: ["Globe", "FileStack", "TrendingUp"],
  },
  {
    slug: "labour",
    name: "Labour Compliance",
    icon: "Users",
    preview: "labour",
    features: ["PF registration", "ESI registration", "Employer compliance"],
    featureIcons: ["Wallet", "Stethoscope", "ClipboardCheck"],
  },
  {
    slug: "mca-roc",
    name: "MCA & ROC Filings",
    icon: "FileSignature",
    preview: "roc",
    features: ["Digital signature (DSC)", "Annual ROC returns", "Director changes"],
    featureIcons: ["KeyRound", "CalendarClock", "UserCog"],
  },
];

export const featuredCategories = serviceCategories.filter((c) => c.featured);
export const regularCategories = serviceCategories.filter((c) => !c.featured);
