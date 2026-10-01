import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

type StatusScreenProps = {
  code: string;
  title: string;
  description: string;
  actions: ReactNode;
  codeClassName?: string;
};


export function StatusScreen({ code, title, description, actions, codeClassName }: StatusScreenProps) {
  return (
    <section className="relative isolate flex min-h-[80svh] flex-col overflow-hidden bg-persian-blue-800 bg-grid-lines lg:min-h-239.25">
      <Navbar />

      <div className="container-page flex flex-1 flex-col items-center pt-6 pb-20 text-center lg:pt-10 lg:pb-31.25">
        <p
          aria-hidden
          className={cn(
            "font-heading text-[160px] leading-none font-semibold tracking-[-0.01em] text-white/10 select-none",
            "-mb-8 sm:-mb-16 sm:text-[280px] lg:-mb-29.75 lg:text-[480px]",
            codeClassName,
          )}
        >
          {code}
        </p>

        <div className="relative flex flex-col items-center gap-8">
          <h1 className="max-w-233.75 font-heading text-[36px]/[1.2] font-semibold tracking-[-0.01em] text-balance text-white sm:text-[52px]/[1.2] lg:text-heading-l lg:leading-21.5">
            {title}
          </h1>
          <p className="max-w-121.5 text-body-m text-shuttle-gray-100 sm:text-body-l">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">{actions}</div>
        </div>
      </div>
    </section>
  );
}
