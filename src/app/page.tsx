"use client";

import { useTranslations } from "next-intl";
import LanguageToggle from "@/components/i18n/LanguageToggle";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl md:text-4xl font-bold text-foreground">
        {t("title")}
      </h1>
      <p className="text-lg text-foreground mt-2">{t("description")}</p>
      <LanguageToggle />
    </div>
  );
}
