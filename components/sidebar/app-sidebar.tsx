import * as React from "react";

import { Sidebar } from "@/components/ui/sidebar";

import { data } from "./data";
import { SidebarFooterComponent } from "./side/sidebar-footer";
import { SidebarHeaderComponent } from "./side/sidebar-header";
import { SideBarList } from "./side/sidebar-list";
import { useUser } from "@/hooks/userContext";
import { UserRole } from "@prisma/client";
import { SidebarSkeleton } from "../skeletons/SidebarSkeleton";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  if (!user) {
    return <SidebarSkeleton />;
  }

  return (
    <Sidebar {...props}>
      <SidebarHeaderComponent
        versions={data.versions}
        userRole={user.role as UserRole}
      />
      <SideBarList navMain={data.navMain} />
      <SidebarFooterComponent />
    </Sidebar>
  );
}
