import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../ui/sidebar";
import { SidebarContent } from "../content";
import { NavItem, NavSection } from "../data";

type PropsType = {
  navMain: Array<NavSection>;
};

export const SideBarList = ({ navMain }: PropsType) => {
  return (
    <SidebarContent>
      {navMain.map((item: NavSection) => (
        <SidebarGroup key={item.title}>
          <SidebarGroupLabel className="font-semibold text-md text-cyan-700">
            {item.title}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.items.map((item: NavItem) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <Link href={item.url}>
                      {item.icon && <item.icon color="gray" size={20} />}
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
};
