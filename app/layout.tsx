"use client";

import "./globals.css";

import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarContent,
  SidebarContentHeader,
} from "@/components/sidebar/content";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserProvider } from "@/hooks/userContext";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/socket");
  }, []);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token && !pathname.startsWith("/auth")) {
      router.push("/auth");
    }
  }, [router, pathname]);

  if (pathname.startsWith("/auth")) {
    return (
      <html lang="en">
        <body
          className={cn("min-h-screen bg-background font-sans antialiased")}
        >
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <UserProvider>
          {" "}
          {/* Обгортаємо контекстом тут */}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <SidebarContentHeader />
              <SidebarContent>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-gray-50">
                  <div className="grid w-full">{children}</div>
                  <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                </div>
              </SidebarContent>
            </SidebarInset>
          </SidebarProvider>
        </UserProvider>
        {/* Закриваємо обгортку тут */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="max-w-full sm:max-w-xs md:max-w-md lg:max-w-lg px-4 py-2"
        />
      </body>
    </html>
  );
}
