import { Star, ExternalLink, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

export function ReviewsSection() {
  const g = site.googleRating;
  return (
    <Section id="reviews" tone="surface">
      <SectionHeading
        eyebrow="Customer reviews"
        title="What Our Customers Say"
        intro="The rating below is taken from our Google Business Profile — an external platform we do not control. As more customers share their experiences there, they will be reflected here."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <p className="inline-flex items-center gap-2 rounded-full bg-verified px-3 py-1 text-xs font-semibold text-verified-foreground">
            Verified external review
          </p>
          <p className="mt-5 font-display text-5xl font-semibold">{g.rating}</p>
          <div className="mt-2 flex gap-0.5 text-clay">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <p className="mt-3 text-sm font-medium">
            Current rating on our {g.source} Business Profile
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {g.source} ratings come from customers posting on {g.source} itself. We cannot edit or
            remove them — what you see there is what was written.
          </p>
          {g.profileUrl ? (
            <Button asChild variant="quiet" size="sm" className="mt-5 w-full">
              <a href={g.profileUrl} target="_blank" rel="noopener noreferrer">
                Read on {g.source} <ExternalLink />
              </a>
            </Button>
          ) : null}
        </div>

        <div className="flex flex-col justify-center rounded-xl border border-border bg-card p-6 shadow-card">
          <p className="font-display text-2xl font-semibold">Trusted by Our Customers</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every review on our Google profile is written by a real customer, in their own words. If
            you have bought from us or visited a site with our team, we would be glad to hear how it
            went.
          </p>
          <div className="mt-6">
            <Button asChild variant="whatsapp">
              <a
                href={whatsappLink(`Hello, I would like to share my experience with ${site.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> Share your experience
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
