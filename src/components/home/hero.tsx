"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";
import Button from "@/components/ui/button";

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Animated gradient blob background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[var(--accent-start)]/20 via-[var(--accent-mid)]/10 to-[var(--accent-end)]/20 blur-[100px] animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[var(--accent-end)]/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-[var(--fg-secondary)] mb-4">{t("greeting")}</p>
          <GradientText>{t("name")}</GradientText>
          <p className="mt-4 text-xl md:text-2xl font-medium text-[var(--fg-primary)]">
            {t("tagline")}
          </p>
          <p className="mt-4 max-w-xl mx-auto text-[var(--fg-secondary)] leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/projects" locale={locale}>
              {t("viewProjects")}
            </Button>
            <Button href="/blog" locale={locale} variant="outline">
              {t("readBlog")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
