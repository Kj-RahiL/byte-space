import { existsSync } from "node:fs";
import path from "node:path";
import { testimonials } from "@/constants/testimonials";
import { glowBackground } from "@/lib/glows";
import TestimonialCard from "./TestimonialCard";

// Use an avatar only once its file is actually in /public — until then the card shows initials
const hasPublicFile = (src?: string) => !!src && existsSync(path.join(process.cwd(), "public", src));


const glows = glowBackground([
  { x: 1410, y: 327, color: "lime", alpha: 0.42 },
  { x: 731, y: 198, color: "lime", alpha: 0.6 },
  { x: 126, y: 717, color: "blue", alpha: 0.22 },
]);

const Testimonials = () => {
  return (
    <section className="bg-[#fafafa] py-16 lg:min-h-196 lg:pt-18.5 lg:pb-14.25" style={{ backgroundImage: glows }}>
      <div className="container-page flex flex-col gap-12 lg:gap-18">
        <div className="flex flex-col gap-6 lg:-mx-0.5 lg:grid lg:grid-cols-[577px_580px] lg:items-end lg:gap-10.75">
          <h2 className="font-heading text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-black-950 md:text-heading-m lg:max-w-144.25">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-m text-black-700 md:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-2 lg:-mx-0.5 lg:grid-cols-3 lg:gap-10.25">
          {testimonials.map((t) => (
            <li key={t.name}>
              <TestimonialCard {...t} avatar={hasPublicFile(t.avatar) ? t.avatar : undefined} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
