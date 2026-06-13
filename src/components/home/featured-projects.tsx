import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import AnimatedSection from "@/components/ui/animated-section";
import SectionHeading from "@/components/ui/section-heading";

export default function FeaturedProjects({ locale }: { locale: "en" | "zh" }) {
  const t = useTranslations("home");
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <AnimatedSection>
        <SectionHeading title={t("featuredProjects")} />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.15}>
            <Link href={`/projects`} locale={locale}>
              <ProjectCard project={project} locale={locale} />
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            locale={locale as "en" | "zh"}
            className="text-sm font-medium text-[var(--accent-mid)] hover:underline"
          >
            {t("viewAll")}
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
