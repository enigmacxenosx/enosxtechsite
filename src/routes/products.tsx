import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PRODUCTS } from "@/lib/site";

const TITLE = "Products — ENOSX AI, Enosx Tech Store & ExLover Coach";
const DESCRIPTION =
  "Explore the three live Enosx Technologies platforms: ENOSX AI multimodal assistant, the Enosx Tech Store and ExLover relationship coach.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ProductsPage,
});

const ACCENT_TEXT = {
  cyan: "text-cyan-brand",
  purple: "text-purple-brand",
  crimson: "text-crimson-brand",
} as const;

function ProductsPage() {
  return (
    <PageShell>
      <section className="aurora relative">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Our <span className="text-gradient-brand">products</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Three platforms, all live and in active development. Everything is built in-house with
            the same Aero-Glass design language and speed-first engineering.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-5">
        {PRODUCTS.map((product) => (
          <article key={product.slug} className="glass rounded-2xl p-7 md:p-10">
            <span
              className={`font-display text-xs font-bold uppercase tracking-widest ${ACCENT_TEXT[product.accent]}`}
            >
              {product.kicker}
            </span>
            <h2 className="mt-3 text-3xl font-bold">{product.name}</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">{product.blurb}</p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${ACCENT_TEXT[product.accent]}`} />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Visit {product.url.replace("https://", "")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
