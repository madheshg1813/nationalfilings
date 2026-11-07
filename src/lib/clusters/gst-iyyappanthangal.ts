import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A11 · GST Consultant in Iyyappanthangal (/chennai/gst-consultant-in-iyyappanthangal).
 * Primary keyword: "gst consultant in iyyappanthangal". We have no office here; clients work with us over WhatsApp and email,
 * or visit our Kundrathur office.
 * Angle: counter businesses along Mount Poonamallee Road: restaurants, cloud kitchens, bakeries and sweet shops, mobile and
 * electronics shops, salons. Highlights cover which GST treatment applies to which kind of sale. General GST registration,
 * return and notice wording lives on the P2-C* cluster pages.
 *
 * Local facts (reused from the verified P1-A11 JSDoc): Ayyapanthangal village panchayat, Kundrathur taluk, Kancheepuram
 * district; PIN 600056; on Mount Poonamallee Road, with a bus terminus; Iyyappanthangal metro station on the Poonamallee to
 * Vadapalani stretch of Phase 2, opened 11 October 2026.
 *
 * Facts checked (Nov 2026):
 * - Restaurant service outside "specified premises" is 5% without input tax credit; GST 2.0 (Notification 15/2025-CT(R), from
 *   22 Sep 2025) did not change it; a standalone restaurant cannot opt for 18% with ITC, which is only for restaurants in
 *   specified premises (hotels with a room above ₹7,500 a day, or a declared property). (hnallp.com GST 2.0 hospitality FAQs
 *   21.09.2025, Q6, Q10, Q11; busy.in/gst/taxability-of-restaurants-under-gst-composition-scheme; taxguru.in)
 * - Notification 06/2026-CT(R), 27 Oct 2026, in force 1 Nov 2026 (gazette text read: caalley.com/gst26/cgst-rate-notification-06.pdf;
 *   summary calcguru.in): amends only the ITC condition (column 5) of entry 7 of Notification 11/2017-CT(R), so rates stay.
 *   Restaurant service other than at specified premises (item ii): credit still barred on goods and services used, except
 *   input service in the same line of business, i.e. restaurant service procured from another restaurant service provider
 *   other than at specified premises (no cap stated). Outdoor catering (items iv and v): same-line credit allowed only for
 *   catering bought from another caterer, capped at tax paid at 2.5% CGST. The page says restaurants still can't claim credit
 *   on provisions, rent, gas or app commission, and mentions the narrow same-line exception.
 * - Section 9(5): from 1 Jan 2022 (Notification 17/2021-CT(R)) the e-commerce operator pays the 5% on restaurant services
 *   supplied through it, even for unregistered restaurants; the restaurant still counts these sales in its own aggregate
 *   turnover (Circular 167/23/2021-GST, gstcouncil.gov.in/sites/default/files/2024-06/circular-167-2021-gst.pdf).
 * - The restaurant reports app sales in GSTR-1 Table 14 and GSTR-3B Table 3.1.1(ii), without paying tax on them; section 52
 *   TCS does not apply to section 9(5) supplies. (casahuja.com/2026/09/gst-on-restaurant-cloud-kitchen-sales.html; taxguru.in)
 * - Cloud kitchens and central kitchens supply restaurant service; ice cream parlours selling ready ice cream supply goods
 *   (Circular 164/20/2021-GST).
 * - Bakery: pre-packaged items sold over the counter are goods, taxed by HSN with ITC; food prepared and served at the outlet
 *   is restaurant service. Cakes, pastries and biscuits moved from 18% to 5% from 22 Sep 2025. (blog.petpooja.com new GST rates
 *   on food; smestreet.in GST 2.0 and bakery MSMEs; busy.in/gst-rates/food-business)
 * - Mobile phones stay at 18% after GST 2.0; air conditioners and televisions moved from 28% to 18%. (business-standard.com,
 *   04 Sep 2025; angelone.in GST 2.0 electronics)
 * - Beauty and physical well-being services (salons, spas, gyms) cut from 18% with ITC to 5% without ITC from 22 Sep 2025
 *   (hnallp.com GST 2.0 hospitality FAQs, Q23).
 * - Second-hand goods: Rule 32(5) CGST Rules lets a dealer who took no ITC on the purchase pay GST on the margin only.
 * - Registration thresholds in Tamil Nadu ₹20 lakh (services) and ₹40 lakh (goods); no government fee; composition for
 *   restaurants at 5% of turnover within the ₹1.5 crore limit, no ITC (as on the P2-C1 JSDoc; busy.in). Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a food business in Iyyappanthangal and need help with GST.";

