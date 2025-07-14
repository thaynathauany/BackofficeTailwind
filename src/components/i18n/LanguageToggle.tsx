"use client";

import { useLanguageStore } from "@/store/languageStore";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguageStore();

  const toggleLanguage = () => {
    const newLocale = locale === "pt" ? "es" : "pt";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded bg-primary text-black hover:bg-secondary transition-colors"
    >
      Mudar idioma (atual: {locale})
    </button>
  );
}
