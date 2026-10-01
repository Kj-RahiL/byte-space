import type { StaticImageData } from "next/image";
import type { Avatar } from "@/components/ui/AvatarGroup";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  creator: string;
  creatorHref?: string;
  href?: string;
  image: StaticImageData | string;

  category: string;
  lessons: number;

  duration: string;
  comments: number;
  level: CourseLevel;
  rating: number;

  price: number;
  pricePeriod?: string;
  students: Avatar[];
  studentsMoreLabel?: string;
};
