import Link from "next/link";
import { Logo } from "@/components/ui";
import NewsletterForm from "./NewsletterForm";

type FooterLink = { label: string; href: string };

const browseLinks: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "/courses?sort=featured" },
    { label: "Featured Categories", href: "/courses#categories" },
    { label: "Business", href: "/courses?category=Business" },
    { label: "IT", href: "/courses?category=IT%20%26%20Software" },
    { label: "Design", href: "/courses?category=Design" },
  ],
  [
    { label: "Development", href: "/courses?category=Development" },
    { label: "Marketing", href: "/courses?category=Marketing" },
    { label: "Photography", href: "/courses?category=Photography" },
    { label: "Finance", href: "/courses?category=Finance" },
    { label: "Sport", href: "/courses?category=Sport" },
  ],
];

const platformLinks: FooterLink[] = [
  { label: "Become a Creator", href: "/register?as=creator" },
  { label: "Affiliate Program", href: "/affiliate" },
  { label: "Contact", href: "/contact" },
  { label: "Help", href: "/help" },
  { label: "About", href: "/about" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            href={l.href}
            className="block text-body-s text-shuttle-gray-950 transition-colors hover:text-persian-blue-800"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Footer = () => {
  return (
    <footer className="border-t border-shuttle-gray-100 bg-white pt-12 pb-10 lg:pt-17.5 lg:pb-11.75">
      <div className="container-page flex flex-col gap-16 lg:gap-32.5">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-10 xl:grid-cols-[528px_580px] xl:justify-between">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-11.25">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-body-s text-shuttle-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <NewsletterForm />
              <p className="max-w-126 text-body-xs text-shuttle-gray-950">
                By subscribing, you agree to our{" "}
                <Link href="/privacy" className="underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:pt-12">
            <div className="col-span-2 grid grid-cols-2 gap-x-10 sm:col-span-2">
              <h2 className="sr-only">Browse</h2>
              {browseLinks.map((col, i) => (
                <LinkList key={i} links={col} />
              ))}
            </div>
            <div>
              <h2 className="sr-only">Platform</h2>
              <LinkList links={platformLinks} />
            </div>
          </nav>
        </div>

        {/* Copyright row */}
        <div className="flex flex-col gap-4 border-t border-shuttle-gray-200 pt-5.5 text-body-xs text-shuttle-gray-950 sm:flex-row sm:items-center sm:justify-between">
          <p>@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="block transition-colors hover:text-persian-blue-800">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
