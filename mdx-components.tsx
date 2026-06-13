import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-10 mb-4 text-3xl font-bold gradient-text">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 text-2xl font-semibold text-[var(--fg-primary)]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-xl font-medium text-[var(--fg-primary)]">{children}</h3>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[var(--accent-mid)] hover:underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-[var(--card-bg)] px-1.5 py-0.5 text-sm border border-[var(--card-border)]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4">
        {children}
      </pre>
    ),
    p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="my-4 list-disc pl-6 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="my-4 list-decimal pl-6 space-y-1">{children}</ol>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-[var(--accent-mid)] pl-4 italic text-[var(--fg-secondary)]">
        {children}
      </blockquote>
    ),
    img: ({ src, alt }) => (
      <img src={src} alt={alt} className="my-6 rounded-xl w-full" loading="lazy" />
    ),
    ...components,
  };
}
