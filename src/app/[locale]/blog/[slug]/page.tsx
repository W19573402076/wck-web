import { setRequestLocale } from "next-intl/server";
import { getAllPostSlugs, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogComments from "@/components/blog/blog-comments";
import GlassCard from "@/components/ui/glass-card";

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "zh", slug },
  ]);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPost(slug);
  if (!post) notFound();

  // Dynamically import the MDX file — @next/mdx compiles it as a React component
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <article>
        {/* Header */}
        <header className="mb-10">
          <time className="text-sm text-[var(--accent-mid)] font-mono">
            {new Date(post.date).toLocaleDateString(
              locale === "zh" ? "zh-CN" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </time>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold gradient-text">
            {post.title[locale as "en" | "zh"]}
          </h1>
          <p className="mt-3 text-[var(--fg-secondary)]">
            {post.description[locale as "en" | "zh"]}
          </p>
          {post.tags?.length > 0 && (
            <div className="mt-4 flex gap-1.5">
              {post.tags.map((tag) => (
                <span key={tag} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* MDX Content */}
        <GlassCard>
          <div className="prose-custom">
            <Content />
          </div>
        </GlassCard>
      </article>

      {/* Comments */}
      <BlogComments />
    </div>
  );
}
