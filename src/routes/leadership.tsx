import { createPageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { LEADERSHIP, SITE } from "@/lib/site";
import enoshPhoto from "@/assets/leader-enosh.jpg";
import traceyPhoto from "@/assets/leader-tracey.svg";
import gracePhoto from "@/assets/leader-grace.svg";

const PHOTOS: Record<"enosh" | "tracey" | "grace", string> = {
  enosh: enoshPhoto,
  tracey: traceyPhoto,
  grace: gracePhoto,
};

const TITLE = "Teams — Enosx Technologies";
const DESCRIPTION =
  "Meet the ENOSX Technologies team: a Kenya-based product team building, acquiring and retaining ENOSX AI users.";

export const Route = createFileRoute("/leadership")({
  head: () => createPageHead(TITLE, DESCRIPTION, "/leadership"),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <PageShell>
      <section className="aurora relative">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Our <span className="text-gradient-brand">team</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The people steering {SITE.name} — a small product team building with focus, craft and
            one obsession: <strong className="text-foreground">{SITE.motto}</strong>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((l) => (
            <article key={l.name} className="glass overflow-hidden rounded-2xl">
              {l.photoKey ? (
                <img
                  src={PHOTOS[l.photoKey]}
                  alt={`${l.name}, ${l.role} at ${SITE.name}`}
                  width={816}
                  height={816}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`${l.name}, ${l.role} at ${SITE.name}`}
                  className="flex aspect-square items-center justify-center bg-gradient-brand text-7xl font-extrabold text-primary-foreground"
                >
                  {l.initials}
                </div>
              )}
              <div className="p-7">
                <h2 className="text-xl font-bold">{l.name}</h2>
                <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-cyan-brand">
                  {l.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.bio}</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.18em] text-purple-brand">
                    Owns
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{l.ownership}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="glass rounded-2xl p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand">
              One product team
            </p>
            <h2 className="mt-3 text-3xl font-bold">Ownership that moves ENOSX AI forward</h2>
            <p className="mt-4 text-muted-foreground">
              Every role owns a business result, not just a title. Grace learns from users, Eddy
              turns that learning into a reliable product, Tracey brings the right people in, Frank
              helps them become customers, and Enosh keeps the team aligned on the highest-impact
              priorities.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Build", "Reliable product, secure infrastructure and useful workflows."],
              ["Acquire", "Clear demonstrations, community momentum and qualified demand."],
              ["Retain", "Great onboarding, repeat workflows and responsive customer success."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-xl border border-border bg-background/30 p-5">
                <p className="font-display text-lg font-bold text-gradient-brand">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-purple-brand">
              First 30 days
            </p>
            <h2 className="mt-2 text-3xl font-bold">What the team is driving toward</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Initial operating targets designed to turn ownership into observable progress.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((l) => (
            <article key={`${l.name}-target`} className="glass rounded-xl p-6">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-cyan-brand">
                {l.name}
              </p>
              <h3 className="mt-2 text-lg font-bold">{l.first30DayTarget}</h3>
            </article>
          ))}
          <article className="rounded-xl bg-gradient-brand p-6 text-primary-foreground shadow-glow-cyan">
            <p className="font-display text-xs font-bold uppercase tracking-widest opacity-80">
              Shared measure
            </p>
            <h3 className="mt-2 text-lg font-bold">
              Build, acquire, activate, retain and monetize ENOSX AI users.
            </h3>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Build with the team</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            We're growing the team behind the ecosystem. If you build fast, care about craft and
            want to work on useful products from Kenya, reach out on WhatsApp — we read every
            message.
          </p>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </section>
    </PageShell>
  );
}
