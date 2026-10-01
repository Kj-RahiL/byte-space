"use client";

import { useState } from "react";
import Link from "next/link";
import { CourseCard } from "@/components/ui";
import { FEATURED, courseCategoryRows } from "@/constants/courses";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

type CourseExplorerProps = {
  courses: Course[];
};

// Category pills + the course grid they filter.
const CourseExplorer = ({ courses }: CourseExplorerProps) => {
  const [active, setActive] = useState(FEATURED);
  const visible =
    active === FEATURED
      ? courses
      : courses.filter((c) => c.category === active);
  const lastRow = courseCategoryRows.length - 1;

  return (
    <div className="flex flex-col gap-10 lg:gap-19.25">
      <div
        role="group"
        aria-label="Filter courses by category"
        className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-none md:mx-0 md:flex-wrap md:justify-center md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:flex-col lg:items-center lg:gap-5.25"
      >
        {courseCategoryRows.map((row, i) => (
          <div key={i} className="contents lg:flex lg:gap-4">
            {row.map((category) => {
              const isActive = category === active;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(category)}
                  className={cn(
                    "shrink-0 rounded-3xl px-4 py-3 text-label-m whitespace-nowrap transition-colors",
                    isActive
                      ? "bg-electric-lime-400 text-shuttle-gray-950"
                      : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100",
                  )}
                >
                  {category}
                </button>
              );
            })}
            {i === lastRow && (
              <Link
                href="/courses"
                className="shrink-0 self-center py-3 text-label-m whitespace-nowrap text-persian-blue-800 hover:underline"
              >
                + More
              </Link>
            )}
          </div>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-3xl bg-shuttle-gray-50 px-6 py-16 text-center">
          <p className="font-heading text-heading-xs text-ink">
            No {active} courses yet
          </p>
          <p className="text-body-m text-shuttle-gray-400">
            New courses are added every week.{" "}
            <Link
              href="/courses"
              className="text-persian-blue-800 hover:underline"
            >
              Browse all courses
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseExplorer;
