import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/hero";
import FeaturedProjects from "@/components/home/featured-projects";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale as "en" | "zh"} />
      <FeaturedProjects locale={locale as "en" | "zh"} />
    </>
  );
}
