import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";
import Button from "@/components/ui/button";
import GlassCard from "@/components/ui/glass-card";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <AnimatedSection>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      </AnimatedSection>

      {/* Grid of all projects */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.1}>
            <GlassCard hover as="article">
              {/* Image */}
              <div className="relative w-full aspect-video mb-5 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--accent-start)]/20 via-[var(--accent-mid)]/10 to-[var(--accent-end)]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    className="text-[var(--fg-secondary)]/30"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h12M12 17v4" />
                  </svg>
                </div>
              </div>

              {/* Year badge */}
              <span className="text-xs text-[var(--accent-mid)] font-mono mb-2 inline-block">
                {project.year}
              </span>

              <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-2">
                {project.title[locale as "en" | "zh"]}
              </h3>
              <p className="text-sm text-[var(--fg-secondary)] mb-4 leading-relaxed">
                {project.shortDescription[locale as "en" | "zh"]}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <details className="mt-2 group">
                <summary className="text-sm font-medium text-[var(--accent-mid)] cursor-pointer hover:underline">
                  {t("features")}
                </summary>
                <ul className="mt-2 ml-4 list-disc text-sm text-[var(--fg-secondary)] space-y-1">
                  {project.features[locale as "en" | "zh"].map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </details>

              {/* Links */}
              <div className="mt-5 flex gap-3">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    external
                    className="text-xs px-4 py-2"
                  >
                    GitHub
                  </Button>
                )}
                {project.giteeUrl && (
                  <Button
                    href={project.giteeUrl}
                    variant="ghost"
                    external
                    className="text-xs px-4 py-2"
                  >
                    Gitee ↗
                  </Button>
                )}
              </div>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
