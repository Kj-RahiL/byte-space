import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;

  align?: "center" | "left";

  tone?: "default" | "inverse";
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
          "font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-balance md:text-heading-m",
          tone === "inverse" ? "text-white" : "text-ink",
          centered && "max-w-[588px]",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "text-body-m md:text-body-l",
            tone === "inverse" ? "text-shuttle-gray-50" : "text-shuttle-gray-400",
            centered && "max-w-[917px]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
