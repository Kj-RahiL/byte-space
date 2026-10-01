import Image from "next/image";
import type { Testimonial } from "@/constants/testimonials";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .replace(/[^A-Z]/gi, "")
    .slice(0, 2)
    .toUpperCase();
}

const TestimonialCard = ({ name, role, quote, avatar }: Testimonial) => {
  return (
    <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      {avatar ? (
        <Image
          src={avatar}
          alt=""
          width={80}
          height={80}
          className="size-20 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden
          className="flex size-20 items-center justify-center rounded-full bg-electric-lime-400 font-heading text-heading-s text-shuttle-gray-950"
        >
          {initials(name)}
        </span>
      )}
      <figcaption className="flex flex-col">
        <span className="font-heading text-heading-xs text-black-950">
          {name}
        </span>
        <span className="text-body-l text-persian-blue-800">{role}</span>
      </figcaption>
      <blockquote className="text-body-l text-black-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
