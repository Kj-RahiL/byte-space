import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";

const categories = [
  { label: "Design", icon: "/icons/categories/design.svg" },
  { label: "Development", icon: "/icons/categories/development.svg" },
  { label: "IT & Software", icon: "/icons/categories/it-software.svg" },
  { label: "Business", icon: "/icons/categories/business.svg" },
  { label: "Marketing", icon: "/icons/categories/marketing.svg" },
  { label: "Photography", icon: "/icons/categories/photography.svg" },
];

function CategoryCard({ label, icon }: { label: string; icon: string }) {
  return (
    <Link
      href={`/courses?category=${encodeURIComponent(label)}`}
      className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-gray-200 bg-white transition-colors hover:border-electric-lime-400 hover:bg-shuttle-gray-50 lg:size-41.75"
    >
      <span className="flex items-center justify-center rounded-full bg-electric-lime-400 p-3 transition-transform group-hover:scale-105">
        <Image src={icon} alt="" width={36} height={36} unoptimized />
      </span>
      <span className="text-label-xl whitespace-nowrap text-shuttle-gray-950">{label}</span>
    </Link>
  );
}

const LearningPaths = () => {
  return (
    <section className="container-page flex flex-col gap-10 pb-16 lg:gap-17 lg:pb-30">
      <SectionHeading
        size="s"
        descriptionClassName="lg:max-w-231.25"
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:-mx-px lg:flex lg:justify-center lg:gap-10">
        {categories.map((c) => (
          <li key={c.label}>
            <CategoryCard {...c} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LearningPaths;
