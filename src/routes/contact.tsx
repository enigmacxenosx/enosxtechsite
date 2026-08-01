import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MessageCircle, Users } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SITE, WHATSAPP_GROUPS } from "@/lib/site";

import { NewsletterSignup } from "@/components/NewsletterSignup";


const TITLE = "Contact Enosx Technologies — WhatsApp & Instagram";
const DESCRIPTION =
  "Reach Enosx Technologies on WhatsApp at +254 798 303 978, or on Instagram @enosx_tech and @engima_cx. We usually reply within the hour.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const waHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    `Hi Enosx Technologies! I'm ${name || "there"}. ${message}`.trim(),
  )}`;

  return (
    <PageShell>
      <section className="aurora relative">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Let's <span className="text-gradient-brand">talk</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tell us about your project, order or idea. WhatsApp is the fastest way to reach us.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
        <div className="space-y-4">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center gap-4 rounded-2xl p-6 transition-colors hover:border-whatsapp/60"
          >
            <MessageCircle className="h-7 w-7 text-whatsapp" />
            <div>
              <h2 className="text-lg font-semibold">WhatsApp</h2>
              <p className="text-sm text-muted-foreground">{SITE.whatsappDisplay}</p>
            </div>
          </a>

          {SITE.instagram.map((ig) => (
            <a
              key={ig.handle}
              href={ig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-2xl p-6 transition-colors hover:border-crimson-brand/60"
            >
              <Instagram className="h-7 w-7 text-crimson-brand" />
              <div>
                <h2 className="text-lg font-semibold">Instagram</h2>
                <p className="text-sm text-muted-foreground">{ig.handle}</p>
              </div>
            </a>
          ))}

          <a
            href={`mailto:${SITE.email}`}
            className="glass flex items-center gap-4 rounded-2xl p-6 transition-colors hover:border-cyan-brand/60"
          >
            <Mail className="h-7 w-7 text-cyan-brand" />
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-sm text-muted-foreground">{SITE.email}</p>
            </div>
          </a>
        </div>

        <form
          className="glass h-fit rounded-2xl p-7"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waHref, "_blank", "noopener,noreferrer");
          }}
        >
          <h2 className="text-xl font-bold">Send a quick message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This opens WhatsApp with your message ready to send.
          </p>

          <label className="mt-6 block text-sm font-medium" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-cyan-brand"
            placeholder="Enosh"
          />

          <label className="mt-5 block text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-cyan-brand"
            placeholder="I'd like to know more about ENOSX AI..."
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Continue on WhatsApp
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="text-3xl font-bold">Join our communities</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Hop into our WhatsApp groups for updates, support and gaming nights.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {WHATSAPP_GROUPS.map((g) => (
            <a
              key={g.url}
              href={g.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-whatsapp/60"
            >
              <Users className="mt-1 h-7 w-7 text-whatsapp" />
              <div>
                <h3 className="text-lg font-semibold">{g.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <NewsletterSignup />
      </section>


    </PageShell>
  );
}
