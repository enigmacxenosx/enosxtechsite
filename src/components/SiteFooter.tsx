import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/enosx-logo.png";
import { PRODUCTS, SITE } from "@/lib/site";
import { NewsletterSignup } from "./NewsletterSignup";


export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Enosx Technologies logo"
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8"
            />
            <span className="font-display text-sm font-bold tracking-widest">
              ENOSX TECHNOLOGIES
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {SITE.tagline} Founded in {SITE.founded} by {SITE.founder}, building multimodal AI,
            commerce and coaching products from Kenya to the world.
          </p>
          <h2 className="mt-7 font-display text-xs font-bold tracking-widest text-muted-foreground">
            NEWSLETTER
          </h2>
          <div className="mt-3 max-w-sm">
            <NewsletterSignup compact />
          </div>
        </div>


        <div>
          <h2 className="font-display text-xs font-bold tracking-widest text-muted-foreground">
            PRODUCTS
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {p.name}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/products"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                All products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-widest text-muted-foreground">
            CONNECT
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> {SITE.whatsappDisplay}
              </a>
            </li>
            {SITE.instagram.map((ig) => (
              <li key={ig.handle}>
                <a
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" /> {ig.handle}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © {SITE.founded}–{new Date().getFullYear()} {SITE.name}. {SITE.motto}
      </div>
    </footer>
  );
}
