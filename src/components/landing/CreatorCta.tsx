import type { ComponentProps } from "react";
import { Button, Ornament, SectionHeading } from "@/components/ui";

type CtaOrnament = Pick<
  ComponentProps<typeof Ornament>,
  "src" | "size" | "tint" | "flip"
> & {
  offsetX: number;
  top: number;
};

const ornaments: CtaOrnament[] = [
  {
    src: "/images/ornaments/spring-left.png",
    size: 385,
    tint: "lime",
    offsetX: -838,
    top: -162,
  },
  {
    src: "/images/ornaments/spring-small.png",
    size: 175,
    tint: "white",
    offsetX: -542,
    top: 5,
    flip: true,
  },
  {
    src: "/images/ornaments/pyramid.png",
    size: 188,
    tint: "white",
    offsetX: -768,
    top: 225,
    flip: true,
  },
  {
    src: "/images/ornaments/torus.png",
    size: 342,
    tint: "lime",
    offsetX: -700,
    top: 299,
  },
  {
    src: "/images/ornaments/pyramid.png",
    size: 188,
    tint: "lime",
    offsetX: 360,
    top: 0,
  },
  {
    src: "/images/ornaments/cylinder.png",
    size: 370,
    tint: "white",
    offsetX: 506,
    top: 6,
  },
  {
    src: "/images/ornaments/spring-right.png",
    size: 330,
    tint: "lime",
    offsetX: 390,
    top: 289,
  },
];

const CreatorCta = () => {
  return (
    <section className="relative isolate overflow-hidden bg-persian-blue-800 bg-grid-lines">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {ornaments.map(({ offsetX, top, ...o }, i) => (
          <Ornament
            key={i}
            {...o}
            style={{ top, left: `calc(50% + ${offsetX}px)` }}
          />
        ))}
      </div>

      <div className="reveal container-page relative flex flex-col items-center gap-10 py-20 text-center lg:min-h-122 lg:pt-21.25 lg:pb-21">
        <SectionHeading
          tone="inverse"
          className="gap-10"
          titleClassName="max-w-177.5 text-wrap"
          descriptionClassName="max-w-241 text-[#D1D1D1]"
          title="Unlock Your Potential as a Creator with ByteSpace"
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />
        <Button href="/register?as=creator">Join as Creator</Button>
      </div>
    </section>
  );
};

export default CreatorCta;
