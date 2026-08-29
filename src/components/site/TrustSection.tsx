import {
  FileSearch,
  MapPinned,
  FileCheck2,
  MessagesSquare,
  Map,
  Headphones,
  ListChecks,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { site } from "@/config/site";

const icons: Record<string, LucideIcon> = {
  FileSearch,
  MapPinned,
  FileCheck2,
  MessagesSquare,
  Map,
  Headphones,
  ListChecks,
};

export function TrustSection() {
  return (
    <Section id="why-us" tone="surface">
      <SectionHeading
        eyebrow="Why choose us"
        title={`Why Choose ${site.name}`}
        intro="We would rather be checked than believed. Everything below is something you can test for yourself — by visiting, asking or reading."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {site.trustPoints.map((point) => {
          const Icon = icons[point.icon] ?? ListChecks;
          return (
            <article key={point.title} className="bg-card p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
