"use client";

import { ChevronUp, LogOutIcon, User2 } from "lucide-react";
import Link from "next/link";

import { useUser } from "@/context/userContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { CustomIconButton } from "@/components/form-elements";
import { logout } from "@/lib/auth/logout";

export function SidebarFooterComponent() {
  const { user } = useUser();

  return (
    <SidebarFooter className="absolute bottom-0 right-0 w-full">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 />
                {user?.email}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <Link href={`/accounts/profile/${user?.id}`}>Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CustomIconButton
                  variant="destructive"
                  onClick={logout}
                  style={{ width: "100%" }}
                >
                  Log out <LogOutIcon />
                </CustomIconButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
