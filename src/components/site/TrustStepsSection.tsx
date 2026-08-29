import { Section, SectionHeading } from "@/components/site/Section";
import { site } from "@/config/site";

export function TrustStepsSection() {
  return (
    <Section id="process" tone="deep">
      <SectionHeading
        eyebrow="The process"
        title="Trust at Every Step"
        intro="Eight steps, in order, with nothing skipped and nothing hidden. You can stop at any step and ask for more before moving on."
        invert
      />

      <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
        {site.trustSteps.map((step, i) => (
          <li key={step.title} className="bg-primary-deep p-6">
            <span className="inline-flex size-9 items-center justify-center rounded-md border border-primary-foreground/25 font-display text-sm font-semibold">
              {i + 1}
            </span>
            <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-2xl text-sm text-primary-foreground/70">
        Documents reviewed at step five are those applicable to the specific property and available
        at that time. Where a document is pending, we tell you it is pending.
      </p>
    </Section>
  );
}
