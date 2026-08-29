import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

const topics = [
  { title: "The property", body: "What you bought, and how it compared to what you expected." },
  { title: "The site visit", body: "How the visit was arranged and what you were shown." },
  { title: "Documentation", body: "How the paperwork was explained and handled." },
  { title: "Purchase process", body: "How the booking and purchase steps went." },
  { title: "After-sales support", body: "What happened after the purchase was complete." },
];

export function CustomerStoriesSection() {
  return (
    <Section id="customer-stories">
      <SectionHeading
        eyebrow="Customer stories"
        title="Customer Stories"
        intro="This space is reserved for verified buyers. As families complete their purchase, their own account of the experience will be published here — in their words, with their permission."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {topics.map((t, i) => (
          <article
            key={t.title}
            className="rounded-xl border border-border bg-card p-5 shadow-card"
          >
            <span className="font-display text-sm font-semibold text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-semibold">{t.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6 md:flex md:items-center md:justify-between md:gap-6">
        <div>
          <p className="font-semibold">Have you bought from us?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We publish customer stories only with the buyer's permission, in their own words. If you
            would like to share yours, we would be glad to hear it.
          </p>
        </div>
        <Button asChild variant="solid" className="mt-4 shrink-0 md:mt-0">
          <a
            href={whatsappLink(`Hello, I have purchased from ${site.name} and would like to share my customer story.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share your story
          </a>
        </Button>
      </div>
    </Section>
  );
}
