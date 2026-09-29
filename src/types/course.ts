import type { Avatar } from "@/components/ui/AvatarGroup";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  creator: string;
  creatorHref?: string;
  href?: string;
  image: string;
  lessons: number;

  duration: string;
  comments: number;
  level: CourseLevel;
  rating: number;

  price: number;
  /** e.g. "lifetime" -> rendered as "/lifetime" */
  pricePeriod?: string;
  students: Avatar[];
  /** Counter label after the student avatars, e.g. "26+" */
  studentsMoreLabel?: string;
};
