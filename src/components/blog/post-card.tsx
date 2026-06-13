import { Link } from "@/i18n/navigation";
import GlassCard from "@/components/ui/glass-card";
import type { PostMeta } from "@/lib/blog";

interface PostCardProps {
  post: PostMeta;
  locale: "en" | "zh";
}

export default function PostCard({ post, locale }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} locale={locale}>
      <GlassCard hover as="article" className="flex flex-col h-full">
        <time className="text-xs text-[var(--accent-mid)] font-mono mb-2">
          {new Date(post.date).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h3 className="text-lg font-semibold text-[var(--fg-primary)] mb-2">
          {post.title[locale]}
        </h3>
        <p className="text-sm text-[var(--fg-secondary)] mb-4 flex-1 line-clamp-2">
          {post.description[locale]}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {post.tags?.map((tag) => (
            <span key={tag} className="tech-pill">
              {tag}
            </span>
          ))}
        </div>
      </GlassCard>
    </Link>
  );
}
