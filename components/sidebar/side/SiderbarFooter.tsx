"use client";

import { ChevronUp, User2 } from "lucide-react";
import Link from "next/link";

import { getFullUserName } from "@/app/helpers";
import LogoutButton from "@/components/auth/LogoutButton";
import { useUser } from "@/hooks/userContext";

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
                {getFullUserName({
                  firstName: user?.firstName as string,
                  lastName: user?.lastName as string,
                })}
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
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
