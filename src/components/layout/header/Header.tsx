"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("invoices"), href: "/details" },
    { name: t("clients"), href: "/clients" },
  ];

  const profileItems = [
    { label: t("profile"), href: "#" },
    { label: t("settings"), href: "/settings" },
    { label: t("signOut"), href: "#" },
  ];

  return (
    <>
      <header className={`fixed flex inset-x-0 top-0 z-50 w-full bg-white border-b border-gray-900/10 transition-all duration-300 ${isScrolled ? "h-[90px]" : "h-[110px]"}`}>        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-x-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-3 p-3 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-5 text-primary" />
          </button>
          <img
            src="/images/logos/logodinero.svg"
            alt="Logotipo da Dinero"
          />
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                key={`${item.href}-${item.name}`}
                href={item.href}
                className={`transition-colors text-base ${isActive
                  ? "text-secondary font-bold"
                  : "text-primary hover:text-secondary"
                  }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-x-8">

          {/* Menu do usuário */}
          <Menu as="div" className="relative">
            <div>
              <MenuButton className="-m-1.5 flex items-center p-1.5 gap-x-2">
                <p className="text-small text-black">Zildomar</p>
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ background: "#B3B3B3", border: "3px solid #E0E0E0" }}
                >
                  <p className="text-white text-sm font-medium">Z</p>
                </div>
              </MenuButton>
            </div>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <div className="py-1 border-b border-gray-200">
                {profileItems.map((item, idx) => (
                  <MenuItem key={idx}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={`block px-4 py-2 text-sm text-black font-medium ${active ? "bg-gray-100" : ""
                          }`}
                      >
                        {item.label}
                      </a>
                    )}
                  </MenuItem>
                ))}
              </div>
              <div className="py-1">
                <LanguageSwitcher />
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-primary"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
