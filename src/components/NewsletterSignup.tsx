import { useState } from "react";
import { Loader2, Mail, Check } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .min(3, { message: "Please enter your email address" })
  .max(255, { message: "Email must be less than 255 characters" })
  .email({ message: "That doesn't look like a valid email" });

export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }

    setStatus("loading");
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data.toLowerCase() });

    if (error) {
      // 23505 = unique violation → already subscribed, treat as success
      if (error.code === "23505") {
        setStatus("done");
        toast.success("You're already on the list — thanks!");
        return;
      }
      setStatus("idle");
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setStatus("done");
    setEmail("");
    toast.success("Subscribed! Watch your inbox for Enosx updates.");
  }

  if (status === "done") {
    return (
      <div
        className={`glass flex items-center gap-3 rounded-2xl ${compact ? "p-4" : "p-6"}`}
        role="status"
      >
        <Check className="h-5 w-5 text-whatsapp" />
        <p className="text-sm text-muted-foreground">
          You&apos;re subscribed — updates on ENOSX AI, the Tech Store and ExLover Coach are on
          their way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "glass rounded-2xl p-7"}>
      {!compact && (
        <>
          <h2 className="text-xl font-bold">
            Get <span className="text-gradient-brand">Enosx</span> updates
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            New features, product launches and drops — straight to your inbox. No spam.
          </p>
        </>
      )}

      <label className="sr-only" htmlFor={compact ? "newsletter-email-compact" : "newsletter-email"}>
        Email address
      </label>
      <div className={`flex flex-col gap-3 sm:flex-row ${compact ? "" : "mt-5"}`}>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id={compact ? "newsletter-email-compact" : "newsletter-email"}
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-cyan-brand"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          Subscribe
        </button>
      </div>
    </form>
  );
}
