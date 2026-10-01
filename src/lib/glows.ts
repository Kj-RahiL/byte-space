
export type Glow = {
  x: number;
  y: number;
  color: "lime" | "blue";
  alpha: number;
};

const rgb = { lime: "212 251 32", blue: "0 59 226" };

/** CSS `background-image` value; x stays relative to the page center on any width */
export function glowBackground(glows: Glow[]) {
  return glows
    .map(({ x, y, color, alpha }) => {
      const c = rgb[color];
      return `radial-gradient(circle 460px at calc(50% + ${x - 720}px) ${y}px, rgb(${c} / ${alpha}), rgb(${c} / ${alpha / 2}) 43%, transparent)`;
    })
    .join(", ");
}
