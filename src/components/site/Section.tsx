import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "deep";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-16 md:py-24",
        tone === "surface" && "bg-surface",
        tone === "deep" && "bg-primary-deep text-primary-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("eyebrow", invert && "text-primary-foreground/70")}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl leading-tight md:text-[2.6rem]">{title}</h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-foreground",
            invert && "text-primary-foreground/75",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
