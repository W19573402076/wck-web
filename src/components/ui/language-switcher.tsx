"use client";

import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const targetLocale = locale === "zh" ? "en" : "zh";

  // Build the target path by replacing the locale prefix
  const targetPath = pathname.replace(/^\/(en|zh)/, `/${targetLocale}`) || "/";

  return (
    <Link
      href={targetPath}
      locale={targetLocale}
      className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--card-bg)] transition-colors"
    >
      {targetLocale === "zh" ? "中文" : "EN"}
    </Link>
  );
}
