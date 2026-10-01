import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function inputClasses(hasError: boolean) {
  return cn(
    "h-13 w-full rounded-3xl border bg-white px-6 text-body-l text-shuttle-gray-950 outline-none transition-colors placeholder:text-shuttle-gray-400 focus:border-persian-blue-800",
    hasError ? "border-red-500" : "border-shuttle-gray-200",
  );
}

export function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-s text-shuttle-gray-950">
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="px-2 text-body-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
