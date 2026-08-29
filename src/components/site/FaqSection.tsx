import { Section, SectionHeading } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

export function FaqSection() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            intro="The questions buyers actually ask us, answered without spin. If your question is not here, send it — we will answer it directly."
          />
          <Button asChild variant="whatsapp" className="mt-6">
            <a
              href={whatsappLink(`Hello, I have a question about ${site.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask your question
            </a>
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {site.faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
