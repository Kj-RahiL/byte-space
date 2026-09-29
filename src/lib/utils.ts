import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// real text color class it's merged with.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-s",
            "display-xs",
            "heading-l",
            "heading-m",
            "heading-s",
            "heading-xs",
            "body-l",
            "body-m",
            "body-s",
            "body-xs",
            "label-xl",
            "label-l",
            "label-m",
            "label-s",
            "label-xs",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
