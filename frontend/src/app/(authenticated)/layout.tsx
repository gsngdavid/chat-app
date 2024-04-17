"use client";

import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const auth = localStorage.token

  if (!auth) {
    redirect("/auth/login");
  }
  return children;
}
