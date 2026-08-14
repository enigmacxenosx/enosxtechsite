import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Briefcase, CheckCircle } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CAREERS, SITE } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Enosx Technologies" },
      { name: "description", content: "Join the Enosx Technologies team. We're hiring frontend developers, backend engineers, AI/ML engineers, and more." },
      { property: "og:title", content: "Careers — Enosx Technologies" },
      { property: "og:description", content: "Join the Enosx Technologies team. We're hiring frontend developers, backend engineers, AI/ML engineers, and more." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          <span className="text-gradient-brand">Join</span> Our Team
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're building the future of AI, commerce, and coaching from Kenya.
          If you're passionate about technology and speed, we want to hear from you.
        </p>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Apply via WhatsApp
        </a>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="space-y-8">
          {CAREERS.map((job) => (
            <article key={job.title} className="glass rounded-xl p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  {job.type}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold">{job.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{job.desc}</p>
              <div className="mt-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Requirements
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-brand" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-brand hover:underline"
              >
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
