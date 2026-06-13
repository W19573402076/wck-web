import { useTranslations } from "next-intl";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/W19573402076?tab=repositories",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Gitee",
    href: "https://gitee.com/eleven-w",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.594v3.646H11.49a2.6 2.6 0 0 0-2.597 2.412c-.01.12-.017.24-.017.361 0 .114.007.226.017.338a2.6 2.6 0 0 0 2.413 2.412c.12.01.24.017.362.017h1.168v2.56c0 .325.264.592.592.594h3.646a.594.594 0 0 0 .593-.594v-3.646h2.56a.593.593 0 0 0 .593-.594v-3.646a.594.594 0 0 0-.594-.594h-2.56V8.52a.594.594 0 0 0-.594-.594h-3.646a.593.593 0 0 0-.592.594v2.56h-1.168a1.122 1.122 0 0 1-1.12-1.12v-.018a1.122 1.122 0 0 1 1.12-1.12h3.668c.328 0 .592-.266.592-.594V5.927a.594.594 0 0 0-.593-.594z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:2962618149@qq.com",
    title: "2962618149@qq.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "QQ",
    href: "tencent://message/?uin=2962618149",
    title: "2962618149",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-11 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.5-5c-3.3 0-6 2.7-6 6 0 1.5.6 2.9 1.5 3.9-.5.3-1.1.5-1.8.7-.3.1-.5.4-.4.7.1.3.4.5.7.4 1.1-.4 2.1-.8 3-1.3.7.3 1.5.5 2.4.5 3.3 0 6-2.7 6-6s-2.7-6-6-6z" />
      </svg>
    ),
  },
  {
    label: "WeChat",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.5 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM3.3 14.7A8 8 0 0 1 12 3c4.4 0 8 3.6 8 8s-3.6 8-8 8c-.7 0-1.4-.1-2.1-.3l-3.2 1.6c-.3.1-.6 0-.7-.3-.1-.3 0-.6.2-.8L7.7 18A7.9 7.9 0 0 1 3.3 14.7z" />
      </svg>
    ),
    title: "18570903696",
  },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-[var(--card-border)] mt-24">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Social links */}
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title ?? link.label}
              className="p-2 rounded-lg text-[var(--fg-secondary)] hover:text-[var(--accent-mid)] hover:bg-[var(--card-bg)] transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-[var(--fg-secondary)]">
            &copy; {new Date().getFullYear()} WCK. {t("rights")}
          </p>
          <p className="text-xs text-[var(--fg-secondary)]/60 mt-1">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
