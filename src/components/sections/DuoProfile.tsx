import { useReveal } from "@/hooks/use-reveal";
import { duoPhotos } from "@/data/photos";

const tags = [
  "Lifestyle campaigns",
  "Outdoor brands",
  "Family / travel storytelling",
  "Premium pet accessories",
  "Editorial content",
  "Cinematic narrative",
];

export const DuoProfile = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 border-t border-hairline bg-surface-elevated/40">
      <div className="container-editorial">
        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="label-eyebrow text-bronze mb-5">Duo profile</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-offwhite leading-[1.05]">
              Together they tell a richer story.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              As a duo, Godot and Freyja bring contrast, character, and a strong
              visual identity that translates naturally into campaign imagery and
              cinematic lifestyle content. Two silhouettes, two coats, one scene.
            </p>

            <div className="label-eyebrow mt-10 mb-4">Best for</div>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[12px] uppercase tracking-[0.14em] border border-hairline text-offwhite/85 px-3 py-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[5/6] overflow-hidden">
              <img
                src={duoPhotos.studioWide}
                alt="Godot and Freyja duo portrait"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
