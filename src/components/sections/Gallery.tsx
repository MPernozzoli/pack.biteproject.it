import { useState } from "react";
import { X } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export const Gallery = () => {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryItems.filter((g) => filter === "All" || g.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Gallery"
          title="Selected imagery."
          description="A curated visual reference across portraits, lifestyle, outdoor, and product contexts. Click any image for a closer look."
        />

        <div className="flex flex-wrap gap-2 mt-10 mb-10">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 border transition-colors",
                filter === c
                  ? "bg-bronze border-bronze text-primary-foreground"
                  : "border-hairline text-muted-foreground hover:text-offwhite hover:border-offwhite/40",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
          {filtered.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative block w-full mb-3 md:mb-4 break-inside-avoid overflow-hidden cursor-zoom-in"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="label-eyebrow bg-background/70 backdrop-blur px-2 py-1 text-offwhite">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-offwhite hover:text-bronze transition-colors p-2"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};
