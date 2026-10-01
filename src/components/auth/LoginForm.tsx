"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type LoginValues = {
  email: string;
  password: string;
};

const inputClass =
  "h-13 w-full rounded-3xl border bg-white px-6 text-body-l text-shuttle-gray-950 outline-none transition-colors placeholder:text-shuttle-gray-400 focus:border-persian-blue-800";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-s text-shuttle-gray-950">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="px-2 text-body-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const LoginForm = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ mode: "onTouched" });

  const onSubmit = () => {
    setSubmitting(true);
    router.push("/");
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Field id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(inputClass, errors.email ? "border-red-500" : "border-shuttle-gray-200")}
          {...register("email", {
            required: "Enter your email address",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
          })}
        />
      </Field>

      <Field id="password" label="Password" error={errors.password?.message}>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="********"
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
          className={cn(inputClass, errors.password ? "border-red-500" : "border-shuttle-gray-200")}
          {...register("password", {
            required: "Enter your password",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
          })}
        />
      </Field>

      <Button type="submit" disabled={submitting} className="self-end">
        {submitting ? "Signing in…" : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
