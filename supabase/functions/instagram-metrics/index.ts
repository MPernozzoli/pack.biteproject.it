type MetricItem = {
  label: string;
  value: number;
  suffix: string;
};

type MetricsResponse = {
  metrics: MetricItem[];
  updatedAt: string;
  source: "meta-graph" | "fallback";
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const fallbackMetrics: MetricItem[] = [
  { label: "Instagram Followers", value: 24800, suffix: "" },
  { label: "Avg. Reel Views", value: 38500, suffix: "" },
  { label: "Avg. Likes / Post", value: 1850, suffix: "" },
  { label: "Avg. Comments / Post", value: 96, suffix: "" },
  { label: "Engagement Rate", value: 7.4, suffix: "%" },
  { label: "Monthly Reach", value: 312000, suffix: "" },
];

const json = (body: MetricsResponse, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });

const buildMetaGraphUrl = ({
  igUserId,
  accessToken,
}: {
  igUserId: string;
  accessToken: string;
}) => {
  const url = new URL(`https://graph.facebook.com/v23.0/${igUserId}`);
  url.searchParams.set("fields", "followers_count,media_count");
  url.searchParams.set("access_token", accessToken);
  return url;
};

const tryLoadFromMeta = async (): Promise<MetricsResponse | null> => {
  const accessToken = Deno.env.get("INSTAGRAM_GRAPH_ACCESS_TOKEN");
  const igUserId = Deno.env.get("INSTAGRAM_GRAPH_IG_USER_ID");

  // TODO: If the Instagram handle changes, update the frontend constant in `src/data/site.ts`.
  // TODO: Replace this lightweight Graph call with the exact metrics mix you want to expose publicly.
  if (!accessToken || !igUserId) return null;

  const response = await fetch(buildMetaGraphUrl({ igUserId, accessToken }));
  if (!response.ok) {
    const text = await response.text();
    console.error("Meta Graph request failed:", response.status, text);
    return null;
  }

  const payload = await response.json();
  const followers = Number(payload.followers_count ?? 0);

  return {
    metrics: [
      { label: "Instagram Followers", value: followers, suffix: "" },
      ...fallbackMetrics.slice(1),
    ],
    updatedAt: new Date().toISOString(),
    source: "meta-graph",
  };
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const liveMetrics = await tryLoadFromMeta();
  if (liveMetrics) return json(liveMetrics);

  return json(
    {
      metrics: fallbackMetrics,
      updatedAt: new Date().toISOString(),
      source: "fallback",
    },
    200,
  );
});
