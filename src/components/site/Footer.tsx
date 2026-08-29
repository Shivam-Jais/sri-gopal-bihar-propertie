import { Link } from "@tanstack/react-router";
import { HashLink } from "@/components/site/NavLink";
import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { site, properties } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
            {site.shortIntro}
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            Company information (registration, ownership and history) will be published here once
            provided by the owner.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
            Projects
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {properties.map((p) => (
              <li key={p.slug}>
                <HashLink
                  to={`/property/${p.slug}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {p.name}
                </HashLink>
              </li>
            ))}
            <li>
              <HashLink to="/" hash="projects" className="text-primary-foreground/80 hover:text-primary-foreground">
                Upcoming Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/legal-documentation"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                Legal &amp; Documentation
              </HashLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{site.contact.officeAddress}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="underline-offset-4 hover:underline"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                WhatsApp us
              </a>
            </li>
            <li>
              <HashLink to="/" hash="site-visit" className="underline underline-offset-4">
                Schedule a Visit
              </HashLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
            Reviews &amp; Policies
          </p>
          <div className="mt-4 rounded-md border border-primary-foreground/20 p-3">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Star className="size-4 fill-current" /> {site.googleRating.rating} on{" "}
              {site.googleRating.source}
            </p>
            <p className="mt-1 text-xs text-primary-foreground/70">
              Based on {site.googleRating.reviewCount} Google review.
            </p>
            {site.contact.googleBusinessUrl ? (
              <a
                href={site.contact.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs underline underline-offset-4"
              >
                Google Business Profile
              </a>
            ) : (
              <p className="mt-2 text-xs text-primary-foreground/60">
                Google Business Profile link to be added.
              </p>
            )}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/privacy" className="hover:text-primary-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary-foreground">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-primary-foreground">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            This website displays only information provided by the owner. No approval, registration
            or certification is claimed unless a document is published in the Legal &amp;
            Documentation section.
          </p>
        </div>
      </div>
    </footer>
  );
}
