import type { ComponentType, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

const AnyLink = Link as unknown as ComponentType<Record<string, unknown>>;

/** Link helper that works with or without a hash target (exactOptionalPropertyTypes-safe). */
export function HashLink({
  to,
  hash,
  className,
  onClick,
  children,
}: {
  to: string;
  hash?: string | undefined;
  className?: string | undefined;
  onClick?: (() => void) | undefined;
  children: ReactNode;
}) {
  return (
    <AnyLink
      to={to}
      {...(hash ? { hash } : {})}
      {...(className ? { className } : {})}
      {...(onClick ? { onClick } : {})}
    >
      {children}
    </AnyLink>
  );
}
