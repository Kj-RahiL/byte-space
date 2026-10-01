import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ href = "/", tone = "light", className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="ByteSpace home"
      className={cn("flex shrink-0 items-start gap-2", className)}
    >
      <Image
        src="/icons/logo-mark.svg"
        alt=""
        width={29}
        height={32}
        className="h-[31.5px] w-[28.875px]"
        unoptimized
      />
      <span
        className={cn(
          "mt-1.75 font-brand text-2xl leading-7.5 font-bold",
          tone === "light" ? "text-shuttle-gray-50" : "text-shuttle-gray-950",
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
}
