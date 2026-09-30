import Form from "next/form";
import Image from "next/image";
import { Button } from "@/components/ui";

const HeroSearch = () => {
  return (
    <Form
      action="/courses"
      role="search"
      className="flex w-full max-w-145.25 items-start gap-2 sm:gap-4"
    >
      <label className="flex h-13 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 transition-shadow focus-within:ring-2 focus-within:ring-electric-lime-400 sm:px-6">
        <Image
          src="/icons/search.svg"
          alt=""
          width={24}
          height={24}
          unoptimized
        />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400"
        />
      </label>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default HeroSearch;
