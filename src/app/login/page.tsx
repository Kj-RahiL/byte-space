import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import SocialButtons from "@/components/auth/SocialButtons";
import { HappyStudentsCard } from "@/components/landing/hero/HeroCards";
import { CourseCard, Logo, Ornament } from "@/components/ui";
import { courses, happyStudents } from "@/constants/courses";

export const metadata: Metadata = {
  title: "Sign In · ByteSpace",
  description: "Sign in to ByteSpace to continue learning and creating.",
};

// x/y from the 1440×1024 Figma "Login" frame (node 49:195); x is applied relative to the page center
const at = (x: number, y: number) => ({ left: `calc(50% - 720px + ${x}px)`, top: y });

/** Decorative collage on the left — only from `xl`, where Figma's 1440px layout fits. */
function Collage() {
  return (
    <div aria-hidden inert className="pointer-events-none absolute inset-0 hidden xl:block">
      <div className="absolute" style={at(122, 394)}>
        <CourseCard course={courses[1]} className="w-93.25" />
      </div>
      <div className="absolute" style={at(233, 305)}>
        <CourseCard course={courses[2]} className="w-93.25" />
      </div>
      <div className="absolute" style={at(348, 740)}>
        <HappyStudentsCard rating={4.5} reviews={240} avatars={happyStudents} moreLabel="2K+" />
      </div>
      {/* Figma reports flipped layers by their right edge: 645 − 175 */}
      <Ornament src="/images/ornaments/spring-small.png" size={175} tint="lime" flip style={at(470, 626)} />
      <Ornament src="/images/ornaments/torus.png" size={146} tint="lime" style={at(151, 320)} />
      <Ornament src="/images/ornaments/pyramid.png" size={188} tint="white" style={at(97, 702)} />
    </div>
  );
}

const LoginPage = () => {
  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-persian-blue-800 bg-grid-lines">
      <Collage />

      <header className="container-page relative flex h-20 items-center md:h-30">
        <Logo className="md:mt-8.75 md:ml-0.5 md:self-start" />
      </header>

      <div className="container-page relative flex flex-1 flex-col gap-10 pb-16 lg:grid lg:grid-cols-[1fr_579px] lg:items-start lg:gap-10 lg:pb-30">
        {/* Left copy (Figma: 122,120 · 475px wide) */}
        <div className="flex max-w-118.75 flex-col gap-4 text-white lg:ml-0.5">
          <h2 className="text-label-xl">Sign in with ease</h2>
          <p className="text-body-l text-shuttle-gray-100">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* Form card (Figma: 741,120 · 579×784) */}
        <section
          aria-labelledby="login-title"
          className="flex w-full flex-col items-stretch gap-18.25 rounded-3xl bg-white px-6 pt-10 pb-8 sm:px-15.75 sm:pt-15.25 sm:pb-10 lg:min-h-196"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <p className="text-body-l text-persian-blue-800">Sign In</p>
              <h1 id="login-title" className="font-heading text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-ink md:text-heading-m">
                Welcome Back
              </h1>
            </div>
            <LoginForm />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4 text-body-l text-shuttle-gray-400">
              <span className="h-px flex-1 bg-shuttle-gray-200" />
              or
              <span className="h-px flex-1 bg-shuttle-gray-200" />
            </div>
            <SocialButtons />
          </div>

          <p className="mt-auto text-center text-body-m leading-[1.6] text-shuttle-gray-400">
            New user?{" "}
            <Link href="/register" className="font-medium text-persian-blue-800 hover:underline">
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
