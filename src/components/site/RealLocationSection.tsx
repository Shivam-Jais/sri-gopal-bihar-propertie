import { Compass, Landmark, MessageCircle, CalendarCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { HashLink } from "@/components/site/NavLink";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import aerial from "@/assets/location-aerial.jpg";

const items = [
  {
    icon: Compass,
    title: "Explore the property location",
    body: "We share the locality and the exact position of the property on request, with a map link.",
  },
  {
    icon: Landmark,
    title: "See nearby facilities",
    body: "Roads, schools, markets, temples and transport — what is genuinely close, and what is not.",
  },
  {
    icon: MessageCircle,
    title: "Request information",
    body: "Ask for plot details, availability or pricing for a specific property.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule an actual visit",
    body: "Pick a date and time and meet our team at the site itself.",
  },
];

export function RealLocationSection() {
  return (
    <Section id="location">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <figure className="order-2 overflow-hidden rounded-xl border border-border shadow-lift lg:order-1">
          <img
            src={aerial}
            alt="Aerial view of a semi-urban Odisha neighbourhood with houses, fields and a temple"
            loading="lazy"
            width={1408}
            height={912}
            className="h-full w-full object-cover"
          />
          <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">
            Representative view of the surrounding area. Actual project location shared on request
            and confirmed on site.
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Location first"
            title="Real Location. Real Property. Real Conversation."
            intro={`${site.name} is a place you can drive to, not a listing that disappears. Here is what that means in practice.`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <item.icon className="size-5 text-primary" />
                <p className="mt-3 font-semibold">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.contact.mapUrl ? (
              <Button asChild size="lg">
                <a href={site.contact.mapUrl} target="_blank" rel="noopener noreferrer">
                  Open location in Maps
                </a>
              </Button>
            ) : (
              <p className="rounded-md border border-dashed border-input bg-pending px-3 py-2 text-xs text-pending-foreground">
                Map link to be added by owner — location shared on request meanwhile.
              </p>
            )}
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={whatsappLink(`Hello, please share the exact location of ${site.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask for the location
              </a>
            </Button>
            <Button asChild variant="quiet" size="lg">
              <HashLink to="/" hash="site-visit">
                Schedule a Visit
              </HashLink>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
