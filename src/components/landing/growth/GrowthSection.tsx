import Image from "next/image";
import { CourseCard, Ornament } from "@/components/ui";
import { courses, happyStudents } from "@/constants/courses";
import { glowBackground } from "@/lib/glows";
import { HappyStudentsCard, LearningProgressCard } from "../hero/HeroCards";
import { CheckCircleIcon, TotalRevenueCard, YearToDateCard } from "./GrowthCards";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorPerks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const glows = glowBackground([
  { x: 416, y: 102, color: "lime", alpha: 0.43 },
  { x: 60, y: 751, color: "blue", alpha: 0.15 },
  { x: 1379, y: 110, color: "blue", alpha: 0.07 },
  { x: 1290, y: 1356, color: "blue", alpha: 0.22 },
  { x: 49, y: 1282, color: "lime", alpha: 0.6 },
]);

function Composition({
  width,
  height,
  className,
  children,
}: {
  width: number;
  height: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div
        className="relative mx-auto [--s:0.55] sm:[--s:0.9] md:[--s:1]"
        style={{ width: `calc(${width}px * var(--s))`, height: `calc(${height}px * var(--s))` }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left scale-(--s)"
          style={{ width, height }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

const GrowthSection = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#fafafa] py-20 xl:py-30"
      style={{ backgroundImage: glows }}
    >
      <div className="container-page flex flex-col gap-16 xl:gap-18">
        {/*  Your Path to Professional Growth  */}
        <div className="flex flex-col items-center gap-12 xl:ml-px xl:grid xl:grid-cols-[574px_621px] xl:items-center xl:gap-15.75">
          <div className="flex flex-col gap-10">
            <h2 className="font-heading text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-ink md:text-heading-m xl:max-w-144.25">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-119.25 text-body-m text-shuttle-gray-400 md:text-body-l">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="flex gap-14">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="text-body-l text-shuttle-gray-400">{s.label}</dt>
                  <dd className="font-heading text-display-xs text-persian-blue-800">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Composition width={621} height={552} className="w-full">
            <CourseCard course={courses[0]} className="absolute top-0 left-0 w-93.25" />
            <Image
              src="/images/hero/student.png"
              alt="Student with headphones holding a laptop"
              width={577}
              height={540}
              sizes="577px"
              className="absolute top-3 left-0 h-135 w-144.25 max-w-none drop-shadow-elevated"
            />
            <LearningProgressCard
              value={55}
              labelClassName="text-body-m font-medium"
              className="top-53.25 left-86.25"
            />
            <Ornament src="/images/ornaments/spring-left.png" size={215} tint="lime" className="top-16.75 left-101.5" />
          </Composition>
        </div>

        {/*  Create & Manage Courses Easily */}
        <div className="flex flex-col items-center gap-12 xl:ml-px xl:grid xl:grid-cols-[541px_580px] xl:items-center xl:gap-19.75">
          <Composition width={541} height={596} className="order-2 w-full xl:order-1">
            <TotalRevenueCard amount="$120.29" delta="+12$" progress={56} className="top-11 left-0" />
            <YearToDateCard amount="$1,200.38" delta="+12$" className="top-48.5 left-0" />
            
            <Image
              src="/images/growth/creator.png"
              alt="Course creator with headphones holding a tablet"
              width={579}
              height={719}
              sizes="579px"
              className="absolute top-0 left-1.75 h-179.75 w-144.75 max-w-none"
            />
            <HappyStudentsCard
              rating={4.5}
              reviews={240}
              avatars={happyStudents}
              moreLabel="2K+"
              className="top-103.25 left-70.75"
            />
            <Ornament src="/images/ornaments/spring-left.png" size={215} tint="lime" className="top-28.5 left-76.25" />
          </Composition>

          <div className="order-1 flex flex-col gap-10 xl:order-2">
            <h2 className="max-w-97.75 font-heading text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-ink md:text-heading-m">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-143.5 text-body-m text-shuttle-gray-400 md:text-body-l">
              <strong className="font-medium text-shuttle-gray-950">ByteSpace</strong> supports individuals or entities in
              the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-label-l text-shuttle-gray-950">
                  <CheckCircleIcon className="size-6 shrink-0 text-persian-blue-800" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
