import CourseSection from "@/components/landing/courses/CourseSection";
import Hero from "@/components/landing/hero/Hero";
import PartnerLogos from "@/components/landing/PartnerLogos";

const Home = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <PartnerLogos />
      <CourseSection />
    </main>
  );
};

export default Home;
