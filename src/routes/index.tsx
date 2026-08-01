import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Cpu, Github, Mic, Sparkles, Terminal, Globe } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, SITE } from "@/lib/site";
import heroImage from "@/assets/hero-aero.jpg";

const TITLE = "Enosx Technologies — Multimodal AI, Commerce & Coaching";
const DESCRIPTION =
  "Enosx Technologies builds ENOSX AI, the Enosx Tech Store and ExLover Coach. Founded in 2024 by Enosh Yeswa. Speed is UX.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const CAPABILITIES = [
  { icon: Terminal, title: "God Mode", desc: "A terminal-grade command surface for instant, low-level execution." },
  { icon: Cpu, title: "Context-aware", desc: "Detects your active app and tailors every suggestion to it." },
  { icon: Mic, title: "Voice interface", desc: "Full speech-to-text and text-to-speech, hands-free by design." },
  { icon: Github, title: "GitHub native", desc: "Browse repos, read branches, review and generate code live." },
  { icon: Globe, title: "Web intelligence", desc: "Real-time search and deep scraping for factual precision." },
  { icon: Sparkles, title: "Imagine Mode", desc: "Instant artistic image generation inside the workspace." },
];

function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="aurora relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-cyan-brand">
              <Bot className="h-3.5 w-3.5" /> Founded {SITE.founded} · Nairobi, Kenya
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl">
              <span className="text-gradient-brand">Enosx</span> Technologies
            </h1>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              {SITE.tagline} We build multimodal AI assistants, commerce experiences and coaching
              products with one obsession — <strong className="text-foreground">{SITE.motto}</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore our products <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </div>
          </div>

          <img
            src={heroImage}
            alt="Translucent glass panels glowing with cyan and purple light, representing the ENOSX Aero-Glass interface"
            width={1536}
            height={1024}
            className="w-full rounded-2xl border border-border shadow-[var(--shadow-glow-purple)]"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-6 md:grid-cols-4">
          {[
            ["3", "Live products"],
            ["7", "AI operating tiers"],
            ["4", "Personality modes"],
            ["24/7", "WhatsApp support"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="font-display text-3xl font-bold text-gradient-brand">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <h2 className="text-3xl font-bold md:text-4xl">What we build</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Three live platforms, one design language. Every product is online right now — tap a card
          to open it.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <h2 className="text-3xl font-bold md:text-4xl">
          Built on <span className="text-gradient-brand">OS-level</span> intelligence
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="glass rounded-xl p-5">
              <Icon className="h-6 w-6 text-cyan-brand" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="aurora glass rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Founded by <span className="text-gradient-brand">{SITE.founder}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Since {SITE.founded}, Enosx Technologies has been shipping software that treats latency
            as a design flaw. From an AI assistant that lives in your OS to a storefront and a
            coaching companion, everything we release is fast, opinionated and beautiful.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-brand hover:underline"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact band */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="rounded-2xl bg-gradient-brand p-1">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-background px-8 py-10 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Have a project in mind?</h2>
              <p className="mt-2 text-muted-foreground">
                Message us on WhatsApp — we usually reply within the hour.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
