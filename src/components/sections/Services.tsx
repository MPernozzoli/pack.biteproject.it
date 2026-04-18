import { services, whyPoints, pressKitItems } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Download, ArrowUpRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ServiceCard = ({ title, body, index }: { title: string; body: string; index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal p-8 border-t border-l border-hairline hover:bg-surface-elevated transition-colors"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="label-eyebrow text-bronze mb-5">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="font-serif text-xl text-offwhite mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
};

export const Services = () => (
  <section className="py-24 md:py-32 border-t border-hairline bg-surface-elevated/40">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Services & deliverables"
        title="What you can book."
        description="A flexible roster of formats, available individually or bundled into a campaign package."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-14 border-r border-b border-hairline">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const WhyItem = ({ title, body, index }: { title: string; body: string; index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="font-serif text-3xl md:text-4xl text-bronze mb-4">
        0{index + 1}
      </div>
      <h3 className="font-serif text-2xl text-offwhite mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
};

export const Why = () => (
  <section className="py-24 md:py-32 border-t border-hairline">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Why work with them"
        title="Built for credible, premium creative work."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-16">
        {whyPoints.map((p, i) => (
          <WhyItem key={p.title} {...p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const PressCard = ({
  title,
  body,
  action,
  index,
}: {
  title: string;
  body: string;
  action: string;
  index: number;
}) => {
  const ref = useReveal<HTMLDivElement>();
  const handleClick = () =>
    toast({
      title: "Request received",
      description: "Materials will be sent to your inbox shortly.",
    });
  return (
    <div
      ref={ref}
      className="reveal p-8 border border-hairline flex flex-col"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Download size={20} className="text-bronze mb-6" />
      <h3 className="font-serif text-2xl text-offwhite mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 flex-1">{body}</p>
      <button
        onClick={handleClick}
        className="group inline-flex items-center justify-between gap-4 border-t border-hairline pt-4 text-[12px] uppercase tracking-[0.2em] text-offwhite hover:text-bronze transition-colors"
      >
        {action}
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>
    </div>
  );
};

export const PressKit = () => (
  <section className="py-24 md:py-32 border-t border-hairline bg-surface-elevated/40">
    <div className="container-editorial">
      <SectionHeader
        eyebrow="Press kit / downloads"
        title="Materials for professionals."
        description="Request the documents you need for your review process. Files are sent over email after a brief verification."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 mt-14">
        {pressKitItems.map((p, i) => (
          <PressCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
