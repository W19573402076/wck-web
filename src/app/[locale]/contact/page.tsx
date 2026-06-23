"use client";

import { useState, type FormEvent, useRef } from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedSection from "@/components/ui/animated-section";
import GlassCard from "@/components/ui/glass-card";
import Button from "@/components/ui/button";

/**
 * Contact form that sends emails via EmailJS (pure frontend, no backend needed).
 * Set the NEXT_PUBLIC_EMAILJS_* environment variables.
 * Sign up at https://emailjs.com, connect your QQ email, create a template.
 */
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactPage() {
  const t = useTranslations("contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(name: string, email: string, message: string): Record<string, string> {
    const errs: Record<string, string> = {};

    if (!name.trim()) errs.name = t("validation.nameRequired");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = t("validation.emailInvalid");
    if (!message.trim() || message.trim().length < 10)
      errs.message = t("validation.messageMin");

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    // Honeypot check
    if (formData.get("_honeypot")) {
      setState("success");
      return;
    }

    const validationErrors = validate(name, email, message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setState("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name.trim(),
            from_email: email.trim(),
            message: message.trim(),
          },
        }),
      });

      if (res.ok) {
        setState("success");
        formRef.current?.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--card-border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--fg-primary)] placeholder:text-[var(--fg-secondary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-mid)] focus:border-transparent transition-all";

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <AnimatedSection>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <GlassCard>
          {state === "success" ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg font-medium text-[var(--fg-primary)]">
                {t("success")}
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <input type="text" name="_honeypot" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--fg-primary)] mb-1"
                  >
                    {t("name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("namePlaceholder")}
                    className={inputClass}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--fg-primary)] mb-1"
                  >
                    {t("email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className={inputClass}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--fg-primary)] mb-1"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t("messagePlaceholder")}
                    className={inputClass}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {state === "error" && (
                  <p className="text-sm text-red-400">{t("error")}</p>
                )}

                <Button type="submit" disabled={state === "sending"} className="w-full justify-center">
                  {state === "sending" ? t("sending") : t("send")}
                </Button>
              </div>
            </form>
          )}
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
