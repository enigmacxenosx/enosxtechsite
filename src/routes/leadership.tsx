import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { LEADERSHIP, SITE } from "@/lib/site";
import enoshPhoto from "@/assets/leader-enosh.jpg";
import fortunePhoto from "@/assets/leader-fortune.jpg";
import traceyPhoto from "@/assets/leader-tracey.svg";

const PHOTOS: Record<"enosh" | "fortune" | "tracey", string> = {
  enosh: enoshPhoto,
  fortune: fortunePhoto,
  tracey: traceyPhoto,
};

const TITLE = "Leadership — Enosx Technologies";
const DESCRIPTION =
  "Meet the leadership team of Enosx Technologies, led by founder and CEO Enosh Yeswa, building multimodal AI, commerce and coaching products.";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/leadership" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <PageShell>
      <section className="aurora relative">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Our <span className="text-gradient-brand">leadership</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The people steering {SITE.name} — small team, high velocity, one obsession:{" "}
            <strong className="text-foreground">{SITE.motto}</strong>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((l) => (
            <article key={l.name} className="glass overflow-hidden rounded-2xl">
              <img
                src={PHOTOS[l.photoKey]}
                alt={`Portrait of ${l.name}, ${l.role} at ${SITE.name}`}
                width={816}
                height={816}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="p-7">
                <h2 className="text-xl font-bold">{l.name}</h2>
                <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-cyan-brand">
                  {l.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Open leadership roles</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            We're still growing the leadership bench. If you build fast and care about craft, reach
            out on WhatsApp — we read every message.
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
