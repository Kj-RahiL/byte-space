import CourseSection from "@/components/landing/courses/CourseSection";
import CreatorCta from "@/components/landing/CreatorCta";
import GrowthSection from "@/components/landing/growth/GrowthSection";
import Hero from "@/components/landing/hero/Hero";
import LearningPaths from "@/components/landing/LearningPaths";
import PartnerLogos from "@/components/landing/PartnerLogos";
import Testimonials from "@/components/landing/testimonials/Testimonials";

const Home = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <PartnerLogos />
      <CourseSection />
      <LearningPaths />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
    </main>
  );
};

export default Home;
