"use client";

import { useTranslations } from "next-intl";
import LanguageToggle from "@/components/i18n/LanguageToggle";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";

export default function SettingsPage() {
  const t = useTranslations("Settings");

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("adminName")}
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: Ana Souza"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("language")}
          </label>
          <div className="flex align-center gap-4">
            <LanguageToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
