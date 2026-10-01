import Image from "next/image";

const Loading = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-1 flex-col items-center justify-center gap-6 bg-shuttle-gray-50 px-4"
    >
      <Image src="/icons/logo-mark.svg" alt="" width={58} height={63} unoptimized className="h-15.75 w-14.5" />
      <div className="flex items-center gap-2" aria-hidden>
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-3 rounded-full bg-electric-lime-400 motion-safe:animate-bounce"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
      <p className="font-brand text-2xl font-bold text-shuttle-gray-950">
        Loading<span className="sr-only"> page, please wait</span>
      </p>
    </div>
  );
};

export default Loading;
