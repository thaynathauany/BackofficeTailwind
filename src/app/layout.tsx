import "../styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import IntlProvider from "@/components/i18n/IntlProvider";
import AppLayout from "@/components/layout/AppLayout";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata = {
  title: "Backoffice",
  description: "Dinero Latam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={josefin.variable}>
      <body className="font-sans">
        <IntlProvider>
          <AppLayout>{children}</AppLayout>
        </IntlProvider>
      </body>
    </html>
  );
}
