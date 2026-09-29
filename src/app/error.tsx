"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-transparent text-white flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated Error Icon */}
        <div className="mb-12">
          <div className="inline-block relative mb-8">
            <div
              className="text-7xl md:text-8xl font-black tracking-tighter animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              ⚠️
            </div>
            <div className="absolute inset-0 text-7xl md:text-8xl font-black tracking-tighter opacity-50 blur-md -z-10 animate-pulse">
              ⚠️
            </div>
          </div>

          <p
            className="text-sm uppercase tracking-[0.35em] text-orange-300/75 mb-4 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Something Went Wrong
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            An Unexpected Error Occurred
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed text-slate-300 mb-2 max-w-xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            We encountered an unexpected issue. Our team has been notified and
            we&apos;re working to fix it.
          </p>
          {error.message && (
            <p
              className="text-xs md:text-sm text-slate-400 mb-8 font-mono bg-slate-900/40 backdrop-blur-sm rounded-lg px-4 py-3 inline-block animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              {error.message}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full btn-secondary px-8 py-3 text-sm font-semibold text-white shadow-sm shadow-amber-500/30 transition-all duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-600/50 bg-slate-900/40 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/60 hover:scale-105 active:scale-95"
          >
            Go Home
          </Link>
        </div>

        {/* Help text */}
        <p
          className="mt-12 text-xs md:text-sm text-slate-400/80 animate-fadeIn"
          style={{ animationDelay: "0.7s" }}
        >
          Need immediate assistance? Contact{" "}
          <span className="text-sky-300/80 font-medium">support@nexachat.com</span>
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

export default Error;
