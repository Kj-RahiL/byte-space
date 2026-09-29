import Image from "next/image";
import { cn } from "@/lib/utils";

export type Avatar = {
  src: string;
  alt: string;
};

type AvatarGroupSize = "sm" | "md";

// sm: course card (32px, 8px overlap) · md: hero "Happy Students" card (43px, 16px overlap)
const sizeStyles: Record<AvatarGroupSize, { px: number; item: string; overlap: string; counter: string }> = {
  sm: { px: 32, item: "size-8", overlap: "-ml-2", counter: "text-label-xs" },
  md: { px: 43, item: "size-[43px]", overlap: "-ml-4", counter: "text-body-xs font-bold" },
};

type AvatarGroupProps = {
  avatars: Avatar[];
  // Max avatars shown before the rest collapse into the counter 
  max?: number;
  // Counter label, e.g. "26+" or "2K+". defaults to "+N" 
  moreLabel?: string;
  size?: AvatarGroupSize;
  className?: string;
};

export function AvatarGroup({ avatars, max = 4, moreLabel, size = "sm", className }: AvatarGroupProps) {
  const s = sizeStyles[size];
  const visible = avatars.slice(0, max);
  const hidden = avatars.length - visible.length;
  const label = moreLabel ?? (hidden > 0 ? `+${hidden}` : undefined);

  return (
    <div className={cn("flex items-center", className)}>
      {visible.map((avatar, i) => (
        <Image
          key={`${avatar.src}-${i}`}
          src={avatar.src}
          alt={avatar.alt}
          width={s.px}
          height={s.px}
          className={cn(s.item, "shrink-0 rounded-full object-cover", i > 0 && s.overlap)}
        />
      ))}
      {label && (
        <span
          className={cn(
            s.item,
            s.overlap,
            s.counter,
            "flex shrink-0 items-center justify-center rounded-full bg-electric-lime-400 text-shuttle-gray-950",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
