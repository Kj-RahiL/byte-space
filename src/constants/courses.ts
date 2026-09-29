import type { Avatar } from "@/components/ui/AvatarGroup";
import type { Course } from "@/types/course";

export const courseStudents: Avatar[] = [
  { src: "/images/avatars/avatar-1.png", alt: "Student" },
  { src: "/images/avatars/avatar-2.png", alt: "Student" },
  { src: "/images/avatars/avatar-3.png", alt: "Student" },
  { src: "/images/avatars/avatar-4.png", alt: "Student" },
];

/** Larger avatars used by the hero "Happy Students" card */
export const happyStudents: Avatar[] = [5, 6, 7, 8, 9, 10, 11].map((n) => ({
  src: `/images/avatars/avatar-${n}.png`,
  alt: "Student",
}));

const shared = {
  creator: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  rating: 4.5,
  price: 25,
  pricePeriod: "lifetime",
  students: courseStudents,
  studentsMoreLabel: "26+",
} satisfies Omit<Course, "id" | "title" | "image">;

export const courses: Course[] = [
  { id: "learn-figma", title: "Learn Figma from Basic", image: "/images/courses/course-1.jpg", ...shared },
  { id: "digital-asset", title: "Build Digital Asset", image: "/images/courses/course-2.jpg", ...shared },
  { id: "big-data", title: "the Power of Big Data", image: "/images/courses/course-3.jpg", ...shared },
  {
    id: "productivity-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/course-4.jpg",
    ...shared,
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    image: "/images/courses/course-5.jpg",
    ...shared,
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    image: "/images/courses/course-6.jpg",
    ...shared,
  },
];
