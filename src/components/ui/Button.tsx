import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-3xl font-body transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue-800 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-electric-lime-400 text-shuttle-gray-950 hover:bg-electric-lime-500 active:bg-electric-lime-500",

  secondary:
    "border border-shuttle-gray-200 bg-white text-shuttle-gray-950 hover:border-shuttle-gray-300 hover:bg-shuttle-gray-50",

  ghost: "text-current hover:opacity-80",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-label-s",
  md: "px-6 py-3 text-label-l",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = CommonProps & ComponentProps<"button"> & { href?: undefined };
type ButtonAsLink = CommonProps & ComponentProps<typeof Link> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], variant !== "ghost" && sizes[size], className);
}

export function Button(props: ButtonProps) {
  const { variant, size, leftIcon, rightIcon, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <Link className={classes} {...(rest as Omit<ButtonAsLink, keyof CommonProps>)}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
