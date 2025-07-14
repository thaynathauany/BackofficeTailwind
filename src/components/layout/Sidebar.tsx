"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");

  const links = [
    { href: "/", label: t("dashboard") },
    { href: "/settings", label: t("settings") },
  ];

  return (
    <aside className="h-full w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{t("title")}</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-purple text-black"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
