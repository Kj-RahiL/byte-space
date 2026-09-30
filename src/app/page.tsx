import Hero from "@/components/landing/hero/Hero";
import { CourseCard, SectionHeading } from "@/components/ui";
import { courses } from "@/constants/courses";

const Home = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <section className="container-page flex flex-col gap-10 py-20">
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
