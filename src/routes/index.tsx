import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { PropertiesSection } from "@/components/site/PropertiesSection";
import { TrustSection } from "@/components/site/TrustSection";
import { LegalDocsSection } from "@/components/site/LegalDocsSection";
import { TransparentBuyingSection } from "@/components/site/TransparentBuyingSection";
import { TrustStepsSection } from "@/components/site/TrustStepsSection";
import { RealLocationSection } from "@/components/site/RealLocationSection";
import { SiteVisitSection } from "@/components/site/SiteVisitSection";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { CustomerStoriesSection } from "@/components/site/CustomerStoriesSection";
import { FaqSection } from "@/components/site/FaqSection";
import { ContactSection } from "@/components/site/ContactSection";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Gopal Bihar | Residential Plots & Homes in Odisha" },
      {
        name: "description",
        content:
          "Visit the real location, review available documents and speak directly with the Sri Gopal Bihar team before you decide. Site visits available on request.",
      },
      { property: "og:title", content: "Sri Gopal Bihar | Residential Plots & Homes in Odisha" },
      {
        property: "og:description",
        content:
          "Transparent property information, site visits and direct developer communication in Odisha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropertiesSection />
        <TrustSection />
        <TransparentBuyingSection />
        <TrustStepsSection />
        <LegalDocsSection />
        <RealLocationSection />
        <SiteVisitSection />
        <ReviewsSection />
        <CustomerStoriesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
