import type { ReactNode } from "react";
import { AvatarGroup, Rating } from "@/components/ui";
import type { Avatar } from "@/components/ui/AvatarGroup";
import { cn } from "@/lib/utils";

function FloatingCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("absolute flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]", className)}>
      {children}
    </div>
  );
}

export function LearningProgressCard({ value, className }: { value: number; className?: string }) {
  return (
    <FloatingCard className={className}>
      <p className="text-label-s text-shuttle-gray-950">Learning Progress</p>
      <p className="w-50 font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950">
        {value}%
      </p>
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-50 overflow-hidden rounded-3xl bg-[#f6f6f6]"
      >
        <div className="h-full rounded-3xl bg-electric-lime-400" style={{ width: `${value}%` }} />
      </div>
    </FloatingCard>
  );
}

type HappyStudentsCardProps = {
  rating: number;
  reviews: number;
  avatars: Avatar[];
  moreLabel: string;
  className?: string;
};

export function HappyStudentsCard({ rating, reviews, avatars, moreLabel, className }: HappyStudentsCardProps) {
  return (
    <FloatingCard className={cn("w-64.5", className)}>
      <div className="flex flex-col">
        <p className="text-label-m text-shuttle-gray-950">Happy Students</p>
        <Rating value={rating} count={reviews} size="sm" />
      </div>
      <AvatarGroup avatars={avatars} max={avatars.length} moreLabel={moreLabel} size="md" />
    </FloatingCard>
  );
}

type CategoryCardProps = {
  title: string;
  courses: string;
  students: string;
  className?: string;
};

export function CategoryCard({ title, courses, students, className }: CategoryCardProps) {
  return (
    <FloatingCard className={cn("gap-0 whitespace-nowrap", className)}>
      <p className="text-label-m text-shuttle-gray-950">{title}</p>
      <p className="flex items-center gap-2 text-body-xs text-shuttle-gray-400">
        <span>{courses}</span>
        <span aria-hidden className="text-[10px] leading-normal">
          •
        </span>
        <span>{students}</span>
      </p>
    </FloatingCard>
  );
}
