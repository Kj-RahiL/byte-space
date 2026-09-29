import Image from "next/image";
import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  /** Number of reviews, shown muted in parentheses: "4.5 (240)" */
  count?: number;
  /**
   * md: course card — 18px value + 24px grey star
   * sm: floating stat cards — 12px value + 16px lime star
   */
  size?: "sm" | "md";
  className?: string;
};

export function Rating({ value, count, size = "md", className }: RatingProps) {
  const label = `Rated ${value.toFixed(1)} out of 5${count !== undefined ? ` from ${count} reviews` : ""}`;

  if (size === "sm") {
    return (
      <div className={cn("flex items-center gap-1", className)} aria-label={label}>
        <span className="text-body-xs text-shuttle-gray-950">
          {value.toFixed(1)}
          {count !== undefined && <span className="text-shuttle-gray-400"> ({count})</span>}
        </span>
        <span className="flex size-4 items-center justify-center" aria-hidden>
          <Image
            src="/icons/star-filled.svg"
            alt=""
            width={13}
            height={13}
            className="h-[12.5676px] w-[13.1625px]"
            unoptimized
          />
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)} aria-label={label}>
      <span className="text-body-l text-black-700">
        {value.toFixed(1)}
        {count !== undefined && <span className="text-shuttle-gray-400"> ({count})</span>}
      </span>
      <Image src="/icons/star-outlined.svg" alt="" width={24} height={24} aria-hidden unoptimized />
    </div>
  );
}
