"use client";

import Header from "./header/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        {" "}
        <Header />
        <main className="">{children}</main>
      </div>
    </>
  );
}
