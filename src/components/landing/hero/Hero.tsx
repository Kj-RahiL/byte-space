import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { happyStudents } from "@/constants/courses";
import {
  CategoryCard,
  HappyStudentsCard,
  LearningProgressCard,
} from "./HeroCards";
import HeroOrnaments from "./HeroOrnaments";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-persian-blue-800 bg-grid-lines">
      <Navbar />

      {/* Copy + search */}
      <div className="container-page relative z-10 flex flex-col items-center gap-10 pt-8 text-center md:pt-12.25 lg:gap-15">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h1 className="max-w-233.75 font-heading text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-balance text-white motion-safe:animate-fade-up sm:text-[56px] lg:text-heading-l lg:leading-21.5">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-204.75 text-body-m text-shuttle-gray-100 [animation-delay:100ms] motion-safe:animate-fade-up sm:text-body-l lg:max-w-none">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <div className="flex w-full justify-center [animation-delay:200ms] motion-safe:animate-fade-up">
          <HeroSearch />
        </div>
      </div>

      <div className="relative mt-12 h-77 [animation-delay:300ms] motion-safe:animate-fade-up sm:h-102.5 lg:-mt-0.5 lg:h-128">
        <div className="absolute top-0 left-1/2 h-128 w-144.5 origin-top -translate-x-1/2 scale-60 sm:scale-80 lg:scale-100">
          <Image
            src="/images/hero/hero-ellipse.svg"
            alt=""
            width={1149}
            height={1149}
            unoptimized
            className="absolute top-17.5 left-1/2 size-287.25 max-w-none -translate-x-1/2"
          />
          <Image
            src="/images/hero/student.png"
            alt="Smiling student with headphones holding a laptop"
            width={578}
            height={541}
            preload
            sizes="(min-width: 1024px) 578px, (min-width: 640px) 462px, 347px"
            className="relative h-135.25 w-144.5 max-w-none drop-shadow-elevated"
          />

          <CategoryCard
            title="UI/UX Design"
            courses="200 Courses"
            students="1000+ Students"
            className="top-31.75 left-0 sm:-left-6.75"
          />
          <LearningProgressCard
            value={55}
            className="top-34.75 right-0 sm:right-auto sm:left-102.75"
          />
          <HappyStudentsCard
            rating={4.5}
            reviews={240}
            avatars={happyStudents}
            moreLabel="2K+"
            className="top-81.25 left-0 sm:-left-25.75"
          />
        </div>
      </div>

      <HeroOrnaments />
    </section>
  );
};

export default Hero;
