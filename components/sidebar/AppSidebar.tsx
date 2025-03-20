import * as React from "react";

import { Sidebar } from "@/components/ui/sidebar";
import { useUser } from "@/context/userContext";
import { UserRole } from "@prisma/client";

import { SidebarSkeleton } from "../common/SidebarSkeleton";
import { data } from "./data";
import {
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SideBarList,
} from "./side";

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
