import { site } from "@/config/site";

/** Builds a wa.me link with a pre-filled, property-specific message. */
export function whatsappLink(message?: string) {
  const text = message ?? `Hello, I would like to know more about ${site.name}. Please share more details.`;
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function propertyEnquiryMessage(propertyName: string, location: string) {
  return `Hello, I am interested in ${propertyName} at ${location}. Please share more details.`;
}
