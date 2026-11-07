import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A8 · GST Consultant in Mangadu (/chennai/gst-consultant-in-mangadu).
 * Primary keyword: "gst consultant in mangadu". We have no office in Mangadu; clients work with us over WhatsApp and email,
 * and can visit our Kundrathur office, which is in the same taluk.
 * Angle: the wedding and function trade around the Kamakshi Amman temple (marriage halls, caterers, florists,
 * photographers, decorators and event managers) and builders selling flats in the growing municipality. The page covers
 * hall rent vs hall-with-food packages, outdoor catering credit after 1 Nov 2026, composite vs mixed wedding packages, tax on
 * booking advances, and GST on under-construction homes. Kept distinct from the Mangadu company page (P1-A8) and from the
 * Chennai GST cluster pages.
 *
 * Facts checked (Nov 2026):
 * - Outdoor catering at premises other than specified premises (item 7(iv), heading 9963, Notification 11/2017-CT(R)) and
 *   composite supply of outdoor catering together with renting of premises for a function (item 7(v)) are at 2.5% CGST +
 *   2.5% SGST. From 1 Nov 2026, Notification 06/2026-CT(R) dated 27 Oct 2026 lets the caterer take credit only on outdoor
 *   catering bought from another caterer (same line of business), capped at tax at 5%; no other credit. Its own illustration
 *   is a wedding function. https://www.caalley.com/gst26/cgst-rate-notification-06.pdf ,
 *   https://calcguru.in/tax-updates/gst-hotel-restaurant-catering-itc-ev-transport-5-percent-1-november-2026/
 * - At specified premises (hotels where any unit's tariff exceeded ₹7,500 a day in the previous year), catering and banquets
 *   are 18% with credit. https://disytax.com/?p=24755
 * - Hall hired out without food: 18% with credit (secondary sources, consistent). https://disytax.com/?p=24755
 * - Composite supply (s.2(30)) is taxed at the rate of its principal supply; mixed supply (s.2(74)) at the highest rate in
 *   the bundle (s.8 CGST Act).
 * - Advances: for services, time of supply is the earliest of invoice, provision or receipt of payment (s.13), so a booking
 *   advance is taxable in the month received; receipt voucher (Rule 50), refund voucher on cancellation (Rule 51). Goods
 *   advances are relieved by Notification 66/2017-CT. https://tallysolutions.com/gst/when-is-gst-payable-on-advance-payments-rules-for-goods-vs-services/
 * - Fresh flowers and natural garlands (HSN 0603) are nil-rated; artificial flowers 18%. Flower decoration supplied as a
 *   service is taxable (rate not stated on the page). https://busy.in/gst-rates/flowers/
 * - Under-construction residential apartments: 1% (affordable) or 5% (others), without input tax credit, tax paid in cash;
 *   affordable = carpet area up to 60 sq m in metropolitan cities or 90 sq m elsewhere and gross amount up to ₹45 lakh;
 *   80% of inputs from registered suppliers, shortfall taxed at 18% under reverse charge; no GST where the full price is
 *   received after the completion certificate or first occupation. Rates unchanged by GST 2.0 (22 Sep 2025).
 *   https://www.taxmann.com/post/blog/gst-on-real-estate/ (updated 1 Sep 2026), https://disytax.com/gst-for-builders/
 * - Registration thresholds: ₹20 lakh for services, ₹40 lakh only for exclusive goods suppliers (as on gst-registration.ts).
 * Local facts reused from mangadu.ts JSDoc: Mangadu Municipality (2021), Kundrathur taluk, Kancheepuram district, Kamakshi
 * Amman temple where devotees pray for marriage, annexed villages incl. Malayambakkam and Kozhumanivakkam. No claim made
 * about the number of halls. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a hall or catering business in Mangadu and need help with GST.";

export const gstMangaduPage: LicencePageData = {
  id: "P2-A8",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Mangadu, Chennai | National Filings",
    description: "GST consultant in Mangadu for marriage halls, caterers, florists and builders. Hall and food packages, booking advances and returns filed right.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Mangadu, ", accent: "Muhurtham to Return" },
    sub: "Families come to Mangadu to pray for a wedding, and many come back to hold one. Halls, caterers, florists and photographers here take advances months ahead. We make sure each booking is billed and taxed the right way.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "UtensilsCrossed",
    kicker: "Mangadu, Kancheepuram district",
    title: "GST Registration Certificate",
    line: "Your Mangadu Business",
    stamp: "GSTIN issued",
    chips: ["Hall and food packages", "Advances taxed on time", "Builders at 1% or 5%"],
    steps: ["Booking", "Advance", "Invoice", "Return", "Settle"],
  },

  benefitsSection: {
    title: "Why Mangadu's function trade needs careful GST billing",
    lead: "One wedding can involve a hall, a kitchen, flowers and a camera crew. Each is taxed differently, and the rate can change with how you package them.",
    cta: {
      title: "Selling hall and food as one package?",
      sub: "Send us a sample booking receipt. We'll tell you which rate applies and what credit you can keep.",
      message: "Hi National Filings, I run a marriage hall in Mangadu. Can you check how I should bill GST on my packages?",
    },
  },
  benefits: [
    { icon: "Hotel", title: "Hall rent billed at the right rate", line: "Hall-only bookings and hall-with-food packages are taxed differently." },
    { icon: "ChefHat", title: "Catering credit after 1 November", line: "The new limited credit for caterers applied correctly in each return." },
    { icon: "Wallet", title: "Advances taxed in the right month", line: "Booking money for services is taxed when received, not on the function day." },
    { icon: "Layers", title: "Packages priced clearly", line: "Wedding bundles structured so they don't fall into the highest rate." },
    { icon: "Leaf", title: "Flowers sorted from decoration", line: "Fresh flower sales kept apart from taxable decoration work." },
    { icon: "RefreshCw", title: "Cancellations handled", line: "Refund vouchers issued so tax on returned advances is adjusted." },
    { icon: "HardHat", title: "Builder rates checked", line: "1% or 5% on flats decided by carpet area and price, not guesswork." },
    { icon: "MessageCircle", title: "No trips into the city", line: "Send bills on WhatsApp, or see us in Kundrathur, in the same taluk." },
  ],

  applicantsSection: {
    title: "Mangadu businesses we handle GST for",
    lead: "Most of our Mangadu clients earn from weddings and functions, and the rest from building homes in the new parts of the municipality.",
  },
  applicants: [
    { icon: "Hotel", title: "Marriage and party halls", line: "Hall rent, hall-with-food packages and booking advances." },
    { icon: "ChefHat", title: "Outdoor caterers", line: "Cooking at the hall, the home or a pandal for functions." },
    { icon: "Leaf", title: "Florists and garland makers", line: "Exempt fresh flowers, taxable stage and hall decoration." },
    { icon: "Eye", title: "Wedding photographers and videographers", line: "Taxable services, often booked with an advance." },
    { icon: "Handshake", title: "Event managers and decorators", line: "Bundled wedding services that need careful invoicing." },
    { icon: "ShoppingBag", title: "Pooja item and gift sellers", line: "Shops near the temple selling goods at mixed rates." },
    { icon: "HardHat", title: "Builders and promoters", line: "Flats sold before completion, at 1% or 5% without credit." },
    { icon: "Home", title: "Owners renting out commercial space", line: "Shop and hall rent that counts towards the turnover limit." },
  ],

  opportunities: {
    eyebrow: "The function economy",
    title: "Four Mangadu trades, one wedding, different GST rules",
    intro: "A single family function in Mangadu can bring in a hall owner, a caterer, a florist and, nearby, a builder whose flats the family may buy next. Each of them files GST differently.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Hotel", title: "Marriage halls", image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1600&q=90", alt: "Couple at a wedding ritual on a flower-decked stage inside a hall with a chandelier", credit: "AMISH THAKKAR / Unsplash" },
      { icon: "ChefHat", title: "Function catering", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=90", alt: "Buffet line of silver chafing dishes filled with food", credit: "Saile Ilyas / Unsplash" },
      { icon: "Leaf", title: "Florists and garlands", image: "https://images.unsplash.com/photo-1761753087846-c384ab3b085b?auto=format&fit=crop&w=1600&q=90", alt: "Elderly man making flower garlands at a market stall", credit: "Mayuri Kasurde / Unsplash" },
      { icon: "HardHat", title: "Builders", image: "https://images.unsplash.com/photo-1689574666594-079698f917bc?auto=format&fit=crop&w=1600&q=90", alt: "Aerial view of apartment towers under construction on the edge of a city", credit: "Auro Realty / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Wedding packages and GST",
    title: "How a Mangadu wedding booking is taxed",
    lead: "The rate depends on what you supply and how you bill it. These are the cases we see most often in halls and kitchens here.",
    items: [
      { icon: "Hotel", label: "18% with credit", title: "Hall only", line: "The family hires the hall and brings its own caterer. The hall rent is taxed on its own." },
      { icon: "ChefHat", label: "5%, limited credit", title: "Hall with food", line: "Outdoor catering together with the hall for a function, outside specified premises, is one composite supply.", highlight: true },
      { icon: "UtensilsCrossed", label: "5%, limited credit", title: "Catering only", line: "Food cooked and served at someone else's hall or home. From 1 Nov 2026, only credit on catering bought from another caterer is allowed." },
      { icon: "Layers", label: "Highest rate in the bundle", title: "Everything for one price", line: "Hall, food, photos and decoration that aren't naturally bundled can become a mixed supply, taxed at the highest rate." },
    ],
  },

  documentsSection: {
    title: "What we need from your Mangadu business",
    lead: "Send these on WhatsApp. For halls and caterers, the booking register is the most useful document you have.",
  },
  documents: [
    { icon: "IdCard", title: "Owner and premises", items: ["PAN and Aadhaar of the owner, partners or directors", "Property tax receipt or electricity bill for the hall or kitchen", "Rent agreement and owner's consent, if rented"], hint: "Older bills may still show Malayambakkam or Kozhumanivakkam. We match the address to the bill." },
    { icon: "CalendarCheck", title: "Bookings and advances", items: ["Booking register or diary", "Receipts given for advances", "Sample package price list"], hint: "Advances for services are taxed when received, so we start from the receipt dates." },
    { icon: "HardHat", title: "For builders", items: ["RERA registration of the project", "Carpet area and price of each flat", "Purchase bills with supplier GSTINs"], hint: "These decide between 1% and 5%, and whether the 80% registered-supplier rule is met." },
  ],
  documentsNote: {
    title: "Not sure your package bill is right?",
    sub: "Send a photo of one booking receipt. We'll point out the rate, the advance treatment and anything missing on it.",
    message: "Hi National Filings, can you check a booking bill from my Mangadu hall or catering business?",
  },

  processSection: {
    title: "How we take on GST for a Mangadu business",
    lead: "Everything happens over WhatsApp and email. You can also meet us at our Kundrathur office, a short drive away in the same taluk.",
    cta: {
      title: "Start before the next season",
      sub: "Wedding months bring a rush of advances. Getting the billing right before then saves rework later.",
      message: "Hi National Filings, I'd like to set up GST properly for my Mangadu business before the wedding season.",
    },
  },
  steps: [
    { title: "Understand your bookings", time: "Day 1", sub: "What you supply, how you price packages and how advances come in." },
    { title: "Fix the rate and format", time: "1-2 days", sub: "Invoice and receipt formats set for hall, food, flowers or flats." },
    { title: "Register or update GSTIN", time: "A few working days", sub: "New registration, or the right service codes added to an existing one." },
    { title: "Track advances and refunds", time: "Every month", sub: "Advances taxed when received, refunds adjusted when bookings are cancelled." },
    { title: "File returns", time: "Monthly or quarterly", sub: "GSTR-1 and GSTR-3B filed, with credit limited where the law requires." },
  ],
  processNote: "Timelines are estimates. Officer queries on a new registration can add time.",

  mistakesSection: {
    title: "GST mistakes we fix for Mangadu halls, caterers and builders",
    lead: "Most of these come from billing a wedding as one lump sum, or treating an advance as untaxed until the function day.",
  },
  mistakes: [
    { icon: "Clock", title: "Tax paid only after the function", problem: "A hall takes an advance in March for a June wedding and pays GST in June.", fix: "We tax the advance in the month it arrives and adjust the balance on the final bill." },
    { icon: "Calculator", title: "Full credit claimed by a caterer", problem: "A caterer at 5% claims credit on gas, vessels and groceries.", fix: "We limit credit to catering bought from other caterers, capped as the new rule says." },
    { icon: "Layers", title: "One lump sum for everything", problem: "Hall, food, photos and decoration billed as one price, so the whole amount risks the highest rate.", fix: "We itemise packages so each part is taxed at its own rate." },
    { icon: "HardHat", title: "Builder claiming input credit", problem: "A builder selling flats at 1% or 5% takes credit on cement and steel.", fix: "We keep credit out of these projects and check the 80% registered-supplier rule each year." },
  ],

  costSection: {
    title: "What our GST fee for a Mangadu business depends on",
    lead: "There is no government fee for GST registration. Our fee depends on the volume of bookings and the work involved, agreed in writing first.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us your trade, how many bookings or sales you have a month and whether you file monthly or quarterly.",
      message: "Hi National Filings, can I get a GST quote for my Mangadu business?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "GST registration", line: "No government fee. Our fee covers the application and any officer query about your hall or catering premises.", highlight: true },
    { icon: "CalendarClock", label: "Monthly or quarterly", title: "Return filing", line: "Depends on filing frequency and how many bookings or invoices you raise." },
    { icon: "Wallet", label: "In the wedding season", title: "Advance tracking", line: "More work when many advances and cancellations come in." },
    { icon: "Headset", label: "Quoted upfront", title: "Builder work and notices", line: "Project-wise checks for builders and notice replies quoted separately." },
  ],

  compliance: {
    eyebrow: "Beyond GST",
    title: "Other licences Mangadu function businesses need",
    lead: "GST is one part of running a hall or kitchen. These usually come up alongside it.",
    items: [
      { icon: "ChefHat", label: "For food businesses", title: "FSSAI licence or registration", line: "Needed by caterers and halls with kitchens, depending on turnover." },
      { icon: "ScrollText", label: "From the municipality", title: "Trade licence", line: "Issued by Mangadu Municipality for trades carried on in its limits." },
      { icon: "HardHat", label: "For builders", title: "RERA registration", line: "Projects above the size limits must be registered before sale." },
      { icon: "Users", label: "When you hire", title: "PF and ESI", line: "Cooks, servers and site staff bring PF and ESI duties once headcount crosses the limits." },
    ],
  },

  reasonsTitle: "Why Mangadu businesses choose National Filings for GST",
  reasons: [
    { icon: "ChefHat", title: "We know function billing", line: "Halls, caterers, florists and photographers, and how they bundle." },
    { icon: "Percent", title: "Up to date on rates", line: "Including the caterer credit change from 1 November 2026." },
    { icon: "MapPinned", title: "Office in the same taluk", line: "Our Kundrathur office is close by if you'd rather meet." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Agreed before the wedding season starts, not after the bookings come in." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send receipts and booking lists from the hall office." },
    { icon: "CalendarCheck", title: "Season-ready reminders", line: "Due dates tracked so a busy month doesn't mean a late return." },
  ],

  faqTitle: "GST in Mangadu: questions from halls, caterers and builders",
  faqs: [
    { q: "What GST applies when I rent out my Mangadu marriage hall without food?", a: "Renting a hall on its own is taxed at 18%, and you can claim input tax credit on your costs. If the family brings its own caterer, the caterer bills them separately." },
    { q: "I give the hall and the food together. What rate applies?", a: "Outdoor catering supplied together with renting of premises for a function is treated as one composite supply. Outside specified premises, which covers ordinary marriage halls, it is taxed at 5%. Credit is not allowed, except, from 1 November 2026, on catering you buy from another caterer, capped at 5%." },
    { q: "A family paid an advance six months before the wedding. When is GST due?", a: "For services such as hall rent and catering, tax is due when the advance is received, even if the function is months away. Give a receipt voucher, pay tax on the advance in that month's return, and adjust it on the final bill." },
    { q: "What if the booking is cancelled and I return the advance?", a: "Issue a refund voucher against the original receipt voucher. The tax already paid on the advance is then adjusted in your return, so you don't pay tax on money you have returned." },
    { q: "Do florists in Mangadu need to charge GST?", a: "Fresh flowers and natural garlands are nil-rated, so a florist selling only fresh flowers usually doesn't charge GST on them. Stage or hall decoration is a taxable service. Once that work, added to your flower sales, crosses the ₹20 lakh limit, you need to register." },
    { q: "What GST does a builder in Mangadu charge on a flat sold before completion?", a: "1% for an affordable flat and 5% for other flats, both without input tax credit. Affordable means a carpet area of up to 60 sq m in a metropolitan city or 90 sq m elsewhere, and a price of up to ₹45 lakh. We check which carpet area limit applies to your project. These rates did not change in September 2025." },
    { q: "Is GST payable on a flat sold after the completion certificate?", a: "No. If the full price is received after the completion certificate is issued, or after first occupation if that comes earlier, the sale is not taxed under GST. Stamp duty still applies on the sale deed." },
  ],

  related: nearbyAreas("P2-A8"),
  relatedTitle: "GST consultants in areas near Mangadu",

  final: {
    title: "Get your Mangadu business billing GST correctly",
    sub: "Message us with what you do and how you take bookings. We'll set the rates, receipts and returns, and quote our fee upfront.",
    message: "Hi National Filings, I'm in Mangadu and I'd like help with GST for my business.",
  },
  catalogue: ["GST registration for halls and caterers in Mangadu", "GST return filing in Mangadu", "GST for builders in Mangadu"],
};
