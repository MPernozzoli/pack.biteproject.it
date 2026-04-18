import { partnerships } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const ProjectCard = ({
  brand,
  type,
  deliverables,
  outcome,
  image,
  index,
}: (typeof partnerships)[number] & { index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal group" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative aspect-[4/5] overflow-hidden mb-6">
        <img
          src={image}
          alt={type}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="label-eyebrow text-bronze mb-3">{brand}</div>
      <h3 className="font-serif text-2xl text-offwhite mb-3 leading-tight">{type}</h3>
      <div className="border-t border-hairline pt-4 space-y-2 text-sm">
        <p className="text-muted-foreground">
          <span className="label-eyebrow mr-2">Deliverables —</span>
          {deliverables}
        </p>
        <p className="text-muted-foreground">
          <span className="label-eyebrow mr-2">Outcome —</span>
          {outcome}
        </p>
      </div>
    </div>
  );
};

export const Work = () => (
  <section id="work" className="py-24 md:py-32 border-t border-hairline bg-surface-elevated/40">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Partnerships / previous work"
        title="Selected sample collaborations and campaign-ready concepts."
        description="A reference set of collaboration formats, prepared as concepts and sample executions. Real partnership case studies are added as they go live."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-14">
        {partnerships.map((p, i) => (
          <ProjectCard key={i} {...p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
