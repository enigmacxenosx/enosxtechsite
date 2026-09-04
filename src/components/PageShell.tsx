import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFab } from "./WhatsAppFab";
import { BackgroundMusic } from "./BackgroundMusic";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-main">
        {children}
        <WhatsAppFab />
        <BackgroundMusic />
      </main>

      <SiteFooter />
    </div>
  );
}
