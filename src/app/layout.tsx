import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Headings / display text
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600"],
  display: "swap",
});

// Body / label text — Satoshi isn't on Google Fonts, so it's self-hosted
const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description:
    "Get access to hundreds of courses — unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        data-new-gr-c-s-check-loaded="14.1313.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
