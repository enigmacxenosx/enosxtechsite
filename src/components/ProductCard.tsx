import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site";

const ACCENT: Record<Product["accent"], { ring: string; text: string }> = {
  cyan: {
    ring: "hover:border-cyan-brand/60 hover:shadow-[var(--shadow-glow-cyan)]",
    text: "text-cyan-brand",
  },
  purple: {
    ring: "hover:border-purple-brand/60 hover:shadow-[var(--shadow-glow-purple)]",
    text: "text-purple-brand",
  },
  crimson: {
    ring: "hover:border-crimson-brand/60 hover:shadow-[var(--shadow-glow-crimson)]",
    text: "text-crimson-brand",
  },
};

export function ProductCard({ product }: { product: Product }) {
  const a = ACCENT[product.accent];

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group glass flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${a.ring}`}
    >

      <span
        className={`font-display text-xs font-bold uppercase tracking-widest ${a.text}`}
      >
        {product.kicker}
      </span>
      <h3 className="mt-3 flex items-center gap-1.5 text-2xl font-bold">
        {product.name}
        <ArrowUpRight className="h-5 w-5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
      <span className="mt-5 text-xs text-muted-foreground">
        {product.url.replace("https://", "")}
      </span>
    </a>
  );
}
