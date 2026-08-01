import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { OPERATIONAL_TIERS, PERSONALITY_MODES, SITE } from "@/lib/site";

const TITLE = "About Enosx Technologies — Founded 2024 by Enosh Yeswa";
const DESCRIPTION =
  "The story, philosophy and design language behind Enosx Technologies, founded in 2024 by Enosh Yeswa. Aero-Glass design, speed-first engineering.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="aurora relative">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            About <span className="text-gradient-brand">Enosx Technologies</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Founded in {SITE.founded} by {SITE.founder}, Enosx Technologies develops advanced,
            multimodal AI assistants and the products around them. {SITE.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Our mission",
              d: "Make software feel instant. We treat latency as a design flaw and build assistants that work with your operating system, not beside it.",
            },
            {
              t: "Our philosophy",
              d: `“${SITE.motto}” Every interaction should be quicker than the thought that started it — that principle drives every product decision we make.`,
            },
            {
              t: "Our design language",
              d: "Aero-Glass: semi-transparent surfaces, backdrop blur and iridescent neon accents that create depth, layering and a sense of motion.",
            },
          ].map((c) => (
            <article key={c.t} className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold">{c.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
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
          <h2 className="text-2xl font-bold md:text-3xl">The founder</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {SITE.founder} started Enosx Technologies in {SITE.founded} with a single conviction:
            that an assistant should understand the machine it lives on. That idea became ENOSX AI,
            and the same standard now shapes the Enosx Tech Store and ExLover Coach.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
