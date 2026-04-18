import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { profiles, type DogProfile } from "@/data/profiles";
import { SectionHeader } from "@/components/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="border-t border-hairline py-4 grid grid-cols-3 gap-4">
    <div className="label-eyebrow col-span-1">{label}</div>
    <div className="col-span-2 text-sm text-offwhite/90 leading-relaxed">{value}</div>
  </div>
);

const ProfilePanel = ({ p }: { p: DogProfile }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal grid lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={p.image}
            alt={`${p.name} — ${p.breed}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="mt-6">
          <div className="label-eyebrow text-bronze mb-2">Talent card</div>
          <h3 className="font-serif text-5xl md:text-6xl text-offwhite leading-none">
            {p.name}
          </h3>
          <p className="mt-3 text-muted-foreground">{p.breed}</p>
        </div>
      </div>

      <div className="lg:col-span-7">
        <Field label="Sex" value={p.sex} />
        <Field label="Year of birth" value={p.born} />
        <Field label="Weight" value={p.weight} />
        <Field label="Height" value={p.height} />
        <Field label="Coat" value={p.coat} />
        <Field label="Base location" value={p.base} />
        <Field label="Passport" value={p.passport} />
        <Field label="Vaccinations" value={p.vaccinations} />
        <Field label="Temperament" value={p.temperament} />

        <div className="border-t border-hairline pt-6 mt-6">
          <div className="label-eyebrow mb-3">Strengths on set</div>
          <ul className="space-y-2">
            {p.strengths.map((s) => (
              <li key={s} className="text-sm text-offwhite/90 flex gap-3">
                <span className="text-bronze">—</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-hairline pt-6 mt-6">
          <div className="label-eyebrow mb-3">Commands known</div>
          <div className="flex flex-wrap gap-2">
            {p.commands.map((c) => (
              <span
                key={c}
                className="text-[12px] uppercase tracking-[0.14em] border border-hairline text-offwhite/80 px-3 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-hairline pt-6 mt-6">
          <div className="label-eyebrow mb-3">Suitable environments</div>
          <div className="flex flex-wrap gap-2">
            {p.environments.map((e) => (
              <span
                key={e}
                className="text-[12px] uppercase tracking-[0.14em] bg-secondary text-offwhite/80 px-3 py-1.5"
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-hairline pt-6 mt-6">
          <div className="label-eyebrow mb-3">Notes for handlers / production</div>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.handlerNotes}</p>
        </div>
      </div>
    </div>
  );
};

export const Profiles = () => {
  const [tab, setTab] = useState<"godot" | "freyja">("godot");
  return (
    <section id="profiles" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Individual profiles"
          title="Two distinct talents. One unified portfolio."
          description="Bookable individually or together. Each profile is presented as a polished talent card for easy review by agencies and casting teams."
        />
        <Tabs value={tab} onValueChange={(v) => setTab(v as "godot" | "freyja")} className="mt-12">
          <TabsList className="bg-transparent rounded-none p-0 h-auto border-b border-hairline w-full justify-start gap-0">
            {profiles.map((p) => (
              <TabsTrigger
                key={p.id}
                value={p.id}
                className="rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-bronze text-muted-foreground border-b-2 border-transparent data-[state=active]:border-bronze px-6 md:px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-medium"
              >
                {p.name} · {p.breed.split(" ").pop()}
              </TabsTrigger>
            ))}
          </TabsList>
          {profiles.map((p) => (
            <TabsContent key={p.id} value={p.id} className="mt-0">
              <ProfilePanel p={p} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
