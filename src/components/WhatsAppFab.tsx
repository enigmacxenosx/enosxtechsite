import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Enosx Technologies on WhatsApp at ${SITE.whatsappDisplay}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
