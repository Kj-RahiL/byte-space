"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-transparent text-white flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="mb-12">
          <div className="inline-block relative mb-8">
            <h1
              className="text-9xl md:text-10xl font-black tracking-tighter text-white drop-shadow-lg animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-10xl font-black tracking-tighter bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent opacity-50 blur-md -z-10">
              404
            </div>
          </div>

          <p
            className="text-sm uppercase tracking-[0.35em] text-amber-300/75 mb-4 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Page Not Found
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            Oops! We can&apos;t find that page
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-slate-300 mb-12 max-w-xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full btn-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-700/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Return to Home
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center btn-secondary rounded-full border border-slate-600/50 bg-slate-900/40 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/60 hover:scale-105 active:scale-95 "
          >
            Go Back
          </button>
        </div>

        {/* Help text */}
        <p
          className="mt-12 text-xs md:text-sm text-slate-400/80 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          Need help? Contact us at{" "}
          <span className="text-amber-300/80 font-medium">support@nexachat.com</span>
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
