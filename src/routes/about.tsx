import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { LEADERSHIP, OPERATIONAL_TIERS, PERSONALITY_MODES, PRODUCTS, SITE } from "@/lib/site";
import enoshPhoto from "@/assets/leader-enosh.jpg";
import fortunePhoto from "@/assets/leader-fortune.jpg";
import traceyPhoto from "@/assets/leader-tracey.svg";

const PHOTOS: Record<"enosh" | "fortune" | "tracey", string> = {
  enosh: enoshPhoto,
  fortune: fortunePhoto,
  tracey: traceyPhoto,
};

const TITLE = "About Enosx Technologies — Our Story, Mission & Team";
const DESCRIPTION =
  "How Enosx Technologies grew from a 2024 idea by Enosh Yeswa into a Kenya-based product studio building AI, web platforms, commerce, browsing and desktop utilities.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  {
    year: "2024",
    title: "Enosx Technologies is founded",
    desc: `${SITE.founder} starts Enosx Technologies in Kenya with one conviction: an assistant should understand the machine it lives on, and every interaction should feel instant.`,
  },
  {
    year: "2024",
    title: "ENOSX AI takes shape",
    desc: "The first multimodal assistant ships — God Mode terminal, context-aware messaging, file and code analysis, and a memory bank that carries across sessions.",
  },
  {
    year: "2025",
    title: "Commerce and connected products",
    desc: "The ecosystem expands into Kenyan electronics discovery, private reflection tools and web products that turn focused ideas into usable experiences.",
  },
  {
    year: "2026",
    title: "A broader product ecosystem",
    desc: "The E-commerce Hub, Enosh Browser, Enosh Blog and Exboot join ENOSX AI as the portfolio grows across AI, commerce, research, publishing and practical desktop software.",
  },
];

const VALUES = [
  {
    t: "Speed is UX",
    d: "We treat latency as a design flaw. If a feature makes the product slower than the thought that started it, it gets rebuilt or removed.",
  },
  {
    t: "Built for real people",
    d: "Our users shop on Kenyan marketplaces, study late at night and work on ordinary laptops. Everything we ship has to work well there first.",
  },
  {
    t: "Depth over decoration",
    d: "Aero-Glass — layered translucency, blur and neon accents — is how our work looks. Clarity, not clutter, is why it looks that way.",
  },
  {
    t: "Ship, listen, refine",
    d: "We release early, talk to our community on WhatsApp every week, and let real usage decide what gets built next.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="aurora relative">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-cyan-brand">
            Founded {SITE.founded} · Kenya
          </p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            About <span className="text-gradient-brand">Enosx Technologies</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We build practical software across AI, web platforms, commerce, research, publishing and
            desktop utilities for people who want technology to keep up with them. {SITE.tagline}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: `${SITE.founded}`, v: "Year founded" },
              { k: `${PRODUCTS.length}`, v: "Products shipped" },
              { k: `${LEADERSHIP.length}`, v: "Leadership team" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-5">
                <p className="text-gradient-brand text-3xl font-extrabold">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold">Our mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To turn ambitious ideas into focused products that are fast, useful and clear — from
              AI workflows and source-first research tools to commerce experiences and dependable
              desktop utilities.
            </p>
          </article>
          <article className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold">Our story</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Enosx Technologies began in {SITE.founded} as one developer's answer to slow, shallow
              tools. It is now a Kenya-based product studio shipping AI, web, commerce, publishing
              and desktop projects, guided by one line: “{SITE.motto}”
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="text-3xl font-bold">Our history</h2>
        <ol className="mt-8 space-y-4">
          {TIMELINE.map((e) => (
            <li key={e.title} className="glass rounded-2xl p-6 md:flex md:gap-8">
              <span className="font-display text-lg font-bold text-cyan-brand md:w-24 md:shrink-0">
                {e.year}
              </span>
              <div className="mt-2 md:mt-0">
                <h3 className="text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="text-3xl font-bold">What we value</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {VALUES.map((c) => (
            <article key={c.t} className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="text-3xl font-bold">The team</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A small team building a connected portfolio of products and experiments.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((leader) => (
            <article key={leader.name} className="glass overflow-hidden rounded-2xl">
              <img
                src={PHOTOS[leader.photoKey]}
                alt={`${leader.name}, ${leader.role} at ${SITE.name}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">{leader.name}</h3>
                <p className="font-display text-xs font-bold uppercase tracking-widest text-cyan-brand">
                  {leader.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          to="/leadership"
          className="glass mt-8 inline-flex rounded-xl px-6 py-3 text-sm font-semibold"
        >
          See the full leadership page
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="text-3xl font-bold">Personality modes</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          ENOSX AI adapts its tone to the way you work.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONALITY_MODES.map((m) => (
            <article key={m.name} className="glass rounded-xl p-5">
              <span className="text-2xl" aria-hidden="true">
                {m.icon}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="text-3xl font-bold">Operating tiers</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Seven tiers, each tuned for a different balance of speed, depth and creativity.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OPERATIONAL_TIERS.map((t) => (
            <article key={t.name} className="glass rounded-xl p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cyan-brand">
                {t.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="aurora glass rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">Work with us</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Partnerships, feedback or a project idea — talk to {SITE.founder} and the team directly
            on WhatsApp at {SITE.whatsappDisplay}, or email {SITE.email}.
          </p>
          <Link
            to="/contact"
            className="glass mt-6 inline-flex rounded-xl px-6 py-3 text-sm font-semibold"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
