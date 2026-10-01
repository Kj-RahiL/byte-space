"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

/** Newsletter sign-up. No backend yet — validates and confirms locally. */
const NewsletterForm = () => {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  if (status === "done") {
    return (
      <p role="status" className="flex h-13 items-center text-body-m text-persian-blue-800">
        Thanks for subscribing! Watch your inbox for our next update.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("done");
      }}
      className="flex w-full items-start gap-3 sm:gap-6"
    >
      <label className="min-w-0 flex-1 sm:w-94 sm:flex-none">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="h-13 w-full rounded-3xl border border-shuttle-gray-200 bg-white px-6 text-body-m leading-[1.6] text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400 focus:border-persian-blue-800"
        />
      </label>
      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export default NewsletterForm;
