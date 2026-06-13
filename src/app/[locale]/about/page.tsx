import { getTranslations, setRequestLocale } from "next-intl/server";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";
import Button from "@/components/ui/button";

const skillGroups: Record<
  string,
  { labelKey: string; skills: string[]; icon: string }
> = {
  robotics: {
    labelKey: "robotics",
    skills: ["ROS2", "RoboMaster", "Control Systems", "PID Control", "Kinematics", "Gimbal"],
    icon: "🤖",
  },
  embedded: {
    labelKey: "embedded",
    skills: ["STM32", "FreeRTOS", "CAN Bus", "SPI/I2C/UART", "ARM GCC", "Keil / CubeMX"],
    icon: "🔧",
  },
  simulation: {
    labelKey: "simulation",
    skills: ["MuJoCo", "GLFW", "Gazebo", "CMake", "Git", "VSCode"],
    icon: "💻",
  },
  languages: {
    labelKey: "languages",
    skills: ["C/C++", "Python", "TypeScript", "Shell Script", "Makefile"],
    icon: "📝",
  },
};

interface Experience {
  period: string;
  role: Record<"en" | "zh", string>;
  description: Record<"en" | "zh", string>;
}

const experiences: Experience[] = [
  {
    period: "2024 — 2025",
    role: {
      en: "RoboMaster Embedded Developer",
      zh: "RoboMaster 嵌入式开发",
    },
    description: {
      en: "Developed embedded control systems for Hero robot and omnidirectional chassis based on basic_framework. Built image transmission link. Implemented BSP-Module-App layered architecture with pub-sub messaging for decoupled communication.",
      zh: "基于 basic_framework 为英雄机器人和全向底盘开发嵌入式控制系统。构建图传链路。实现 BSP-Module-App 三层架构和发布-订阅消息通信，实现应用解耦。",
    },
  },
  {
    period: "2025 — 2026",
    role: {
      en: "Robotics & Simulation Engineer",
      zh: "机器人 & 仿真工程师",
    },
    description: {
      en: "Built real-time MuJoCo physics simulations with GLFW rendering. Integrated STM32-based physical joystick control via ROS2 communication layer. Developed procedural skybox rendering and HUD overlay systems for interactive visualization.",
      zh: "构建基于 MuJoCo 的实时物理仿真系统，GLFW 渲染。通过 ROS2 通信层集成 STM32 物理摇杆控制。开发程序化天空盒渲染和 HUD 叠加系统，实现交互可视化。",
    },
  },
];

interface SocialLink {
  label: Record<"en" | "zh", string>;
  url: string;
  icon: string;
  title?: string;
}

const socialLinks: SocialLink[] = [
  {
    label: { en: "GitHub", zh: "GitHub" },
    url: "https://github.com/W19573402076?tab=repositories",
    icon: "🐙",
  },
  {
    label: { en: "Gitee", zh: "Gitee" },
    url: "https://gitee.com/eleven-w",
    icon: "🔗",
  },
  {
    label: { en: "Email", zh: "邮箱" },
    url: "mailto:2962618149@qq.com",
    icon: "📧",
    title: "2962618149@qq.com",
  },
  {
    label: { en: "QQ: 2962618149", zh: "QQ: 2962618149" },
    url: "tencent://message/?uin=2962618149",
    icon: "💬",
  },
  {
    label: { en: "WeChat: 18570903696", zh: "微信: 18570903696" },
    url: "#",
    icon: "💚",
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const skillT = await getTranslations("about.skillGroups");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <AnimatedSection>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      </AnimatedSection>

      {/* Bio */}
      <AnimatedSection delay={0.1}>
        <GlassCard className="mb-8">
          <p className="text-[var(--fg-secondary)] leading-relaxed mb-4">
            {t("bio1")}
          </p>
          <p className="text-[var(--fg-secondary)] leading-relaxed mb-4">
            {t("bio2")}
          </p>
          <p className="text-sm text-[var(--accent-mid)] font-medium">
            🎓 {t("education")}
          </p>
        </GlassCard>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.2}>
        <h3 className="text-xl font-semibold mb-6 text-[var(--fg-primary)]">
          {t("skills")}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(skillGroups).map(([, group]) => (
            <GlassCard key={group.labelKey}>
              <h4 className="font-medium text-[var(--fg-primary)] mb-3 flex items-center gap-2">
                <span>{group.icon}</span>
                {skillT(group.labelKey as any)}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.3}>
        <h3 className="text-xl font-semibold mt-12 mb-6 text-[var(--fg-primary)]">
          {t("experience")}
        </h3>
        <GlassCard>
          <ul className="space-y-8">
            {experiences.map((exp, i) => (
              <li key={i} className="flex gap-4">
                <div className="hidden sm:block w-28 text-sm text-[var(--accent-mid)] font-mono shrink-0 pt-0.5">
                  {exp.period}
                </div>
                <div>
                  <h4 className="font-medium text-[var(--fg-primary)]">
                    {exp.role[locale as "en" | "zh"]}
                  </h4>
                  <p className="text-sm text-[var(--fg-secondary)] mt-1 leading-relaxed">
                    {exp.description[locale as "en" | "zh"]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>
      </AnimatedSection>

      {/* Social links */}
      <AnimatedSection delay={0.4}>
        <h3 className="text-xl font-semibold mt-12 mb-6 text-[var(--fg-primary)]">
          {t("social")}
        </h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <Button
              key={link.url + link.label.en}
              href={link.url}
              variant="outline"
              external
              className="text-sm"
              title={link.title}
            >
              <span className="mr-1">{link.icon}</span>
              {link.label[locale as "en" | "zh"]}
            </Button>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
