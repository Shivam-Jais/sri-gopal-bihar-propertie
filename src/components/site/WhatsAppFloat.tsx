import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

/** Persistent WhatsApp entry point. Pass a property-specific message where relevant. */
export function WhatsAppFloat({ message }: { message?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lift transition-transform hover:scale-[1.03]"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Ask on WhatsApp</span>
    </a>
  );
}
