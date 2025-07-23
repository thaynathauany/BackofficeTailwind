"use client";

import Header from "./header/Header";
import { usePathname } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div>
        {pathname !== "/login" && <Header />}
        <main>{children}</main>
      </div>
    </>
  );
}
