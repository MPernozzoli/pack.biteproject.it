import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import lifestyle from "@/assets/lifestyle-boat.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const ChoosePath = () => {
  const ref1 = useReveal<HTMLAnchorElement>();
  const ref2 = useReveal<HTMLAnchorElement>();

  return (
    <section className="py-24 md:py-32 border-t border-hairline bg-surface-elevated/40">
      <div className="container-editorial">
        <div className="text-center mb-16">
          <div className="label-eyebrow mb-5">Choose your path</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-offwhite leading-[1.05]">
            How can we work together?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <a
            ref={ref1}
            href="#brands"
            className="reveal group relative overflow-hidden aspect-[4/5] md:aspect-[5/6] block"
          >
            <img
              src={lifestyle}
              alt="Brands collaboration context"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col justify-end">
              <div className="label-eyebrow text-bronze mb-4">For Brands</div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite leading-tight mb-4">
                Sponsorships, content, ambassador programs.
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mb-6">
                Brand collaborations across pet, travel, outdoor, and lifestyle
                categories — built around authentic storytelling.
              </p>
              <span className="inline-flex items-center gap-2 text-offwhite text-[12px] uppercase tracking-[0.2em]">
                Brand media kit
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </a>

          <a
            ref={ref2}
            href="#casting"
            className="reveal group relative overflow-hidden aspect-[4/5] md:aspect-[5/6] block"
            style={{ transitionDelay: "120ms" }}
          >
            <img
              src={g3}
              alt="Casting and production context"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col justify-end">
              <div className="label-eyebrow text-bronze mb-4">For Agencies &amp; Casting</div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite leading-tight mb-4">
                Casting profile for productions and editorial.
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mb-6">
                A polished casting sheet with temperament, set readiness, and
                travel availability for productions of any scale.
              </p>
              <span className="inline-flex items-center gap-2 text-offwhite text-[12px] uppercase tracking-[0.2em]">
                Casting profile
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
