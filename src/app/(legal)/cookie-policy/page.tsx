import { BarChart3, Cookie, MapPinned, SlidersHorizontal } from "lucide-react";
import { definePage } from "@/lib/page";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";

// TODO(client): review before launch. Keep this page in sync if analytics, chat or advertising tools are added.
const page = definePage({
  path: "/cookie-policy",
  title: "Cookie Policy | How National Filings Uses Website Cookies",
  description: "See which cookies the National Filings website uses, including optional analytics and third-party cookies, and how to manage or switch them off.",
  trail: [{ name: "Cookie Policy", path: "/cookie-policy" }],
});
export const metadata = page.metadata;

const UPDATED = "30 September 2026";

const sections: LegalSection[] = [
  {
    id: "what",
    title: "What cookies are",
    body: (
      <p>
        Cookies are small text files a website stores in your browser. They can remember settings or help measure how a site is used. Similar
        technologies include local storage and tracking pixels; this policy covers them too.
      </p>
    ),
  },
  {
    id: "our-cookies",
    title: "Cookies we use",
    body: (
      <>
        <h3>Essential</h3>
        <p>
          This website does not need cookies to work. Browsing pages and sending the contact form do not set cookies of our own, and we do not
          use advertising or remarketing cookies.
        </p>
        <h3>Analytics (only if switched on)</h3>
        <p>
          If analytics is enabled, we use Google Analytics to count visits and see which pages are useful. It sets cookies named{" "}
          <strong>_ga</strong> and <strong>_ga_*</strong>, which usually last up to two years. The data is aggregated and we do not use it to
          identify you.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party content",
    body: (
      <>
        <p>Some features load content from other companies, which may set their own cookies under their own policies:</p>
        <ul>
          <li>
            <strong>Google Maps</strong>: the map on our contact page is embedded from Google and loads when you scroll to it.
          </li>
          <li>
            <strong>Google reviews</strong>: reviewer names and photos are loaded from Google&apos;s servers.
          </li>
          <li>
            <strong>WhatsApp, Google and Justdial links</strong>: these open the other service, where its own cookies apply.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "control",
    title: "How to control cookies",
    body: (
      <>
        <p>
          You can block or delete cookies in your browser settings; the website will still work. To stop Google Analytics in particular, you
          can use Google&apos;s{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            opt-out browser add-on
          </a>
          .
        </p>
        <p>
          How we handle personal information is explained in our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>If we add new tools that use cookies, we will update this page and the date above.</p>,
  },
];

export default function Page() {
  return (
    <LegalPage
      page={page}
      title="Cookie Policy"
      accent="Cookie"
      updated={UPDATED}
      intro="We keep cookies to a minimum. Here is exactly what is used and how to control it."
      highlights={[
        { icon: Cookie, title: "No essential cookies", text: "The site works without setting cookies of our own." },
        { icon: BarChart3, title: "Analytics only", text: "Google Analytics, and only if it is switched on." },
        { icon: MapPinned, title: "Google Maps", text: "The map on our contact page is loaded from Google." },
        { icon: SlidersHorizontal, title: "You're in control", text: "Block or clear cookies any time in your browser." },
      ]}
      sections={sections}
      contact={{
        title: "Questions about cookies?",
        text: "Message us and we'll explain what's collected.",
        message: "Hi National Filings, I have a question about cookies on your website.",
      }}
    />
  );
}
