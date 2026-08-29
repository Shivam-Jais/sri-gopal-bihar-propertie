import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { HashLink } from "@/components/site/NavLink";
import { properties } from "@/config/site";
import { propertyEnquiryMessage, whatsappLink } from "@/lib/whatsapp";
import plot from "@/assets/hero-plot.jpg";
import house from "@/assets/house.jpg";
import aerial from "@/assets/location-aerial.jpg";

export const propertyImages = { plot, house, aerial };

export function PropertiesSection() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Our Projects & Upcoming Phases"
        intro="Each project page tells you what we know, what is pending and how to see it in person. Pricing is shared on request — we do not publish figures we cannot honour."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {properties.map((p) => (
          <article
            key={p.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
          >
            <img
              src={propertyImages[p.image]}
              alt={p.name}
              loading="lazy"
              width={1408}
              height={900}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
              <span className="inline-flex w-fit rounded-full bg-accent px-2.5 py-1 text-[0.7rem] font-semibold text-accent-foreground">
                {p.type}
              </span>
              <h3 className="mt-3 text-lg">{p.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> {p.location}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <p className="mt-4 text-xs font-medium text-primary">{p.status}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <HashLink to={`/property/${p.slug}`}>
                    View details <ArrowRight />
                  </HashLink>
                </Button>
                <Button asChild size="sm" variant="whatsapp">
                  <a
                    href={whatsappLink(propertyEnquiryMessage(p.name, p.location))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
