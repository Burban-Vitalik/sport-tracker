import { ToastContainer } from "react-toastify";

import { AppSidebar } from "@/components/sidebar/AppSidebar";
import {
  SidebarContent,
  SidebarContentHeader,
} from "@/components/sidebar/content";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserProvider } from "@/context/userContext";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <UserProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <SidebarContentHeader />
              <SidebarContent>
                <div className="flex flex-1 flex-col gap-4 bg-gray-50 h-[calc(100vh-64px)]">
                  <div className="grid w-full">{children}</div>
                  {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
                </div>
              </SidebarContent>
            </SidebarInset>
          </SidebarProvider>
        </UserProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
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
};
