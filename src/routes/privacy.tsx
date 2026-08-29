import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sri Gopal Bihar" },
      {
        name: "description",
        content:
          "How Sri Gopal Bihar handles enquiry details such as your name, mobile number and preferred site-visit time.",
      },
      { property: "og:title", content: "Privacy Policy | Sri Gopal Bihar" },
      {
        property: "og:description",
        content: "How enquiry and site-visit details shared with Sri Gopal Bihar are used.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      note="Sample policy text for the demo. The owner should review and confirm this wording before publishing."
      sections={[
        {
          heading: "What we collect",
          body: `When you submit an enquiry or a site-visit request, we receive the details you type into the form — typically your name, mobile number, the property you are interested in and your preferred visit date and time.`,
        },
        {
          heading: "How we use it",
          body: `We use these details only to respond to your enquiry, confirm a site visit and share property information you asked for. We do not sell your details.`,
        },
        {
          heading: "WhatsApp and phone",
          body: `If you contact us on WhatsApp, that conversation is handled through WhatsApp's own platform and is subject to their terms and privacy practices.`,
        },
        {
          heading: "Retention and removal",
          body: `You can ask us to remove your enquiry details at any time by contacting us on the number or email listed in the Contact section. Contact details marked as placeholders will be replaced with the owner's verified details.`,
        },
        {
          heading: "Questions",
          body: `For any question about this policy, contact ${site.name} using the details in the Contact section of this website.`,
        },
      ]}
    />
  );
}
