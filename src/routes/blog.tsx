import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { BLOG_POSTS } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Enosx Technologies" },
      { name: "description", content: "Latest news, insights, and engineering updates from Enosx Technologies." },
      { property: "og:title", content: "Blog — Enosx Technologies" },
      { property: "og:description", content: "Latest news, insights, and engineering updates from Enosx Technologies." },
    ],
  }),
  component: BlogPage,
});

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          <span className="text-gradient-brand">Blog</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          News, insights, and engineering updates from the Enosx team.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="glass rounded-xl p-6 transition-transform hover:scale-[1.01]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-foreground">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <Link
                to="/"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-brand hover:underline"
              >
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