export const gstIyyappanthangalPage: LicencePageData = {
  id: "P2-A11",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Iyyappanthangal | National Filings",
    description: "GST consultant in Iyyappanthangal for restaurants, cloud kitchens, bakeries, mobile shops and salons. App sales, rates and returns sorted every month.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Iyyappanthangal, ", accent: "Dine-In to Delivery" },
    sub: "A hotel on Mount Poonamallee Road can bill at the table, pack parcels at the counter and send orders out through food apps, all on the same day. Each of those sales is treated differently under GST. We keep your returns straight.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "UtensilsCrossed",
    kicker: "Iyyappanthangal, Chennai",
    title: "GSTR-1 Filed",
    line: "Your Iyyappanthangal Business",
    stamp: "App sales split",
    chips: ["Table 14 matched", "Restaurant credit checked", "HSN codes updated"],
    steps: ["Bills", "App reports", "GSTR-1", "GSTR-3B", "Filed"],
  },

  benefitsSection: {
    title: "GST work built around Iyyappanthangal's counters and kitchens",
    lead: "Most businesses on this stretch sell to walk-in customers and app users, not to other companies. Their GST problems come from mixed billing, not from big invoices.",
    cta: {
      title: "Selling on food apps and at the counter?",
      sub: "Send us one month's POS summary and the app payout statements. We'll show you which sales you pay tax on and which the app pays.",
      message: "Hi National Filings, my restaurant in Iyyappanthangal sells on food apps and at the counter. Can you check how my GST is being filed?",
    },
  },
  benefits: [
    { icon: "Soup", title: "App orders kept apart", line: "Swiggy and Zomato style sales reported, but not taxed twice." },
    { icon: "UtensilsCrossed", title: "Dine-in and parcel billing", line: "Restaurant sales billed at the right rate, with no credit claimed by mistake." },
    { icon: "ChefHat", title: "Cloud kitchens covered", line: "Delivery-only kitchens treated as restaurants, the way the law treats them." },
    { icon: "Package", title: "Bakery counters sorted", line: "Packaged items and food served at tables billed under the right heads." },
    { icon: "ShoppingBag", title: "Mobile shop stock", line: "Phones, accessories, repairs and used handsets each billed correctly." },
    { icon: "Percent", title: "Rates after GST 2.0", line: "Salon services and many food items changed rate in September 2025." },
    { icon: "MessageCircle", title: "Run on WhatsApp", line: "Send bills and payout reports from the shop. No trips across town." },
    { icon: "FileWarning", title: "Notices handled", line: "Mismatch notices between your returns and the app's returns answered with records." },
  ],

  applicantsSection: {
    title: "Iyyappanthangal businesses we handle GST for",
    lead: "From the bus terminus end to the new metro station, these are the trades that send us their bills each month.",
  },
  applicants: [
    { icon: "UtensilsCrossed", title: "Restaurants and mess halls", line: "Meals, tiffin and parcel counters serving office and college crowds." },
    { icon: "ChefHat", title: "Cloud kitchens", line: "Delivery-only kitchens taking most orders through food apps." },
    { icon: "Coffee", title: "Bakeries and sweet shops", line: "Cakes, puffs, sweets and savouries, some with a few tables inside." },
    { icon: "Soup", title: "Tea stalls and juice shops", line: "Small counters whose turnover has quietly crossed the limit." },
    { icon: "ShoppingBag", title: "Mobile and accessory shops", line: "New handsets, chargers, covers and recharge counters." },
    { icon: "Zap", title: "Electronics and repair shops", line: "TVs, appliances and phone repairs, often under one roof." },
    { icon: "Users", title: "Salons and beauty parlours", line: "Hair, skin and grooming services for men and women." },
    { icon: "Store", title: "Food outlets opening a second branch", line: "Owners adding another counter in a new area." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "What Iyyappanthangal sells across its counters",
    intro: "Commuters off the buses and the new metro, students and families from the newer flats keep the shops on Mount Poonamallee Road busy late into the evening. That means a lot of small bills, and a lot of GST to get right.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "UtensilsCrossed", title: "Restaurants and tiffin centres", image: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=1600&q=90", alt: "Crisp dosa on a banana leaf in a steel tray, with sambar and chutney", credit: "Zoshua Colah / Unsplash" },
      { icon: "ChefHat", title: "Cloud kitchens and parcels", image: "https://images.unsplash.com/photo-1597974828431-9078248d8cc9?auto=format&fit=crop&w=1600&q=90", alt: "Hands holding a paper food box and two takeaway containers", credit: "Agenlaku Indonesia / Unsplash" },
      { icon: "Coffee", title: "Bakeries and sweet shops", image: "https://images.unsplash.com/photo-1782033032439-a2c656ca2f59?auto=format&fit=crop&w=1600&q=90", alt: "Glass display case filled with sweets and pastries", credit: "Bonala Yellender / Unsplash" },
      { icon: "ShoppingBag", title: "Mobile shops and repairs", image: "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?auto=format&fit=crop&w=1600&q=90", alt: "Technician repairing an opened smartphone with its circuit board exposed", credit: "Clint Bustrillos / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "One shop, several GST treatments",
    title: "How GST applies to each kind of sale on this road",
    lead: "Two shops side by side can pay GST in very different ways. This is where we start when we look at a new client's billing.",
    items: [
      { icon: "UtensilsCrossed", label: "Dine-in and parcels", title: "Restaurant service at 5%, almost no credit", line: "A standalone restaurant or cloud kitchen charges 5% and cannot claim credit on provisions, rent or app commission. From 1 November 2026 the one exception is food service bought from another restaurant." },
      { icon: "Soup", label: "Orders through food apps", title: "The app pays the GST", line: "Since January 2022 the app pays the 5% on restaurant orders placed through it. You report those sales in your returns but pay no tax on them.", highlight: true },
      { icon: "Package", label: "Packaged bakery items", title: "Taxed as goods, item by item", line: "Pre-packed cakes, biscuits and savouries sold over the counter carry their own HSN rates, with input credit. Many fell to 5% in September 2025." },
      { icon: "Users", label: "Salons and parlours", title: "5% without input credit", line: "From 22 September 2025, beauty and grooming services moved from 18% with credit to 5% without it." },
    ],
  },

  documentsSection: {
    title: "What we need for GST work in Iyyappanthangal",
    lead: "Photos or PDFs on WhatsApp are enough. For food businesses, the app payout statements matter as much as your own bills.",
  },
  documents: [
    { icon: "IdCard", title: "For a new GST registration", items: ["PAN and Aadhaar of the owner or each partner", "Owner's photograph", "Electricity bill of the shop", "Rent agreement and the owner's consent letter", "Cancelled cheque or bank statement", "FSSAI registration or licence, for food businesses"], hint: "Many bills here still carry the panchayat name Ayyapanthangal. We enter the address exactly as the bill shows it." },
    { icon: "ReceiptText", title: "For a restaurant or cloud kitchen", items: ["POS or billing software summary for the period", "Payout and tax statements from each food app", "Purchase bills for provisions and packing", "Rent and electricity bills"], hint: "We match the app statements to your own records so app orders are not taxed again in your return." },
    { icon: "ShoppingBag", title: "For a shop or salon", items: ["Sales invoices and credit notes", "Purchase invoices from distributors", "Repair or service bills", "Record of used phones bought and sold"], hint: "Tell us if you buy old handsets from customers. They may qualify for tax on the margin only." },
  ],
  documentsNote: {
    title: "Not sure which app reports to send?",
    sub: "Forward whatever the app's partner portal gives you each month. We'll tell you which statement we need and where to find it.",
    message: "Hi National Filings, I sell food through apps in Iyyappanthangal. Which reports should I send you for GST?",
  },

  processSection: {
    title: "How a month of GST works with us",
    lead: "We work with Iyyappanthangal clients over WhatsApp and email. You send the month's figures, we send back the tax to pay, you approve, we file.",
    cta: {
      title: "Start with last month's figures",
      sub: "Send one month of sales and app statements. We'll set up a routine that suits how your counter runs.",
      message: "Hi National Filings, I have a shop in Iyyappanthangal. Can I send last month's bills so you can take over my GST filing?",
    },
  },
  steps: [
    { title: "Look at your billing", time: "First week", sub: "We see how you bill dine-in, parcels, app orders and goods, and check the GST set in your software." },
    { title: "Fix the rates", time: "Same week", sub: "Item and service rates corrected for the September 2025 changes, with HSN or SAC codes." },
    { title: "Collect each period", time: "Month end", sub: "POS summary, app payouts and purchase bills, sent on WhatsApp or email." },
    { title: "Prepare and approve", time: "Before the due date", sub: "App sales go to their own tables. You approve the tax payable before filing." },
    { title: "File and keep records", time: "On approval", sub: "GSTR-1 and GSTR-3B filed, with a summary you can show your bank or landlord." },
  ],
  processNote: "Timelines are estimates. Late app statements, portal downtime or missing purchase bills can push filing closer to the due date.",

  mistakesSection: {
    title: "GST mistakes we fix for Iyyappanthangal food and retail businesses",
    lead: "Most of these come from billing software set up once and never checked again, or from treating app orders like counter sales.",
  },
  mistakes: [
    { icon: "Soup", title: "Paying tax on app orders yourself", problem: "The restaurant adds its app sales to counter sales and pays 5% on all of it, though the app has already paid on those orders.", fix: "We move app sales to the section 9(5) tables of GSTR-1 and GSTR-3B, so they are reported but not taxed again." },
    { icon: "Calculator", title: "Claiming credit a restaurant can't take", problem: "Input credit is claimed on provisions, rent, gas or the app's commission while billing food at 5%.", fix: "We remove the ineligible credit before filing. The only credit allowed since 1 November 2026 is on restaurant service bought from another restaurant." },
    { icon: "Package", title: "One rate for the whole bakery", problem: "Everything at the counter is billed at a single rate, whether it is packed biscuits or tea and puffs served at a table.", fix: "We split the item master into goods and restaurant service, each with its correct rate." },
    { icon: "Percent", title: "Old rates still in the software", problem: "A salon still charges 18%, or a sweet shop bills cakes at the old rate, months after the September 2025 changes.", fix: "We update the rates in your billing setup and work out how to deal with any tax overcharged." },
  ],

  costSection: {
    title: "What our GST fee for an Iyyappanthangal business depends on",
    lead: "GST registration has no government fee. Our fee depends on how much billing and reconciling your business needs, and we agree it in writing first.",
    cta: {
      title: "Get a quote for your shop or kitchen",
      sub: "Tell us your trade, the apps you sell on and roughly how many bills a month. We'll quote each service separately.",
      message: "Hi National Filings, can I get a quote for GST filing for my business in Iyyappanthangal?",
    },
  },
  costs: [
    { icon: "IdCard", label: "No government fee", title: "New GST registration", line: "Our fee covers the application, the Aadhaar check and any query about your kitchen or shop premises." },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Monthly or quarterly returns", line: "Depends on your filing scheme and the volume of bills and purchases.", highlight: true },
    { icon: "Soup", label: "Quoted upfront", title: "Food app reconciliation", line: "Depends on how many apps you sell on and how many outlets report through them." },
    { icon: "FileWarning", label: "Quoted per case", title: "Notices and rate corrections", line: "Depends on the periods involved and how much needs to be explained or corrected." },
  ],

  compliance: {
    eyebrow: "Through the year",
    title: "GST checks that matter most for counter businesses",
    lead: "Beyond the regular returns, these are the points we watch for restaurants, bakeries and shops in Iyyappanthangal.",
    items: [
      { icon: "CalendarCheck", label: "Monthly or quarterly", title: "GSTR-1 and GSTR-3B", line: "Counter and direct sales taxed, app sales reported in their own tables." },
      { icon: "Soup", label: "Every period", title: "App statements matched", line: "Orders shown by each food app tallied with the sales you report." },
      { icon: "TrendingUp", label: "As sales grow", title: "Threshold watch", line: "App orders count towards your own turnover for the registration limit, even though the app pays their tax." },
      { icon: "Percent", label: "When rates change", title: "Billing rate review", line: "Item and service rates checked in your software after each GST Council change." },
    ],
  },

  reasonsTitle: "Why Iyyappanthangal shop owners hand their GST to us",
  reasons: [
    { icon: "Soup", title: "Food app sales understood", line: "Section 9(5) reporting is part of our routine for restaurants." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send bills from the counter and approve the tax from your phone." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office, in Karaima Nagar, if you'd rather meet in person." },
    { icon: "SearchCheck", title: "Checked before filing", line: "Your bills, app statements and purchases tallied every period." },
    { icon: "Award", title: "Experience since 2012", line: "GST and compliance work for Chennai businesses from day one of GST." },
    { icon: "ReceiptText", title: "Fees in writing", line: "You know the monthly fee before the first return is filed." },
  ],

  faqTitle: "GST in Iyyappanthangal: what shop and kitchen owners ask",
  faqs: [
    { q: "Do you have an office in Iyyappanthangal?", a: "No. Our only office is in Karaima Nagar, Kundrathur, open Monday to Saturday, 9 am to 7 pm. Iyyappanthangal clients usually work with us entirely over WhatsApp and email, and are welcome to visit Kundrathur whenever they want to meet." },
    { q: "Swiggy and Zomato already pay GST on my orders. Do I still file anything?", a: "Yes. Since 1 January 2022 the app pays the 5% on restaurant orders made through it, but you still report those sales in GSTR-1 and GSTR-3B, in separate tables. Your counter and direct orders are taxed in your own return as usual." },
    { q: "My kitchen only sells online through apps. Do I need GST registration?", a: "The app pays GST on those orders whether or not you are registered. But the sales still count towards your own turnover, so once you cross the limit for services, or sell anything outside the apps, registration needs looking at. We'll check your figures." },
    { q: "Can my restaurant charge 18% and claim input credit instead?", a: "No. A standalone restaurant or cloud kitchen charges 5%, and can't claim credit on its provisions, rent or other costs. From 1 November 2026 it may claim credit only on restaurant service bought from another restaurant, such as food sourced from another kitchen. The 18% rate with credit is only for restaurants in hotels that count as specified premises, broadly those with a room priced above ₹7,500 a day." },
    { q: "I run a bakery with a few tables. Which GST rate applies?", a: "It depends on how each item is sold. Packed items sold over the counter are goods taxed at their own rates, and many bakery items fell to 5% in September 2025. Food you prepare and serve at tables is restaurant service at 5%, with no credit on ingredients or rent. We set up your billing so each sale falls in the right place." },
    { q: "Did GST change for mobile phones in 2025?", a: "Mobile phones stayed at 18%. Some electronics did change: air conditioners and televisions moved from 28% to 18% from 22 September 2025. If you also sell used handsets, you may be able to pay GST only on your margin where no credit was taken on the purchase." },
    { q: "I run a salon. Why has my GST rate dropped?", a: "From 22 September 2025, salon and beauty services moved from 18% with input credit to 5% without it. Your bills should show 5%, and you can no longer claim credit on products, equipment or rent used for those services." },
  ],

  related: nearbyAreas("P2-A11"),
  relatedTitle: "GST consultants in areas near Iyyappanthangal",

  final: {
    title: "Get your Iyyappanthangal shop's GST sorted",
    sub: "Message us with your trade and the apps you sell on. We'll check your last return and tell you what needs fixing first.",
    message: "Hi National Filings, I have a shop in Iyyappanthangal and want someone to handle my GST. Can we talk?",
  },
  catalogue: ["GST return filing for restaurants in Iyyappanthangal", "GST registration in Iyyappanthangal", "Food app GST reconciliation in Iyyappanthangal"],
};
