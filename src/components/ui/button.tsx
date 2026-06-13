"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  locale?: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  title?: string;
}

const base =
  "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[var(--accent-start)] via-[var(--accent-mid)] to-[var(--accent-end)] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]",
  outline:
    "border border-[var(--card-border)] text-[var(--fg-primary)] hover:bg-[var(--card-bg)]",
  ghost:
    "text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--card-bg)]",
};

export default function Button({
  children,
  href,
  locale,
  variant = "primary",
  className = "",
  external = false,
  onClick,
  type,
  disabled = false,
  title,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          title={title}
          whileTap={{ scale: 0.97 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link href={href} locale={locale} className={classes} title={title}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      title={title}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
