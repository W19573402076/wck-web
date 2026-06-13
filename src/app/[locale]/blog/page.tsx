import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blog/post-card";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";

export default async function BlogListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <AnimatedSection>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      </AnimatedSection>

      {posts.length === 0 ? (
        <AnimatedSection delay={0.1}>
          <p className="text-center text-[var(--fg-secondary)] py-12">{t("noPosts")}</p>
        </AnimatedSection>
      ) : (
        <div className="grid gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <PostCard post={post} locale={locale as "en" | "zh"} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}
