import { SectionHeading } from "@/components/ui";
import { courses } from "@/constants/courses";
import CourseExplorer from "./CourseExplorer";

const CourseSection = () => {
  return (
    <section className="container-page flex flex-col gap-10 py-16 lg:gap-10.5 lg:py-18">
      <SectionHeading
        className="reveal"
        title="Discover Your Passion, Build Your Skills"
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />
      <div className="reveal">
        <CourseExplorer courses={courses} />
      </div>
    </section>
  );
};

export default CourseSection;
