import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;

  align?: "center" | "left";

  tone?: "default" | "inverse";

  size?: "m" | "s";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "default",
  size = "m",
  as: Tag = "h2",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Tag
        className={cn(
          "font-heading font-semibold tracking-[-0.01em] text-balance",
          size === "m"
            ? "text-[32px]/[1.2] md:text-heading-m"
            : "text-[28px]/[1.2] md:text-[36px]/[1.2]",
          tone === "inverse" ? "text-white" : "text-ink",
          centered && size === "m" && "max-w-147",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "text-body-m md:text-body-l",
            tone === "inverse"
              ? "text-shuttle-gray-50"
              : "text-shuttle-gray-400",
            centered && "max-w-229.25",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
