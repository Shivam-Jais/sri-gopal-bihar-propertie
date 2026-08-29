import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export function LegalPage({
  title,
  note,
  sections,
}: {
  title: string;
  note?: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <Header />
      <main className="bg-background">
        <div className="container-page max-w-3xl py-14 md:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="mt-6 text-4xl">{title}</h1>
          {note ? (
            <p className="mt-4 rounded-md border border-dashed border-input bg-pending px-4 py-3 text-sm text-pending-foreground">
              {note}
            </p>
          ) : null}
          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl">{s.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
