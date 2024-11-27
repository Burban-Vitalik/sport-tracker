import * as React from "react";

import { Sidebar } from "@/components/ui/sidebar";
import { data } from "./data";
import { SidebarHeaderComponent } from "./side/sidebar-header";
import { SideBarList } from "./side/sidebar-list";
import { SidebarFooterComponent } from "./side/sidebar-footer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeaderComponent versions={data.versions} />
      <SideBarList navMain={data.navMain} />
      <SidebarFooterComponent />
    </Sidebar>
  );
}
