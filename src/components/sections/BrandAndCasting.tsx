import { SectionHeader } from "@/components/SectionHeader";
import { brandSubsections, castingSubsections } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

interface Sub {
  title: string;
  body: string;
}

const SubGrid = ({ items }: { items: Sub[] }) => (
  <div className="grid sm:grid-cols-2 gap-px bg-hairline mt-12 border border-hairline">
    {items.map((s, i) => (
      <SubCard key={s.title} {...s} index={i} />
    ))}
  </div>
);

const SubCard = ({ title, body, index }: Sub & { index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-background p-8 lg:p-10"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="label-eyebrow text-bronze mb-4">0{index + 1}</div>
      <h4 className="font-serif text-2xl text-offwhite mb-3">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
};

export const BrandKit = () => (
  <section id="brands" className="py-24 md:py-32 border-t border-hairline">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Brand media kit"
        title="A distinctive visual identity for premium partnerships."
        description="Godot and Freyja offer authentic lifestyle storytelling and a refined aesthetic suited to pet, travel, outdoor, and lifestyle brands seeking standout creative."
      />
      <SubGrid items={brandSubsections} />
    </div>
  </section>
);

export const CastingProfile = () => (
  <section id="casting" className="py-24 md:py-32 border-t border-hairline bg-surface-elevated/40">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Casting / agency profile"
        title="Production-ready talent with composed temperament."
        description="Available for selected productions, editorial shoots, branded campaigns, and visual storytelling projects, with a strong focus on temperament, presence, and professional presentation."
      />
      <SubGrid items={castingSubsections} />
    </div>
  </section>
);
