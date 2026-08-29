import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { LegalDocsSection } from "@/components/site/LegalDocsSection";
import { SiteVisitSection } from "@/components/site/SiteVisitSection";
import { TrustStepsSection } from "@/components/site/TrustStepsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { ContactSection } from "@/components/site/ContactSection";
import { propertyImages } from "@/components/site/PropertiesSection";
import { Button } from "@/components/ui/button";
import { properties, site } from "@/config/site";
import { propertyEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/property/$slug")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.slug === params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.property.name ?? "Property";
    const location = loaderData?.property.location ?? site.contact.locality;
    return {
      meta: [
        { title: `${name} | Sri Gopal Bihar` },
        {
          name: "description",
          content: `${name} at ${location}. Visit the site, review the applicable documents and ask us directly — pricing and availability shared on request.`,
        },
        { property: "og:title", content: `${name} | Sri Gopal Bihar` },
        {
          property: "og:description",
          content: `${name} at ${location}. Site visits available; documents shared as provided.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PropertyPage,
});

function PropertyPage() {
  const { property } = Route.useLoaderData();
  const message = propertyEnquiryMessage(property.name, property.location);

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border bg-background">
          <div className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="size-4" /> All projects
              </Link>
              <span className="mt-6 inline-flex rounded-full bg-accent px-2.5 py-1 text-[0.7rem] font-semibold text-accent-foreground">
                {property.type}
              </span>
              <h1 className="mt-4 text-4xl leading-tight md:text-5xl">{property.name}</h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" /> {property.location}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {property.summary}
              </p>

              <ul className="mt-6 space-y-2">
                {property.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="xl" variant="whatsapp">
                  <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> Ask about this property
                  </a>
                </Button>
                <Button asChild size="xl">
                  <a href="#site-visit">Schedule a Site Visit</a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-border bg-card p-4 text-sm">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Status</p>
                  <p className="mt-1 font-medium">{property.status}</p>
                </div>
                <div className="rounded-md border border-dashed border-input bg-pending p-4 text-sm text-pending-foreground">
                  <p className="text-xs uppercase tracking-wider">Price</p>
                  <p className="mt-1 font-medium">Shared on request — no figure published here</p>
                </div>
              </div>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-border shadow-lift">
              <img
                src={propertyImages[property.image]}
                alt={property.name}
                width={1408}
                height={1000}
                className="h-full w-full object-cover"
              />
              <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">
                Reference photograph. Actual project photographs to be provided by the owner.
              </figcaption>
            </figure>
          </div>
        </section>

        <TrustStepsSection />
        <LegalDocsSection />
        <SiteVisitSection defaultProperty={property.name} />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat message={message} />
    </>
  );
}
