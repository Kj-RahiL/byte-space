import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const tints = {
  lime: "var(--color-electric-lime-400)",
  white: "var(--color-shuttle-gray-50)",
};

const renderInset = (src: string) =>
  src.includes("spring") ? "0 0.47% -0.47% -0.93%" : "-0.22% 0.56% -0.28% -1.05%";

type OrnamentProps = {
  src: string;
  size: number;
  tint: keyof typeof tints;
  flip?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Ornament({ src, size, tint, flip, className, style }: OrnamentProps) {
  const mask: CSSProperties = {
    maskImage: `url(${src})`,
    maskSize: "100% 100%",
    WebkitMaskImage: `url(${src})`,
    WebkitMaskSize: "100% 100%",
  };

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute isolate", flip && "-scale-x-100", className)}
      style={{ width: size, height: size, ...style }}
    >
      <div className="absolute" style={{ inset: renderInset(src) }}>
        <Image src={src} alt="" width={size} height={size} unoptimized className="size-full" />
        <div className="absolute inset-0 mix-blend-hard-light" style={{ ...mask, backgroundColor: tints[tint] }} />
      </div>
    </div>
  );
}
