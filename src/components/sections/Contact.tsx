import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Instagram, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeader } from "@/components/SectionHeader";
import { toast } from "@/hooks/use-toast";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  inquiry: z.string().min(1, "Please select an inquiry type"),
  details: z.string().trim().min(10, "Please add a few words about your project").max(1500),
  timeline: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
});

type InquiryValues = z.infer<typeof inquirySchema>;

const inquiryTypes = [
  "Brand Collaboration",
  "Sponsored Content",
  "Casting / Production",
  "Modeling / Editorial",
  "Ambassador Program",
  "Other",
];

export const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", company: "", email: "", inquiry: "", details: "", timeline: "", budget: "" },
  });

  const inquiryValue = watch("inquiry");

  const onSubmit = async (values: InquiryValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast({
      title: "Inquiry received",
      description: `Thanks ${values.name}. We will reply within 48 hours.`,
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Contact"
              title="Let's collaborate."
              description="For collaborations, casting opportunities, productions, and partnership inquiries, please get in touch."
            />

            <div className="mt-12 space-y-1">
              <ContactRow icon={<Mail size={16} />} label="Email" value="hello@biteproject.it" href="mailto:hello@biteproject.it" />
              <ContactRow icon={<Instagram size={16} />} label="Instagram" value="@pack.bite" href="https://instagram.com" />
              <ContactRow icon={<MessageCircle size={16} />} label="WhatsApp" value="Message us directly" href="https://wa.me/00000000000" />
              <ContactRow icon={<MapPin size={16} />} label="Based in" value="Italy — available worldwide" />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" error={errors.name?.message}>
                <Input {...register("name")} placeholder="Your name" className="rounded-none border-x-0 border-t-0 border-b border-hairline bg-transparent px-0 focus-visible:ring-0 focus-visible:border-bronze" />
              </Field>
              <Field label="Company / Agency" error={errors.company?.message}>
                <Input {...register("company")} placeholder="Optional" className="rounded-none border-x-0 border-t-0 border-b border-hairline bg-transparent px-0 focus-visible:ring-0 focus-visible:border-bronze" />
              </Field>
            </div>

            <Field label="Email" error={errors.email?.message}>
              <Input {...register("email")} type="email" placeholder="you@company.com" className="rounded-none border-x-0 border-t-0 border-b border-hairline bg-transparent px-0 focus-visible:ring-0 focus-visible:border-bronze" />
            </Field>

            <Field label="Type of inquiry" error={errors.inquiry?.message}>
              <Select value={inquiryValue} onValueChange={(v) => setValue("inquiry", v, { shouldValidate: true })}>
                <SelectTrigger className="rounded-none border-x-0 border-t-0 border-b border-hairline bg-transparent px-0 focus:ring-0 focus:border-bronze">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Project details" error={errors.details?.message}>
              <Textarea {...register("details")} rows={5} placeholder="Tell us about the project, scope, and any references." className="rounded-none border-x-0 border-t-0 border-b border-hairline bg-transparent px-0 focus-visible:ring-0 focus-visible:border-bronze resize-none" />
            </Field>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Timeline">
                <Input {...register("timeline")} placeholder="e.g. Q2 2026" className="rounded-none border-x-0 border-t-0 border-b border-hairline bg-transparent px-0 focus-visible:ring-0 focus-visible:border-bronze" />
              </Field>
              <Field label="Budget range">
                <Input {...register("budget")} placeholder="Optional" className="rounded-none border-x-0 border-t-0 border-b border-hairline bg-transparent px-0 focus-visible:ring-0 focus-visible:border-bronze" />
              </Field>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-between gap-6 bg-bronze text-primary-foreground h-14 px-8 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-bronze/90 transition-colors disabled:opacity-60 mt-4"
            >
              {isSubmitting ? "Sending..." : "Send inquiry"}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="label-eyebrow">{label}</Label>
    {children}
    {error && <p className="text-[12px] text-destructive">{error}</p>}
  </div>
);

const ContactRow = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => {
  const Inner = (
    <div className="flex items-center justify-between py-5 border-t border-hairline group">
      <div className="flex items-center gap-4">
        <span className="text-bronze">{icon}</span>
        <span className="label-eyebrow">{label}</span>
      </div>
      <span className="text-offwhite group-hover:text-bronze transition-colors">{value}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{Inner}</a> : Inner;
};
