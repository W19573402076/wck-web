"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navKeys = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
] as const;

export default function MobileNav({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg text-[var(--fg-secondary)] hover:bg-[var(--card-bg)] transition-colors"
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M6 6l8 8M14 6l-8 8" />
          ) : (
            <path d="M3 5h14M3 10h14M3 15h14" />
          )}
        </svg>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-64 z-50 glass p-6"
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg text-[var(--fg-secondary)] hover:bg-[var(--card-bg)]"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l8 8M14 6l-8 8" />
                  </svg>
                </button>
              </div>
              <nav>
                <ul className="space-y-2">
                  {navKeys.map(({ key, href }) => {
                    const isActive =
                      pathname === `/${locale}${href === "/" ? "" : href}`;
                    return (
                      <li key={key}>
                        <Link
                          href={href}
                          locale={locale}
                          onClick={() => setOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? "text-[var(--accent-mid)] bg-[var(--accent-mid)]/10"
                              : "text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--card-bg)]"
                          }`}
                        >
                          {t(key)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
