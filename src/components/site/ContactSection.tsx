import { useState } from "react";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HashLink } from "@/components/site/NavLink";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.mobile.trim()) {
      toast.error("Please add your name and mobile number so we can reply.");
      return;
    }
    const text = `Enquiry for ${site.name}
Name: ${form.name}
Mobile: ${form.mobile}
Message: ${form.message || "Please share more details."}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your enquiry.");
  };

  return (
    <Section id="contact" tone="surface">
      <SectionHeading
        eyebrow="Talk to us"
        title="Contact the Developer"
        intro="You are not writing to a form that goes nowhere. Your message reaches the Sri Gopal Bihar team, and the same team replies."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <p className="font-semibold">Where we are</p>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="block font-medium">Office / project location</span>
                  <span className="text-muted-foreground">{site.contact.officeAddress}</span>
                  <span className="mt-1 block text-muted-foreground">{site.contact.locality}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="block font-medium">Phone</span>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild variant="whatsapp">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp us
                </a>
              </Button>
              <Button asChild variant="quiet">
                <HashLink to="/" hash="site-visit">
                  Schedule a Visit
                </HashLink>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 text-sm text-muted-foreground">
            Site visits are by appointment. Call or message us on WhatsApp and we will confirm a
            time that suits you.
          </div>
        </div>

        <form onSubmit={submit} className="rounded-xl border border-border bg-card p-6 shadow-card">
          <p className="font-semibold">Send an enquiry</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us what you are looking for and we will reply with what we actually know about it.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="c-name">Name</Label>
              <Input
                id="c-name"
                className="mt-1.5"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="c-mobile">Mobile Number</Label>
              <Input
                id="c-mobile"
                className="mt-1.5"
                inputMode="tel"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                placeholder="10-digit mobile number"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-message">Your question</Label>
              <Textarea
                id="c-message"
                className="mt-1.5"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Which property are you interested in, and what would you like to know?"
              />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-5 w-full">
            <Send /> Send enquiry
          </Button>
        </form>
      </div>

    </Section>
  );
}
