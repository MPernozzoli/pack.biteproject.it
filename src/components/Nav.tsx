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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent",
      )}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-serif text-xl text-offwhite tracking-tight">PACK</span>
          <span className="label-eyebrow text-bronze">/ BITE</span>
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
            className="bg-bronze hover:bg-bronze/90 text-primary-foreground rounded-none px-5 h-9 text-[12px] uppercase tracking-[0.18em] font-medium"
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

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl",
          open ? "max-h-[480px] border-t border-hairline" : "max-h-0",
        )}
      >
        <nav className="container-editorial flex flex-col py-6 gap-4">
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
            className="mt-4 inline-flex items-center justify-center bg-bronze text-primary-foreground h-11 px-6 text-[12px] uppercase tracking-[0.18em] font-medium"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};
