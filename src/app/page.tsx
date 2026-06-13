"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Root page — detects browser language and redirects to /en or /zh.
 * Uses Next.js router so basePath is automatically included.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const preferred = navigator.language?.startsWith("zh") ? "zh" : "en";
    router.replace(`/${preferred}`);
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-[var(--bg-primary)]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-[var(--accent-mid)] border-t-transparent" />
        <p className="text-[var(--fg-secondary)]">Loading...</p>
      </div>
    </div>
  );
}
