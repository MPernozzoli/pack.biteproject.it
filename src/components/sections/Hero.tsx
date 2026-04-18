import { ArrowDown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/gallery-6.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-end pt-24 pb-16 md:pb-24"
    >
      <img
        src={heroImg}
        alt="Godot the American Akita and Freyja the Alaskan Malamute portrait"
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      <div className="container-editorial relative z-10">
        <div className="max-w-4xl">
          <div className="label-eyebrow text-bronze mb-6 animate-fade-up">
            Dog Talent · Media Kit · Casting Profile
          </div>
          <h1 className="font-serif text-[15vw] md:text-[8.5vw] lg:text-[7.5rem] leading-[0.92] text-offwhite animate-fade-up [animation-delay:120ms]">
            Godot
            <span className="italic text-muted-foreground/90"> &amp; </span>
            Freyja
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-offwhite/85 leading-relaxed animate-fade-up [animation-delay:240ms]">
            Dog talent portfolio, media kit, and partnership deck for premium campaigns,
            branded content, and casting opportunities.
          </p>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground animate-fade-up [animation-delay:320ms]">
            American Akita and Alaskan Malamute. Available for campaigns,
            productions, and collaborations across Europe and beyond.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up [animation-delay:420ms]">
            <a
              href="#brands"
              className="group inline-flex items-center justify-between gap-6 bg-bronze text-primary-foreground h-14 px-7 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-bronze/90 transition-colors"
            >
              For Brands
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#casting"
              className="group inline-flex items-center justify-between gap-6 border border-offwhite/40 text-offwhite h-14 px-7 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-offwhite/10 transition-colors"
            >
              For Casting / Agencies
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-6 md:right-10 lg:right-16 hidden md:flex flex-col items-center gap-3 text-muted-foreground animate-fade-up [animation-delay:600ms]">
          <span className="label-eyebrow [writing-mode:vertical-rl]">Scroll</span>
          <ArrowDown size={14} className="animate-pulse" />
        </div>
      </div>
    </section>
  );
};
