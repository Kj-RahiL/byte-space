import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";
import { AvatarGroup } from "./AvatarGroup";
import { Rating } from "./Rating";

type CourseCardProps = {
  course: Course;
  className?: string;
  preload?: boolean;
};

function MetaChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-3xl bg-[rgb(246_246_246/0.6)] px-2.5 py-1.5 sm:px-3 text-label-xs whitespace-nowrap text-black-700 backdrop-blur-xs">
      {children}
    </span>
  );
}

export function CourseCard({ course, className, preload }: CourseCardProps) {
  const {
    title,
    creator,
    creatorHref,
    href,
    image,
    lessons,
    duration,
    comments,
    level,
    rating,
    price,
    pricePeriod = "lifetime",
    students,
    studentsMoreLabel,
  } = course;

  return (
    <article
      className={cn(
        "flex w-full flex-col gap-5 overflow-hidden rounded-3xl border border-shuttle-gray-200 bg-white p-3.75 pb-4",
        className,
      )}
    >
      {/* Thumbnail + meta chips */}
      <div className="relative aspect-341/195 w-full overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          preload={preload}
        />
        <div className="absolute inset-x-3 bottom-4.75 flex flex-wrap gap-2 sm:gap-3">
          <MetaChip>{lessons} Lessons</MetaChip>
          <MetaChip>{duration}</MetaChip>
          <MetaChip>{comments} Comments</MetaChip>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Title, creator & rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col">
            <h3 className="truncate font-heading text-heading-xs text-black-950">
              {href ? (
                <Link href={href} className="hover:text-persian-blue-800">
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>
            <p className="text-body-xs leading-5 text-black-700">
              by{" "}
              {creatorHref ? (
                <Link href={creatorHref} className="text-persian-blue-800 hover:underline">
                  {creator}
                </Link>
              ) : (
                <span className="text-persian-blue-800">{creator}</span>
              )}
            </p>
          </div>
          <Rating value={rating} className="shrink-0" />
        </div>

        {/* Level + enrolled students */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 py-1.5 text-label-xs text-shuttle-gray-700">
            <Image src="/icons/signal-cellular-alt.svg" alt="" width={20} height={20} unoptimized />
            {level}
          </span>
          <AvatarGroup avatars={students} moreLabel={studentsMoreLabel} size="sm" />
        </div>

        {/* Price */}
        <p className="flex items-end">
          <span className="font-heading text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-persian-blue-800">
            ${price}
          </span>
          <span className="text-body-xs text-black-700">/{pricePeriod}</span>
        </p>
      </div>
    </article>
  );
}
