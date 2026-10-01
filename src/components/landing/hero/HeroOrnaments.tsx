import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tints = {
  lime: "var(--color-electric-lime-400)",
  white: "var(--color-shuttle-gray-50)",
};

const ornaments: OrnamentProps[] = [
  {
    src: "/images/ornaments/spring-left.png",
    size: 385,
    tint: "lime",
    offsetX: -838,
    top: 221,
  },
  {
    src: "/images/ornaments/spring-small.png",
    size: 175,
    tint: "white",
    offsetX: -537,
    top: 477,
    flip: true,
  },
  {
    src: "/images/ornaments/torus.png",
    size: 342,
    tint: "white",
    offsetX: -702,
    top: 682,
  },
  {
    src: "/images/ornaments/cylinder.png",
    size: 370,
    tint: "lime",
    offsetX: 511,
    top: 221,
  },
  {
    src: "/images/ornaments/pyramid.png",
    size: 188,
    tint: "white",
    offsetX: 386,
    top: 464,
  },
  {
    src: "/images/ornaments/spring-right.png",
    size: 330,
    tint: "white",
    offsetX: 407,
    top: 672,
  },
];

type OrnamentProps = {
  src: string;
  size: number;
  tint: keyof typeof tints;
  offsetX: number;
  top: number;
  flip?: boolean;
};

// cone-type shapes slightly differently — reproduced so edges line up exactly.
const renderInset = (src: string) =>
  src.includes("spring")
    ? "0 0.47% -0.47% -0.93%"
    : "-0.22% 0.56% -0.28% -1.05%";

function Ornament({ src, size, tint, offsetX, top, flip }: OrnamentProps) {
  const mask: CSSProperties = {
    maskImage: `url(${src})`,
    maskSize: "100% 100%",
    WebkitMaskImage: `url(${src})`,
    WebkitMaskSize: "100% 100%",
  };

  return (
    <div
      className={cn("absolute isolate", flip && "-scale-x-100")}
      style={{
        width: size,
        height: size,
        top,
        left: `calc(50% + ${offsetX}px)`,
      }}
    >
      <div className="absolute" style={{ inset: renderInset(src) }}>
        <Image
          src={src}
          alt=""
          width={size}
          height={size}
          className="size-full"
        />
        <div
          className="absolute inset-0 mix-blend-hard-light"
          style={{ ...mask, backgroundColor: tints[tint] }}
        />
      </div>
    </div>
  );
}

const HeroOrnaments = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {ornaments.map((o) => (
        <Ornament key={o.src} {...o} />
      ))}
    </div>
  );
};

export default HeroOrnaments;
