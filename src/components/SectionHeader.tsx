import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, description, align = "left", className }: Props) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "reveal max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <div className="label-eyebrow mb-5">{eyebrow}</div>}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-offwhite">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
