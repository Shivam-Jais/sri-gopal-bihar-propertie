import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Sri Gopal Bihar" },
      {
        name: "description",
        content:
          "Terms for using the Sri Gopal Bihar website, including how property information and enquiries are treated.",
      },
      { property: "og:title", content: "Terms of Use | Sri Gopal Bihar" },
      {
        property: "og:description",
        content: "Terms for using the Sri Gopal Bihar website and its property information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      note="Sample terms for the demo. The owner should review and confirm this wording before publishing."
      sections={[
        {
          heading: "Information on this website",
          body: `Property details shown here are provided for information. Sizes, availability and pricing can change, so please confirm the current position with our team before acting on anything you read here.`,
        },
        {
          heading: "No offer or guarantee",
          body: `Nothing on this website is a binding offer, a legal opinion or a guarantee of approval, registration or investment return. Any commitment happens only through signed documentation.`,
        },
        {
          heading: "Enquiries",
          body: `By submitting an enquiry or site-visit request you agree that we may contact you by phone, WhatsApp or email to respond.`,
        },
        {
          heading: "Documents",
          body: `Documents are published in the Legal & Documentation section only when supplied by the owner. Where a document has not been supplied, the card states that it will be available there — no document is implied to exist until it is published.`,
        },
        {
          heading: "Independent verification",
          body: `We encourage every buyer to inspect the site, review the applicable documentation and take independent legal advice before purchase.`,
        },
      ]}
    />
  );
}
