import { Download, FileText, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function LegalDocsSection({
  documents = site.legalDocuments,
  showHeading = true,
}: {
  documents?: { title: string; note: string; url?: string }[];
  showHeading?: boolean;
}) {
  return (
    <Section id="legal" tone="default">
      {showHeading ? (
        <SectionHeading
          eyebrow="Legal & documentation"
          title="Legal & Documentation"
          intro="This is where the paperwork lives. Each card below is a document type that may apply to our projects. A document appears here only once it has been provided to us — until then, the card says so plainly."
        />
      ) : (
        <p className="eyebrow">Documents applicable to our projects</p>
      )}

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {documents.map((doc) => {
          const available = Boolean(doc.url);
          return (
            <article
              key={doc.title}
              className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-surface-strong text-primary">
                  <FileText className="size-5" />
                </span>
                {available ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-verified px-2.5 py-1 text-[0.7rem] font-semibold text-verified-foreground">
                    <ShieldCheck className="size-3.5" /> Document Available
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-1 text-[0.7rem] font-semibold text-muted-foreground">
                    Not provided
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-base font-semibold">{doc.title}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{doc.note}</p>

              <div className="mt-4">
                {available ? (
                  <Button asChild size="sm" className="w-full">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      <Download /> View / Download
                    </a>
                  </Button>
                ) : (
                  <p className="rounded-md bg-surface px-3 py-2 text-center text-xs font-medium text-muted-foreground">
                    Document not currently available
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
