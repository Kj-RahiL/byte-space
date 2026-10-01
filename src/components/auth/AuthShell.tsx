import type { ReactNode } from "react";
import { HappyStudentsCard } from "@/components/landing/hero/HeroCards";
import { CourseCard, Logo, Ornament } from "@/components/ui";
import { courses, happyStudents } from "@/constants/courses";
import { cn } from "@/lib/utils";

const at = (x: number, y: number) => ({
  left: `calc(50% - 720px + ${x}px)`,
  top: y,
});

function Collage() {
  return (
    <div
      aria-hidden
      inert
      className="pointer-events-none absolute inset-0 hidden xl:block"
    >
      <div className="absolute" style={at(122, 394)}>
        <CourseCard course={courses[1]} className="w-93.25" />
      </div>
      <div className="absolute" style={at(233, 305)}>
        <CourseCard course={courses[2]} className="w-93.25" />
      </div>
      <div className="absolute" style={at(348, 740)}>
        <HappyStudentsCard
          rating={4.5}
          reviews={240}
          avatars={happyStudents}
          moreLabel="2K+"
        />
      </div>
      <Ornament
        src="/images/ornaments/spring-small.png"
        size={175}
        tint="lime"
        flip
        style={at(470, 626)}
      />
      <Ornament
        src="/images/ornaments/torus.png"
        size={146}
        tint="lime"
        style={at(151, 320)}
      />
      <Ornament
        src="/images/ornaments/pyramid.png"
        size={188}
        tint="white"
        style={at(97, 702)}
      />
    </div>
  );
}

type AuthShellProps = {
  introTitle: string;
  introText: string;
  eyebrow: string;
  title: string;
  footer: ReactNode;
  children: ReactNode;
  cardClassName?: string;
};

export function AuthShell({
  introTitle,
  introText,
  eyebrow,
  title,
  footer,
  children,
  cardClassName,
}: AuthShellProps) {
  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-persian-blue-800 bg-grid-lines">
      <Collage />

      <header className="container-page relative flex h-20 items-center md:h-30">
        <Logo className="md:mt-8.75 md:ml-0.5 md:self-start" />
      </header>

      <div className="container-page relative flex flex-1 flex-col gap-10 pb-16 lg:grid lg:grid-cols-[1fr_579px] lg:items-start lg:gap-10 lg:pb-30">
        <div className="flex max-w-118.75 flex-col gap-4 text-white lg:ml-0.5">
          <h2 className="text-label-xl">{introTitle}</h2>
          <p className="text-body-l text-shuttle-gray-100">{introText}</p>
        </div>

        <section
          aria-labelledby="auth-title"
          className={cn(
            "flex w-full flex-col items-stretch rounded-3xl bg-white px-6 pt-10 pb-8 sm:px-15.75 sm:pt-15.25 lg:min-h-196",
            cardClassName,
          )}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <p className="text-body-l text-persian-blue-800">{eyebrow}</p>
              <h1
                id="auth-title"
                className="font-heading text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-ink md:text-heading-m"
              >
                {title}
              </h1>
            </div>
            {children}
          </div>

          <p className="mt-auto pt-10 text-center text-body-m leading-[1.6] text-shuttle-gray-400">
            {footer}
          </p>
        </section>
      </div>
    </main>
  );
}
