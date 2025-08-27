"use client";

import { useLanguageStore } from "@/store/languageStore";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import { useEffect, useState } from "react";
import { loadMessages } from "@/lib/i18n";

export default function IntlProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLanguageStore();
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);

  useEffect(() => {
    let active = true;
    loadMessages(locale).then((m) => {
      if (active) setMessages(m as AbstractIntlMessages);
    });
    return () => {
      active = false;
    };
  }, [locale]);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}