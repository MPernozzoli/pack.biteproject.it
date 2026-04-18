import { useReveal } from "@/hooks/use-reveal";
import { overviewCards } from "@/data/site";

export const Overview = () => {
  return (
    <section id="overview" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="label-eyebrow mb-5">At a glance</div>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite leading-[1.05]">
              A serious portfolio for{" "}
              <span className="italic text-bronze">premium</span> creative work.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Built for brands, agencies, and production companies looking for
              distinctive large-breed dog talent with a real lifestyle context and a
              calm, professional presence on set.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {overviewCards.map((card, i) => (
            <OverviewCard key={card.label} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const OverviewCard = ({
  label,
  title,
  body,
  index,
}: {
  label: string;
  title: string;
  body: string;
  index: number;
}) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative p-8 lg:p-10 border-t border-hairline lg:border-l lg:[&:first-child]:border-l-0 hover:bg-surface-elevated transition-colors duration-500"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="label-eyebrow text-bronze mb-10">{label}</div>
      <h3 className="font-serif text-2xl text-offwhite mb-4 leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
};
