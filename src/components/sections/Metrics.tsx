import { useEffect, useRef, useState } from "react";
import {
  instagramProfile,
  languages,
  metrics as fallbackMetrics,
  publicMetricsMethodology,
  topCountries,
} from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

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

type MetricItem = {
  label: string;
  value: number;
  suffix: string;
};

type AudienceItem = {
  label: string;
  value: number;
};

type SocialMetricsResponse = {
  metrics?: MetricItem[];
  topCountries?: AudienceItem[];
  audienceBreakdown?: AudienceItem[];
  updatedAt?: string;
  mediaKitUrl?: string;
  source?: string;
};

export const Metrics = () => {
  const [liveMetrics, setLiveMetrics] = useState<MetricItem[] | null>(null);
  const [liveCountries, setLiveCountries] = useState<AudienceItem[] | null>(null);
  const [liveAudienceBreakdown, setLiveAudienceBreakdown] = useState<AudienceItem[] | null>(null);
  const [updatedAt, setUpdatedAt] = useState(publicMetricsMethodology.capturedAt);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const { data, error } = await supabase.functions.invoke<SocialMetricsResponse>(
          instagramProfile.supabaseFunctionName,
          { body: { slug: instagramProfile.handle, mediaKitUrl: instagramProfile.mediaKitUrl } },
        );

        if (error) throw error;
        if (data?.metrics?.length) setLiveMetrics(data.metrics);
        if (data?.topCountries?.length) setLiveCountries(data.topCountries);
        if (data?.audienceBreakdown?.length) setLiveAudienceBreakdown(data.audienceBreakdown);
        if (data?.updatedAt) setUpdatedAt(data.updatedAt);
      } catch (error) {
        console.warn("Unable to refresh NJA metrics. Falling back to embedded snapshot.", error);
      }
    };

    void loadMetrics();
  }, []);

  const displayedMetrics = liveMetrics ?? fallbackMetrics;
  const displayedCountries = liveCountries ?? topCountries;
  const displayedAudienceBreakdown = liveAudienceBreakdown ?? languages;

  return (
    <section id="metrics" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Metrics & audience"
          title="Performance, audience, and reach."
          description={`A public-facing performance snapshot for @${instagramProfile.handle}, refreshed at most once every ${publicMetricsMethodology.refreshWindow}. The published figures reflect data originating from Meta/Facebook APIs and are not manually editable from this site.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 border-r border-b border-hairline">
          {displayedMetrics.map((m, i) => (
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
              {displayedCountries.map((c) => (
                <BarRow key={c.label} {...c} />
              ))}
              <div className="border-t border-hairline" />
            </div>
          </div>
          <div>
            <div className="label-eyebrow text-bronze mb-5">Audience · Breakdown</div>
            <h3 className="font-serif text-2xl md:text-3xl text-offwhite mb-2">
              Gender split
            </h3>
            <div className="mt-6">
              {displayedAudienceBreakdown.map((l) => (
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
              Refreshed {new Date(updatedAt).toLocaleDateString("it-IT")}
            </span>
          </div>
          <div className="border border-hairline p-6 text-sm text-muted-foreground">
            Recent highlights are available in the full public media kit. We do not mirror media cards here unless they are explicitly exposed in a stable public source.
          </div>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground max-w-3xl">
              Public estimate methodology: average likes, comments, and engagement rate are calculated from the latest {publicMetricsMethodology.sampledPostCount} public posts, excluding the most recent post. Audience geography and gender split reflect data originating from Meta/Facebook APIs. The surfaced numbers are not manually overrideable on this website.
            </p>
            <Button asChild className="rounded-none uppercase tracking-[0.18em] text-[11px] px-6">
              <a href={instagramProfile.mediaKitUrl} target="_blank" rel="noopener noreferrer">
                Apri il media kit completo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
