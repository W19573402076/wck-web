"use client";

import GlassCard from "@/components/ui/glass-card";
import type { Project } from "@/data/projects";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface ProjectCardProps {
  project: Project;
  locale: "en" | "zh";
}

function ProjectImage({ imageUrl, title }: { imageUrl: string; title: string }) {
  return (
    <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--accent-start)]/20 via-[var(--accent-mid)]/10 to-[var(--accent-end)]/20">
      <img
        src={`${BASE_PATH}${imageUrl}`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[var(--fg-secondary)]/40"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <GlassCard hover as="article" className="flex flex-col h-full">
      <ProjectImage imageUrl={project.imageUrl} title={project.title[locale]} />

      {/* Content */}
      <h3 className="text-lg font-semibold text-[var(--fg-primary)] mb-2">
        {project.title[locale]}
      </h3>
      <p className="text-sm text-[var(--fg-secondary)] mb-4 flex-1">
        {project.shortDescription[locale]}
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.slice(0, 5).map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
