import { useState } from "react";
import { CalendarCheck, MapPin, MessageCircle, ShieldQuestion } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { site, properties } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import hero from "@/assets/hero-plot.jpg";

export function SiteVisitSection({ defaultProperty }: { defaultProperty?: string }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    property: defaultProperty ?? properties[0]!.name,
    date: "",
    time: "",
  });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.mobile.trim()) {
      toast.error("Please add your name and mobile number so we can confirm the visit.");
      return;
    }
    const message = `Site visit request for ${site.name}
Name: ${form.name}
Mobile: ${form.mobile}
Property: ${form.property}
Preferred date: ${form.date || "to be discussed"}
Preferred time: ${form.time || "to be discussed"}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your visit request. Our team will confirm the slot.");
  };

  return (
    <Section id="site-visit" tone="surface">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift lg:grid lg:grid-cols-2">
        <div className="relative min-h-64">
          <img
            src={hero}
            alt="Residential plots with marked boundaries and an approach road in Odisha"
            loading="lazy"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-primary-deep/85 p-6 text-primary-foreground">
            <p className="font-display text-xl font-semibold">Visit Before You Decide</p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              Come to the actual project location. Walk the plot, look at the approach road, see the
              surroundings and ask the team whatever you need to know — on the spot.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" /> See the real location, not a rendering
              </li>
              <li className="flex gap-2">
                <ShieldQuestion className="mt-0.5 size-4 shrink-0" /> Ask about documents and status
                in person
              </li>
              <li className="flex gap-2">
                <MessageCircle className="mt-0.5 size-4 shrink-0" /> Talk directly with the{" "}
                {site.name} team
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <SectionHeading eyebrow="Schedule a site visit" title="Request a Site Visit" />
          <p className="mt-3 text-sm text-muted-foreground">
            Fill this in and your request opens as a WhatsApp message to our team, so you always have
            a copy of what you asked for.
          </p>

          <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="sv-name">Name</Label>
              <Input id="sv-name" value={form.name} onChange={update("name")} placeholder="Your full name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="sv-mobile">Mobile Number</Label>
              <Input
                id="sv-mobile"
                value={form.mobile}
                onChange={update("mobile")}
                inputMode="tel"
                placeholder="10-digit mobile number"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="sv-property">Property / Project</Label>
              <select
                id="sv-property"
                value={form.property}
                onChange={update("property")}
                className="mt-1.5 h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {properties.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
            <div>
              <Label htmlFor="sv-date">Preferred Date</Label>
              <Input id="sv-date" type="date" value={form.date} onChange={update("date")} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="sv-time">Preferred Time</Label>
              <Input id="sv-time" type="time" value={form.time} onChange={update("time")} className="mt-1.5" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full">
                <CalendarCheck /> Schedule a Site Visit
              </Button>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Submitting a request costs nothing and commits you to nothing. Visit slots are
                confirmed by our team before you travel.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
