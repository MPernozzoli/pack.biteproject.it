import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

type MetricItem = {
  label: string;
  value: number;
  suffix: string;
};

type AudienceItem = {
  label: string;
  value: number;
};

type MetricsPayload = {
  metrics: MetricItem[];
  topCountries: AudienceItem[];
  audienceBreakdown: AudienceItem[];
  updatedAt: string;
  mediaKitUrl: string;
  source: "not-just-analytics" | "fallback-cache";
};

type CacheRow = {
  slug: string;
  source_url: string;
  payload: MetricsPayload;
  fetched_at: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const CACHE_HOURS = 24;
const POST_SAMPLE_SIZE = 12;

const fallbackPayload = (mediaKitUrl: string): MetricsPayload => ({
  metrics: [
    { label: "Instagram Followers", value: 701, suffix: "" },
    { label: "Avg. Reel Views", value: 1180, suffix: "" },
    { label: "Avg. Likes / Post", value: 54, suffix: "" },
    { label: "Avg. Comments / Post", value: 3, suffix: "" },
    { label: "Engagement Rate", value: 8.3, suffix: "%" },
    { label: "Posts Sampled", value: POST_SAMPLE_SIZE, suffix: "" },
  ],
  topCountries: [
    { label: "Italy", value: 62 },
    { label: "United States", value: 7 },
    { label: "Germany", value: 3 },
    { label: "France", value: 2 },
    { label: "United Kingdom", value: 2 },
    { label: "Other", value: 24 },
  ],
  audienceBreakdown: [
    { label: "Female audience", value: 40 },
    { label: "Male audience", value: 32 },
    { label: "Undefined / not disclosed", value: 28 },
  ],
  updatedAt: new Date().toISOString(),
  mediaKitUrl,
  source: "fallback-cache",
});

const countryLabels: Record<string, string> = {
  IT: "Italy",
  US: "United States",
  DE: "Germany",
  FR: "France",
  GB: "United Kingdom",
  ES: "Spain",
  CA: "Canada",
  BR: "Brazil",
  JP: "Japan",
  NL: "Netherlands",
};

const json = (body: MetricsPayload, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });

const percent = (value: number, total: number) =>
  total > 0 ? Math.round((value / total) * 100) : 0;

const matchNumber = (html: string, pattern: RegExp, label: string) => {
  const match = html.match(pattern);
  if (!match) throw new Error(`Missing ${label}`);
  return Number(match[1]);
};

const matchString = (html: string, pattern: RegExp, label: string) => {
  const match = html.match(pattern);
  if (!match) throw new Error(`Missing ${label}`);
  return match[1];
};

const extractCountryItems = (html: string): AudienceItem[] => {
  const sectionMatch = html.match(/"data":\{"items":\[(.*?)\]\},"type":"audience_country"/s);
  if (!sectionMatch) return fallbackPayload("").topCountries;

  const rawItems = [...sectionMatch[1].matchAll(/\{"name":"([A-Z]{2})","value":(\d+)\}/g)].map((match) => ({
    code: match[1],
    count: Number(match[2]),
  }));

  const total = rawItems.reduce((sum, item) => sum + item.count, 0);
  const topFive = rawItems
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map((item) => ({
      label: countryLabels[item.code] ?? item.code,
      value: percent(item.count, total),
    }));

  const topFiveTotal = topFive.reduce((sum, item) => sum + item.value, 0);

  return [...topFive, { label: "Other", value: Math.max(0, 100 - topFiveTotal) }];
};

const extractAudienceBreakdown = (html: string): AudienceItem[] => {
  const match = html.match(/"data":\{"items":\{"male":(\d+),"female":(\d+),"undefined":(\d+)\}\},"type":"audience_gender"/);
  if (!match) return fallbackPayload("").audienceBreakdown;

  const male = Number(match[1]);
  const female = Number(match[2]);
  const undefinedCount = Number(match[3]);
  const total = male + female + undefinedCount;

  return [
    { label: "Female audience", value: percent(female, total) },
    { label: "Male audience", value: percent(male, total) },
    { label: "Undefined / not disclosed", value: percent(undefinedCount, total) },
  ];
};

const parseNjaPayload = (html: string, mediaKitUrl: string): MetricsPayload => {
  const followers = matchNumber(html, /"followers_count":(\d+)/, "followers");
  const avgReelViews = matchNumber(html, /"name":"reels","social":"ig","play_rate":\d+,"views_avg":(\d+)/, "avg reel views");
  const avgLikes = matchNumber(html, /"name":"post","social":"ig","reach_er":"[\d.]+","avg_likes":(\d+)/, "avg likes");
  const avgComments = matchNumber(html, /"avg_comments":(\d+)/, "avg comments");
  const engagementRate = Number(matchString(html, /"er":"([\d.]+)"/, "engagement rate"));
  const updatedAt = matchString(html, /"updated_at":"([^"]+)"/, "updated at");

  return {
    metrics: [
      { label: "Instagram Followers", value: followers, suffix: "" },
      { label: "Avg. Reel Views", value: avgReelViews, suffix: "" },
      { label: "Avg. Likes / Post", value: avgLikes, suffix: "" },
      { label: "Avg. Comments / Post", value: avgComments, suffix: "" },
      { label: "Engagement Rate", value: Number(engagementRate.toFixed(1)), suffix: "%" },
      { label: "Posts Sampled", value: POST_SAMPLE_SIZE, suffix: "" },
    ],
    topCountries: extractCountryItems(html),
    audienceBreakdown: extractAudienceBreakdown(html),
    updatedAt,
    mediaKitUrl,
    source: "not-just-analytics",
  };
};

const isFresh = (fetchedAt: string) =>
  Date.now() - new Date(fetchedAt).getTime() < CACHE_HOURS * 60 * 60 * 1000;

const getSupabaseAdmin = () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing Supabase environment variables for admin client");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const { slug = "godotconlat", mediaKitUrl = `https://njlk.it/${slug}` } = await request.json().catch(() => ({}));
  const fallback = fallbackPayload(mediaKitUrl);

  try {
    const supabase = getSupabaseAdmin();
    const { data: cacheRow } = await supabase
      .from("external_metrics_cache")
      .select("slug, source_url, payload, fetched_at")
      .eq("slug", slug)
      .maybeSingle<CacheRow>();

    if (cacheRow && isFresh(cacheRow.fetched_at)) {
      return json(cacheRow.payload);
    }

    const response = await fetch(mediaKitUrl, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; FreyjaCollectiveBot/1.0; +https://njlk.it/)",
      },
    });

    if (!response.ok) {
      throw new Error(`NJA fetch failed with ${response.status}`);
    }

    const html = await response.text();
    const payload = parseNjaPayload(html, mediaKitUrl);

    await supabase.from("external_metrics_cache").upsert({
      slug,
      source_url: mediaKitUrl,
      payload,
      fetched_at: new Date().toISOString(),
    });

    return json(payload);
  } catch (error) {
    console.error("Failed to refresh NJA metrics:", error);

    try {
      const supabase = getSupabaseAdmin();
      const { data: cacheRow } = await supabase
        .from("external_metrics_cache")
        .select("payload")
        .eq("slug", slug)
        .maybeSingle<{ payload: MetricsPayload }>();

      if (cacheRow?.payload) return json(cacheRow.payload);
    } catch (cacheError) {
      console.error("Failed to read cached fallback payload:", cacheError);
    }

    return json(fallback);
  }
});
