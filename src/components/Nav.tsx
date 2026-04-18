import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 lg:px-8",
        scrolled ? "pt-3 md:pt-4" : "pt-5 md:pt-6",
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1380px] rounded-[28px] border border-offwhite/10 bg-background/70 shadow-[0_22px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500",
          scrolled ? "bg-background/82" : "bg-background/60",
        )}
      >
        <div className="relative flex items-center justify-between h-16 md:h-20 px-5 md:px-7 lg:px-8">
          <div className="absolute -top-3 left-5 md:left-7 lg:left-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-offwhite/10 bg-secondary/90 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-offwhite/70 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
              Bite Project
            </span>
          </div>

          <a href="#top" className="group pr-4">
            <span className="block font-serif text-[1.35rem] leading-none text-offwhite tracking-tight">
              BITE&apos;s PACK
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-bronze transition-colors">
              Godot &amp; Freyja
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-[13px] tracking-wide text-muted-foreground hover:text-offwhite transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-bronze hover:bg-bronze/90 text-primary-foreground px-5 h-10 text-[12px] uppercase tracking-[0.18em] font-medium"
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-offwhite p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto mt-3 w-full max-w-[1380px] overflow-hidden rounded-[28px] border border-offwhite/10 bg-background/92 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0 border-transparent mt-0",
        )}
      >
        <nav className="flex flex-col py-6 px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="text-base text-offwhite/90 hover:text-bronze transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-bronze text-primary-foreground h-11 px-6 text-[12px] uppercase tracking-[0.18em] font-medium"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};
