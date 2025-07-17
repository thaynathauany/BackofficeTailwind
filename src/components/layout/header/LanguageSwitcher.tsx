"use client";

import { useLanguageStore } from "@/store/languageStore";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguageStore();
  const t = useTranslations("Header");

  const languages: { code: "pt" | "es"; label: string; emoji: string }[] = [
    { code: "pt", label: t("portuguese"), emoji: "🇧🇷" },
    { code: "es", label: t("spanish"), emoji: "🇲🇽" },
  ];
  const handleChange = (lang: "pt" | "es") => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  return (
    <div className="flex-col gap-2 px-4 py-2 w-full">
      <span className="text-sm font-medium text-gray-700 mb-1">
        {t("language")}:
      </span>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          className={`flex items-center text-gray-900 hover:bg-gray-100 justify-between gap-2 w-full px-3 py-2 text-sm${
            locale === lang.code
              ? "bg-gray-100 font-semibold border-gray-400"
              : "bg-white border-gray-300"
          }`}
        >
          <span className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <span>{lang.emoji}</span>
            <span>{lang.label}</span>
          </span>
          {locale === lang.code && (
            <CheckIcon className="h-4 w-4 text-green-500" />
          )}
        </button>
      ))}
    </div>
  );
}
