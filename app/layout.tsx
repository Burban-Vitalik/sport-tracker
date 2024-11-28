import { cn } from "@/lib/utils";
import "./globals.css";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarContent,
  SidebarContentHeader,
} from "@/components/sidebar/content";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <SidebarContentHeader />

            <SidebarContent>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid w-full">{children}</div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            </SidebarContent>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
