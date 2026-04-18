import { ArrowRight } from "lucide-react";
import { duoPhotos } from "@/data/photos";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-end overflow-hidden pt-24 pb-20 md:pb-28"
    >
      <img
        src={duoPhotos.sunsetBoat}
        alt="Godot the American Akita and Freyja the Alaskan Malamute aboard at dusk"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        fetchPriority="high"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(31,31,31,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/50 via-background/25 to-background"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/75 via-transparent to-transparent"
        aria-hidden
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="container-editorial relative z-10 w-full">
        <div className="max-w-4xl pb-8 md:pb-12">
          <div className="mb-6 animate-fade-up">
            <span className="glass-chip-bronze inline-flex items-center gap-2 px-4 py-2 text-[10px] font-sans font-medium uppercase tracking-[0.26em] text-cream">
              <span className="h-1.5 w-1.5 rounded-full bg-charcoal/80" />
              American Akita &amp; Alaskan Malamute · Italy
            </span>
          </div>
          <h1 className="animate-fade-up font-serif text-[clamp(2.75rem,12vw,7.5rem)] leading-[0.92] tracking-tight text-cream [animation-delay:100ms]">
            Godot
            <span className="mx-1 italic text-bronze"> &amp; </span>
            Freyja
          </h1>
          <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-cream/88 md:text-xl [animation-delay:200ms]">
            Two large dogs raised between harbour light and city noise. They hold a mark, ignore
            chatter, and read weather the way working animals do — which is why the camera rarely
            has to lie.
          </p>
          <p className="mt-4 max-w-2xl animate-fade-up text-sm leading-relaxed text-muted-foreground md:text-base [animation-delay:280ms]">
            Booked solo or as a pair, across Europe, with one handler on the day.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center [animation-delay:380ms]">
            <a
              href="#brands"
              className="glass-button group inline-flex h-14 min-w-[200px] items-center justify-center gap-3 px-8"
            >
              For brands
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#casting"
              className="glass-button-ghost group inline-flex h-14 min-w-[220px] items-center justify-center gap-3 px-8"
            >
              For casting
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:flex">
          <div className="hero-scroll-cue animate-fade-up [animation-delay:500ms]">
            <span className="hero-scroll-cue__label">Scroll</span>
            <span className="hero-scroll-cue__line" aria-hidden>
              <span className="hero-scroll-cue__dot" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
