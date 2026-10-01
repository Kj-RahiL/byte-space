"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui";
import { EMAIL_PATTERN } from "./validation";
import { FormField, inputClasses } from "./FormField";

type RegisterValues = {
  fullName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({ mode: "onTouched" });

  const onSubmit = () => {
    setSubmitting(true);
    router.push("/");
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <FormField id="fullName" label="Full Name" error={errors.fullName?.message}>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jamie Davis"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={inputClasses(!!errors.fullName)}
          {...register("fullName", {
            required: "Enter your full name",
            validate: (v) => v.trim().length >= 2 || "Enter your full name",
          })}
        />
      </FormField>

      <FormField id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClasses(!!errors.email)}
          {...register("email", {
            required: "Enter your email address",
            pattern: { value: EMAIL_PATTERN, message: "Enter a valid email address" },
          })}
        />
      </FormField>

      <FormField id="password" label="Password" error={errors.password?.message}>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="********"
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
          className={inputClasses(!!errors.password)}
          {...register("password", {
            required: "Choose a password",
            minLength: { value: 8, message: "Use at least 8 characters" },
          })}
        />
      </FormField>

      <Button type="submit" disabled={submitting} className="self-end">
        {submitting ? "Creating account…" : "Continue"}
      </Button>
    </form>
  );
};

export default RegisterForm;
