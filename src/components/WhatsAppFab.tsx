import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFab() {
  const label = `Chat with Enosx Technologies on WhatsApp at ${SITE.whatsappDisplay}`;

  return (
    <>
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="whatsapp-fab"
      >
        <MessageCircle aria-hidden="true" className="h-7 w-7" />
      </a>

      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="whatsapp-inline"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5" />
        <span>Chat with us on WhatsApp</span>
      </a>
    </>
  );
}
