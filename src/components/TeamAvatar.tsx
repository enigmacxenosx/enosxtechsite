import enoshPhoto from "@/assets/leader-enosh.jpg";
import traceyPhoto from "@/assets/leader-tracey.svg";
import gracePhoto from "@/assets/leader-grace.svg";
import type { Leader } from "@/lib/site";

const PHOTOS: Record<"enosh" | "tracey" | "grace", string> = {
  enosh: enoshPhoto,
  tracey: traceyPhoto,
  grace: gracePhoto,
};

type TeamAvatarProps = {
  leader: Pick<Leader, "name" | "role" | "photoKey" | "initials">;
  size?: "sm" | "md";
};

export function TeamAvatar({ leader, size = "md" }: TeamAvatarProps) {
  const sizeClass = size === "sm" ? "h-12 w-12 text-sm" : "h-16 w-16 text-xl";
  const alt = `${leader.name}, ${leader.role} at Enosx Technologies`;

  return (
    <div
      className={`shrink-0 overflow-hidden rounded-full border border-cyan-brand/40 bg-gradient-brand p-0.5 shadow-glow-cyan ${sizeClass}`}
    >
      {leader.photoKey ? (
        <img
          src={PHOTOS[leader.photoKey]}
          alt={alt}
          width={size === "sm" ? 48 : 64}
          height={size === "sm" ? 48 : 64}
          loading="lazy"
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/80 font-display font-extrabold text-primary-foreground"
        >
          {leader.initials}
        </div>
      )}
    </div>
  );
}
