import type { ComponentProps } from "react";
import { Ornament } from "@/components/ui";

type OrnamentProps = Pick<ComponentProps<typeof Ornament>, "src" | "size" | "tint" | "flip"> & {
  /** Offset of the ornament's left edge from the section's horizontal center */
  offsetX: number;
  top: number;
};

// Positions measured from the 1440×1024 Figma hero frame (node 46:79)
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

const HeroOrnaments = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      {ornaments.map(({ offsetX, top, ...o }) => (
        <Ornament key={o.src} {...o} style={{ top, left: `calc(50% + ${offsetX}px)` }} />
      ))}
    </div>
  );
};

export default HeroOrnaments;
