import { useEffect, useRef, useState } from "react";
import { instagramProfile, languages, metrics as fallbackMetrics, topCountries } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { supabase } from "@/integrations/supabase/client";
import { duoPhotos, freyjaPhotos, godotPhotos } from "@/data/photos";

const formatNumber = (n: number) => {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return n.toString();
};

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(value * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const isFloat = value % 1 !== 0;
  const formatted = isFloat ? display.toFixed(1) : formatNumber(Math.round(display));

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl lg:text-7xl text-offwhite tabular-nums">
      {formatted}
      <span className="text-bronze">{suffix}</span>
    </span>
  );
};

const MetricCard = ({
  label,
  value,
  suffix,
  index,
}: {
  label: string;
  value: number;
  suffix: string;
  index: number;
}) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal p-8 lg:p-10 border-t border-l border-hairline first:border-l lg:[&:nth-child(3n+1)]:border-l"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="label-eyebrow mb-6">{label}</div>
      <Counter value={value} suffix={suffix} />
    </div>
  );
};

const BarRow = ({ label, value }: { label: string; value: number }) => (
  <div className="py-4 border-t border-hairline">
    <div className="flex justify-between items-baseline mb-2">
      <span className="text-sm text-offwhite/90">{label}</span>
      <span className="label-eyebrow text-bronze">{value}%</span>
    </div>
    <div className="h-px bg-hairline overflow-hidden">
      <div
        className="h-full bg-bronze transition-all duration-[1500ms] ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const topContent = [
  duoPhotos.sunsetBoat,
  godotPhotos.studioRed,
  freyjaPhotos.redBackdropPortrait,
  duoPhotos.countryside,
];

type MetricItem = {
  label: string;
  value: number;
  suffix: string;
};

type SocialMetricsResponse = {
  metrics?: MetricItem[];
  updatedAt?: string;
};

export const Metrics = () => {
  const [liveMetrics, setLiveMetrics] = useState<MetricItem[] | null>(null);
  const [liveUpdatedAt, setLiveUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const applyPayload = (payload: SocialMetricsResponse | null | undefined) => {
      if (!payload?.metrics?.length) return false;

      setLiveMetrics(payload.metrics);
      setLiveUpdatedAt(payload.updatedAt ?? null);
      return true;
    };

    const loadFromSupabase = async () => {
      try {
        const { data, error } = await supabase.functions.invoke<SocialMetricsResponse>(
          instagramProfile.supabaseFunctionName,
          {
            body: { handle: instagramProfile.handle },
          },
        );

        if (error) throw error;
        return applyPayload(data);
      } catch (error) {
        console.warn("Unable to load live social metrics from Supabase. Falling back to other sources.", error);
        return false;
      }
    };

    const loadFromEndpoint = async () => {
      if (!instagramProfile.metricsEndpoint) return false;

      try {
        const url = new URL(instagramProfile.metricsEndpoint, window.location.origin);
        url.searchParams.set("handle", instagramProfile.handle);

        const response = await fetch(url.toString(), { signal: controller.signal });
        if (!response.ok) throw new Error(`Metrics request failed with ${response.status}`);

        const payload = (await response.json()) as SocialMetricsResponse;
        return applyPayload(payload);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.warn("Unable to load live social metrics. Falling back to static snapshot.", error);
        return false;
      }
    };

    const loadMetrics = async () => {
      const loadedFromSupabase = await loadFromSupabase();
      if (loadedFromSupabase) return;
      await loadFromEndpoint();
    };

    void loadMetrics();

    return () => controller.abort();
  }, []);

  const metrics = liveMetrics ?? fallbackMetrics;
  const isLive = Boolean(liveMetrics);

  return (
    <section id="metrics" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Metrics & audience"
          title="Performance, audience, and reach."
          description={`A snapshot of social performance and audience composition for @${instagramProfile.handle}. ${
            isLive
              ? "The headline numbers below are synced from a connected metrics endpoint."
              : "The headline numbers below are currently a curated snapshot until the live Instagram integration is connected."
          }`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 border-r border-b border-hairline">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} index={i} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-16">
          <div>
            <div className="label-eyebrow text-bronze mb-5">Audience · Top countries</div>
            <h3 className="font-serif text-2xl md:text-3xl text-offwhite mb-2">
              Geographic distribution
            </h3>
            <div className="mt-6">
              {topCountries.map((c) => (
                <BarRow key={c.label} {...c} />
              ))}
              <div className="border-t border-hairline" />
            </div>
          </div>
          <div>
            <div className="label-eyebrow text-bronze mb-5">Audience · Languages</div>
            <h3 className="font-serif text-2xl md:text-3xl text-offwhite mb-2">
              Language split
            </h3>
            <div className="mt-6">
              {languages.map((l) => (
                <BarRow key={l.label} {...l} />
              ))}
              <div className="border-t border-hairline" />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="label-eyebrow text-bronze mb-2">Top performing content</div>
              <h3 className="font-serif text-2xl md:text-3xl text-offwhite">Recent highlights</h3>
            </div>
            <span className="hidden md:block text-xs text-muted-foreground">
              {isLive && liveUpdatedAt ? `Synced ${new Date(liveUpdatedAt).toLocaleDateString("it-IT")}` : "Updated regularly"}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {topContent.map((src, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden group">
                <img
                  src={src}
                  alt={`Top performing content ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 label-eyebrow text-offwhite/90">
                  Reel · {Math.round(20 + Math.random() * 60)}K views
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Sample content. Full analytics report available on request. Live sync prefers the Supabase Edge Function `instagram-metrics` and can optionally fall back to `VITE_SOCIAL_METRICS_URL`.
          </p>
        </div>
      </div>
    </section>
  );
};
