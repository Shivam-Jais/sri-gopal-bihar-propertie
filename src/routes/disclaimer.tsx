import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Sri Gopal Bihar" },
      {
        name: "description",
        content:
          "What the Sri Gopal Bihar website does and does not claim: no certifications, approvals or verified statistics are asserted without owner-supplied documents.",
      },
      { property: "og:title", content: "Disclaimer | Sri Gopal Bihar" },
      {
        property: "og:description",
        content: "What this website claims and what remains to be confirmed by the owner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      note="This page states plainly what is confirmed and what is still placeholder content."
      sections={[
        {
          heading: "No certifications or approvals are claimed",
          body: `This website does not claim any RERA registration, government approval, certification, legal verification or licence. If and when such documents are provided by the owner, they will be published in the Legal & Documentation section and clearly identified.`,
        },
        {
          heading: "Demo and placeholder content",
          body: `Some content on this website is marked as sample or placeholder for presentation purposes — including sample testimonials, placeholder phone number, email and address. Sample testimonials are not statements by real customers.`,
        },
        {
          heading: "Verified external review",
          body: `The Google rating shown is the rating currently visible on Google for this business. It reflects a single Google review and is presented as an external indicator only.`,
        },
        {
          heading: "No statistics or history claimed",
          body: `We do not publish counts of units sold, years in business, awards or customer numbers. Any such figure will appear only when the owner supplies it.`,
        },
        {
          heading: "Pricing and availability",
          body: `No price is published on this website. Pricing and availability are shared on request for the specific property and can change.`,
        },
      ]}
    />
  );
}
