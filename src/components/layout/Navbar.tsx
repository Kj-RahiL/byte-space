"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button, Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const authLinks = {
  signIn: { label: "Sign In", href: "/login" },
  joinUs: { label: "Join Us", href: "/register" },
};

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function CartLink({ className }: { className?: string }) {
  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className={cn(
        "flex size-6 shrink-0 items-center justify-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/icons/shopping-bag.svg"
        alt=""
        width={24}
        height={24}
        unoptimized
      />
    </Link>
  );
}

const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={cn("relative z-40 text-shuttle-gray-50", className)}>
      <nav
        aria-label="Main"
        className="container-page grid h-20 grid-cols-[1fr_auto] items-center md:h-30 md:grid-cols-[1fr_auto_1fr]"
      >
        <Logo className="md:mt-8.75 md:ml-0.5 md:self-start" />

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ label, href }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block transition-colors hover:text-electric-lime-400",
                    "text-body-m leading-[1.6]",
                    active && "font-medium",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center justify-end gap-6">
          <Link
            href={authLinks.signIn.href}
            className="hidden text-body-m transition-colors hover:text-electric-lime-400 md:block"
          >
            {authLinks.signIn.label}
          </Link>
          <Link
            href={authLinks.joinUs.href}
            className="hidden text-body-m transition-colors hover:text-electric-lime-400 md:block"
          >
            {authLinks.joinUs.label}
          </Link>
          <CartLink />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-t border-white/15 bg-persian-blue-800 shadow-elevated md:hidden"
          >
            <div className="container-page flex flex-col gap-6 py-6">
              <ul className="flex flex-col">
                {navLinks.map(({ label, href }) => {
                  const active = isActive(pathname, href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block py-3 text-label-l transition-colors hover:text-electric-lime-400",
                          active
                            ? "text-electric-lime-400"
                            : "text-shuttle-gray-50",
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-3">
                <Button
                  href={authLinks.signIn.href}
                  onClick={() => setOpen(false)}
                  variant="secondary"
                  className="flex-1 border-white/30 bg-transparent text-shuttle-gray-50 hover:border-white hover:bg-white/10"
                >
                  {authLinks.signIn.label}
                </Button>
                <Button
                  href={authLinks.joinUs.href}
                  onClick={() => setOpen(false)}
                  className="flex-1"
                >
                  {authLinks.joinUs.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
