import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HashLink } from "@/components/site/NavLink";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

const nav = [
  { label: "Projects", to: "/", hash: "projects" },
  { label: "Why Us", to: "/", hash: "why-us" },
  { label: "Legal & Documentation", to: "/legal-documentation", hash: undefined },
  { label: "Reviews", to: "/", hash: "reviews" },
  { label: "FAQ", to: "/", hash: "faq" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-deep font-display text-sm font-semibold text-primary-foreground">
            SG
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold">{site.name}</span>
            <span className="block text-[0.7rem] text-muted-foreground">{site.contact.locality}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <HashLink
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="whatsapp" size="sm" className="hidden sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> WhatsApp
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <HashLink to="/" hash="site-visit">
              Schedule a Visit
            </HashLink>
          </Button>
          <Button
            variant="quiet"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <HashLink
                key={item.label}
                to={item.to}
                hash={item.hash}
                className="border-b border-border/60 py-3 text-sm last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </HashLink>
            ))}
            <div className="flex gap-2 pt-3">
              <Button asChild variant="whatsapp" size="sm" className="flex-1">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <HashLink to="/" hash="site-visit" onClick={() => setOpen(false)}>
                  Schedule a Visit
                </HashLink>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
