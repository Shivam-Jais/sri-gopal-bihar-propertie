import { Eye, FileSearch, MapPin, MessageSquare, HelpCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { HashLink } from "@/components/site/NavLink";
import { whatsappLink } from "@/lib/whatsapp";
import siteVisitImg from "@/assets/site-visit.jpg";

const rows = [
  {
    icon: Eye,
    title: "Inspect the property details",
    body: "Type, plot layout, boundaries and current status — as recorded, not as marketing.",
  },
  {
    icon: MapPin,
    title: "Visit the location",
    body: "Stand on the land, see the approach road and judge the surroundings yourself.",
  },
  {
    icon: HelpCircle,
    title: "Ask your questions",
    body: "Anything you want to know about the property, the process or what is still pending.",
  },
  {
    icon: FileSearch,
    title: "Review applicable documentation",
    body: "Go through the documents available for that property, at your own pace and with your own advisor.",
  },
  {
    icon: MessageSquare,
    title: "Talk to the developer directly",
    body: "The same team from your first message to your last question after purchase.",
  },
];

export function TransparentBuyingSection() {
  return (
    <Section id="transparent-buying" tone="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="How buying works here"
            title="Transparent Property Buying"
            intro="You do not have to decide from a photograph. Before anything is committed, you are invited to check the property in the ways that matter."
          />

          <ul className="mt-8 space-y-5">
            {rows.map((row) => (
              <li key={row.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-primary">
                  <row.icon className="size-4" />
                </span>
                <div>
                  <p className="font-semibold">{row.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{row.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <HashLink to="/" hash="site-visit">
                Schedule a Site Visit
              </HashLink>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Ask a question on WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            We do not give legal guarantees and we do not promise approvals. What we promise is
            access: to the site, to the people and to the documentation we hold.
          </p>
        </div>

        <figure className="overflow-hidden rounded-xl border border-border shadow-lift">
          <img
            src={siteVisitImg}
            alt="Sri Gopal Bihar team explaining a plot layout sheet to visitors on site"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-full w-full object-cover"
          />
          <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">
            Reference photograph. Project photographs to be replaced with the owner's own site
            images.
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
