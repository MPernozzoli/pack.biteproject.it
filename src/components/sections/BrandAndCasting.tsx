import { SectionHeader } from "@/components/SectionHeader";
import { brandSubsections, castingSubsections } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

interface Sub {
  title: string;
  body: string;
}

const SubGrid = ({ items }: { items: Sub[] }) => (
  <div className="mt-12 grid gap-4 sm:grid-cols-2">
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
      className="reveal rounded-[24px] border border-cream/10 bg-cream/[0.04] p-8 transition-all duration-500 hover:border-bronze/25 lg:p-10"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="font-serif text-2xl text-bronze/95">0{index + 1}</div>
      <h4 className="mb-3 mt-4 font-serif text-2xl text-cream">{title}</h4>
      <p className="font-sans text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
};

export const BrandKit = () => (
  <section id="brands" className="page-section pt-8 md:pt-10">
    <div className="container-editorial">
      <div className="glass-panel rounded-[38px] p-8 md:p-12 lg:p-14">
        <SectionHeader
          eyebrow="Brand lane"
          title="For brands that want presence without performance."
          description="Pet gear, travel, outdoor, hospitality — anywhere a large dog can carry the frame without stealing it. The work stays grounded in how they actually live."
        />
        <SubGrid items={brandSubsections} />
      </div>
    </div>
  </section>
);

export const CastingProfile = () => (
  <section id="casting" className="page-section pt-4 md:pt-6">
    <div className="container-editorial">
      <div className="glass-panel rounded-[38px] p-8 md:p-12 lg:p-14">
        <SectionHeader
          eyebrow="Casting lane"
          title="For productions that need calm when the red light is on."
          description="Lights, booms, long holds — both dogs have been walked through the boring parts of set life until it feels routine, not theatrical."
        />
        <SubGrid items={castingSubsections} />
      </div>
    </div>
  </section>
);
