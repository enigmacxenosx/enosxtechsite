import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PRICING_PLANS, SITE } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Enosx Technologies" },
      { name: "description", content: "Choose the plan that fits your needs. From free access to enterprise solutions, ENOSX AI has you covered." },
      { property: "og:title", content: "Pricing — Enosx Technologies" },
      { property: "og:description", content: "Choose the plan that fits your needs. From free access to enterprise solutions, ENOSX AI has you covered." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          <span className="text-gradient-brand">Pricing</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that fits your needs. Start free, upgrade anytime.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`glass rounded-xl p-6 flex flex-col ${
                plan.featured
                  ? "ring-2 ring-cyan-brand shadow-[var(--shadow-glow-cyan)]"
                  : ""
              }`}
            >
              {plan.featured && (
                <span className="mb-3 inline-flex self-start rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold">{plan.name}</h2>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gradient-brand">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/ {plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.featured
                    ? "bg-gradient-brand text-primary-foreground"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
