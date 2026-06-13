"use client";

import { useEffect } from "react";

/**
 * Root page — detects browser language and redirects to /en or /zh.
 * Static export compatible (no server-side redirect).
 */
export default function RootPage() {
  useEffect(() => {
    const preferred = navigator.language?.startsWith("zh") ? "zh" : "en";
    window.location.replace(`/${preferred}`);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-[var(--bg-primary)]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-[var(--accent-mid)] border-t-transparent" />
        <p className="text-[var(--fg-secondary)]">Loading...</p>
      </div>
    </div>
  );
}
