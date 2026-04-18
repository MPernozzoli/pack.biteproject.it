import { instagramProfile, navLinks } from "@/data/site";

export const Footer = () => (
  <footer className="border-t border-hairline pt-16 pb-10">
    <div className="container-editorial">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-serif text-2xl text-offwhite">PACK</span>
            <span className="label-eyebrow text-bronze">/ BITE</span>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-offwhite/90 leading-tight max-w-md">
            Godot &amp; Freyja — talent for premium campaigns and casting.
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-7">
          <div className="label-eyebrow mb-5">Navigate</div>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-sm text-muted-foreground hover:text-offwhite transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="label-eyebrow mb-5">Connect</div>
          <ul className="space-y-3 text-sm">
            <li><a href="mailto:hello@biteproject.it" className="text-muted-foreground hover:text-offwhite transition-colors">hello@biteproject.it</a></li>
            <li><a href={instagramProfile.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-offwhite transition-colors">Instagram</a></li>
            <li><a href="https://wa.me/00000000000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-offwhite transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-hairline flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} PACK / BITE Project. All rights reserved.</span>
        <span>pack.biteproject.it</span>
      </div>
    </div>
  </footer>
);
