import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "span";
  className?: string;
}

export default function GradientText({
  children,
  as: Tag = "h1",
  className = "",
}: GradientTextProps) {
  return (
    <Tag
      className={`gradient-text ${Tag === "h1" ? "text-4xl md:text-5xl font-bold" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
