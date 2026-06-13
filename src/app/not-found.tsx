"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [locale, setLocale] = useState<"en" | "zh">("en");

  useEffect(() => {
    setLocale(navigator.language?.startsWith("zh") ? "zh" : "en");
  }, []);

  const t = {
    title: { en: "404", zh: "404" },
    message: { en: "Page not found", zh: "页面未找到" },
    goHome: { en: "Go back home", zh: "返回首页" },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)]">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold gradient-text">{t.title[locale]}</h1>
        <p className="mt-4 text-lg text-[var(--fg-secondary)]">{t.message[locale]}</p>
        <a
          href={`/${locale}`}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-start)] via-[var(--accent-mid)] to-[var(--accent-end)] px-6 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all"
        >
          {t.goHome[locale]}
        </a>
      </div>
    </div>
  );
}
