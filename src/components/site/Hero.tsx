import { MapPin, MessageCircle, ShieldQuestion, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HashLink } from "@/components/site/NavLink";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import hero from "@/assets/hero-plot.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container-page grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-primary" /> {site.contact.locality} · Residential plots
            &amp; homes
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] md:text-6xl">{site.tagline}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {site.shortIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="xl">
              <HashLink to="/" hash="site-visit">
                Schedule a Site Visit
              </HashLink>
            </Button>
            <Button asChild size="xl" variant="whatsapp">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Ask on WhatsApp
              </a>
            </Button>
            <Button asChild size="xl" variant="quiet">
              <HashLink to="/legal-documentation">Legal &amp; Documentation</HashLink>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-6 text-sm">
            <p className="flex items-center gap-2">
              <Star className="size-4 fill-current text-clay" />
              <span>
                <span className="font-semibold">{site.googleRating.rating}</span> on{" "}
                {site.googleRating.source} ({site.googleRating.reviewCount} review)
              </span>
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <ShieldQuestion className="size-4 text-primary" /> No certifications or approvals
              claimed on this site
            </p>
          </div>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-border shadow-lift">
          <img
            src={hero}
            alt="Residential plots at Sri Gopal Bihar with marked white boundary stones and a paved approach road"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
          <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">
            Reference photograph of a plotted development. To be replaced with the owner's own site
            photographs.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
