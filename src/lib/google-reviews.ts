/**
 * Real Google reviews, refreshed once a day. Two sources, tried in this order:
 *
 * 1. Featurable (free, no Google Cloud account): https://featurable.com
 *      FEATURABLE_WIDGET_ID   widget ID from Featurable → Embed → API (connect the Google Business Profile first)
 *      Featurable syncs reviews from Google about every 48 hours; pin or hide reviews in its dashboard.
 *
 * 2. Google Places API (New):
 *      GOOGLE_PLACES_API_KEY  Google Cloud key with "Places API (New)" enabled
 *      GOOGLE_PLACE_ID        optional; the profile's Place ID. If left out, we look it up once by name.
 *
 * Google returns up to 5 reviews ("most relevant"). They are shown as returned, with the
 * reviewer's name, photo and a link back to Google, as Google's attribution rules require.
 * With no key configured this returns null and the page falls back to lib/proof.ts.
 */

export type GoogleReview = {
  author: string;
  authorUrl?: string;
  photo?: string;
  rating: number;
  text: string;
  when: string; // e.g. "3 months ago", from Google
  url?: string; // link to this review on Google Maps
};

export type GoogleReviews = {
  rating: number;
  total: number;
  mapsUrl: string;
  reviews: GoogleReview[];
};

const DAY = 60 * 60 * 24;
const SEARCH_QUERY = "National Filings, Kundrathur, Chennai";

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
};

async function placeId(key: string): Promise<string | null> {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": key, "X-Goog-FieldMask": "places.id" },
    body: JSON.stringify({ textQuery: SEARCH_QUERY }),
    next: { revalidate: DAY },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: { id: string }[] };
  return data.places?.[0]?.id ?? null;
}

/* ------------------------------ Featurable ------------------------------ */

type FeaturableV2 = {
  success: boolean;
  widget?: {
    gbpLocationSummary?: { reviewsCount?: number; rating?: number; writeAReviewUri?: string };
    reviews?: {
      author?: { name?: string | null; avatarUrl?: string | null; photoUrl?: string | null; profileUrl?: string | null } | null;
      text?: string;
      rating?: { value: number; max: number } | null;
      publishedAt?: string;
      url?: string | null;
    }[];
  };
};

type FeaturableV1 = {
  success: boolean;
  profileUrl?: string | null;
  totalReviewCount?: number;
  averageRating?: number;
  reviews?: {
    reviewer?: { displayName?: string; profilePhotoUrl?: string; isAnonymous?: boolean };
    starRating?: number;
    comment?: string;
    createTime?: string | null;
  }[];
};

/** "3 months ago" style label, like Google shows. */
function relative(iso?: string | null): string {
  if (!iso) return "";
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (Number.isNaN(days) || days < 0) return "";
  if (days < 1) return "today";
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${days < 14 ? "" : "s"} ago`;
  if (days < 365) return `${Math.floor(days / 30)} month${days < 60 ? "" : "s"} ago`;
  return `${Math.floor(days / 365)} year${days < 730 ? "" : "s"} ago`;
}

async function fromFeaturable(id: string): Promise<GoogleReviews | null> {
  const base = "https://api.featurable.com";
  // Newer widgets answer on v2; older ones on v1.
  try {
    const r2 = await fetch(`${base}/v2/widgets/${encodeURIComponent(id)}`, { next: { revalidate: DAY } });
    if (r2.ok) {
      const d = (await r2.json()) as FeaturableV2;
      const sum = d.widget?.gbpLocationSummary;
      if (d.success && sum?.rating && sum.reviewsCount) {
        return {
          rating: sum.rating,
          total: sum.reviewsCount,
          mapsUrl: "",
          reviews: (d.widget?.reviews ?? [])
            .map((r) => ({
              author: r.author?.name || "Google user",
              authorUrl: r.author?.profileUrl ?? undefined,
              photo: r.author?.avatarUrl || r.author?.photoUrl || undefined,
              rating: r.rating ? (r.rating.value / (r.rating.max || 5)) * 5 : 0,
              text: (r.text ?? "").trim(),
              when: relative(r.publishedAt),
              url: r.url ?? undefined,
            }))
            .filter((r) => r.text),
        };
      }
    }
  } catch {
    /* fall through to v1 */
  }
  try {
    const r1 = await fetch(`${base}/v1/widgets/${encodeURIComponent(id)}`, { next: { revalidate: DAY } });
    if (!r1.ok) return null;
    const d = (await r1.json()) as FeaturableV1;
    if (!d.success || !d.averageRating || !d.totalReviewCount) return null;
    return {
      rating: d.averageRating,
      total: d.totalReviewCount,
      mapsUrl: d.profileUrl ?? "",
      reviews: (d.reviews ?? [])
        .map((r) => ({
          author: r.reviewer?.isAnonymous ? "Google user" : r.reviewer?.displayName || "Google user",
          photo: r.reviewer?.profilePhotoUrl || undefined,
          rating: r.starRating ?? 0,
          text: (r.comment ?? "").trim(),
          when: relative(r.createTime),
        }))
        .filter((r) => r.text),
    };
  } catch {
    return null;
  }
}

/* ------------------------------ entry point ------------------------------ */

export async function getGoogleReviews(): Promise<GoogleReviews | null> {
  const featurableId = process.env.FEATURABLE_WIDGET_ID;
  if (featurableId) {
    const fromF = await fromFeaturable(featurableId);
    if (fromF) return fromF;
  }
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;
  try {
    const id = await placeId(key);
    if (!id) return null;
    const res = await fetch(`https://places.googleapis.com/v1/places/${id}?languageCode=en`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews" },
      next: { revalidate: DAY },
    });
    if (!res.ok) return null;
    const p = (await res.json()) as { rating?: number; userRatingCount?: number; googleMapsUri?: string; reviews?: PlacesReview[] };
    const reviews = (p.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google user",
        authorUrl: r.authorAttribution?.uri,
        photo: r.authorAttribution?.photoUri,
        rating: r.rating ?? 0,
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        when: r.relativePublishTimeDescription ?? "",
        url: r.googleMapsUri,
      }))
      .filter((r) => r.text); // rating-only reviews have nothing to quote
    if (!p.rating || !p.userRatingCount) return null;
    return { rating: p.rating, total: p.userRatingCount, mapsUrl: p.googleMapsUri ?? "", reviews };
  } catch {
    return null;
  }
}
