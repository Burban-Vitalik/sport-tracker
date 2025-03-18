"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

import { AuthLayout } from "@/components/layout/AuthLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
  useAuthRedirect();

  if (pathname.startsWith("/auth")) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return <MainLayout>{children}</MainLayout>;
}
