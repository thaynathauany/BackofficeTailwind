"use client";

import { useLanguageStore } from "@/store/languageStore";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguageStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as "pt" | "es";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <label
        htmlFor="language"
        className="text-sm font-medium text-muted-foreground"
      ></label>
      <select
        id="language"
        value={locale}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-purple"
      >
        <option value="pt">Português (BR)</option>
        <option value="es">Español (MX)</option>
      </select>
    </div>
  );
}
