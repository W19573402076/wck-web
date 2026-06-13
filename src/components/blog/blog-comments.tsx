"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Giscus comments component.
 * To enable: set NEXT_PUBLIC_GISCUS_REPO and other env vars.
 * Falls back to a placeholder when not configured.
 */
export default function BlogComments() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  if (!mounted) {
    return <div className="h-[200px] mt-12" />;
  }

  if (!repo || !repoId || !categoryId) {
    return (
      <div className="mt-12 p-6 glass text-center">
        <p className="text-sm text-[var(--fg-secondary)]">
          💬 Comments will appear here once Giscus is configured.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <script
        src="https://giscus.app/client.js"
        data-repo={repo}
        data-repo-id={repoId}
        data-category="Blog Comments"
        data-category-id={categoryId}
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme={resolvedTheme === "dark" ? "dark" : "light"}
        data-lang="en"
        data-loading="lazy"
        async
      />
    </div>
  );
}
