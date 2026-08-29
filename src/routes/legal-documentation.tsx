import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { LegalDocsSection } from "@/components/site/LegalDocsSection";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/legal-documentation")({
  head: () => ({
    meta: [
      { title: "Legal & Documentation | Sri Gopal Bihar" },
      {
        name: "description",
        content:
          "Document types applicable to Sri Gopal Bihar projects. Each document is published here only when provided by the owner — nothing is claimed or implied before that.",
      },
      { property: "og:title", content: "Legal & Documentation | Sri Gopal Bihar" },
      {
        property: "og:description",
        content:
          "Land documents, layout, approvals and title records — published as and when provided by the owner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LegalDocumentation,
});

function LegalDocumentation() {
  return (
    <>
      <Header />
      <main>
        <div className="border-b border-border bg-primary-deep text-primary-foreground">
          <div className="container-page py-14 md:py-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground"
            >
              <ArrowLeft className="size-4" /> Back to home
            </Link>
            <h1 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
              Legal &amp; Documentation
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
              This page exists so you never have to take our word for it. Every document type that
              may apply to a {site.name} property is listed below. A card shows a document only when
              the owner has provided the actual file — otherwise it plainly says the document will be
              available here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={whatsappLink(
                    `Hello, please share the documents available for ${site.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Request available documents
                </a>
              </Button>
            </div>
          </div>
        </div>

        <LegalDocsSection showHeading={false} />

        <div className="container-page pb-20">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 className="text-xl">What we will never do here</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                • Display a RERA number, approval reference or certificate that has not been issued
                and supplied to us.
              </li>
              <li>• Mark a document “verified” when no document has been uploaded.</li>
              <li>
                • Claim legal status, fraud-free guarantees or document verification on your behalf.
              </li>
              <li>
                • Prevent you from checking any document independently with your own advisor or the
                relevant office.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
