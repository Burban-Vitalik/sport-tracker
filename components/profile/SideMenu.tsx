"use client";

import {
  CircleUser,
  LockKeyholeIcon,
  Settings,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  subItems?: MenuItem[];
}

export const SideMenu = ({ userId }: { userId: number }) => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      label: "My Profile",
      href: `/accounts/profile/${userId}`,
      icon: <CircleUser size={16} />,
    },
    {
      label: "Settings",
      icon: <Settings size={16} />,
      href: "#",
      subItems: [
        {
          label: "Edit Profile",
          icon: <UserRoundPen size={16} />,
          href: `/accounts/profile/${userId}/edit-profile`,
        },
        {
          label: "Change Password",
          icon: <LockKeyholeIcon size={16} />,
          href: `/accounts/profile/${userId}/change-password`,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 min-w-[200px] shadow-md p-4 rounded-lg md:w-fit h-fit">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Menubar
            key={item.label}
            className={
              pathname === item.href
                ? "bg-gray-100 border-gray-100 shadow-md text-gray-900"
                : "text-gray-700 hover:text-gray-900 border-none"
            }
          >
            <MenubarMenu>
              <MenubarTrigger
                className={
                  "flex items-center gap-2 rounded-md text-sm font-medium transition-colors w-full"
                }
              >
                {item.subItems ? (
                  <>
                    {item.icon}
                    {item.label}
                  </>
                ) : (
                  <Link href={item.href} className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </MenubarTrigger>
              {item.subItems && (
                <MenubarContent>
                  {item.subItems.map((subItem) => (
                    <MenubarItem key={subItem.href}>
                      <Link
                        href={subItem.href}
                        className={cn(
                          "flex items-center gap-2 px-2 py-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                        )}
                      >
                        {subItem.icon}
                        {subItem.label}
                      </Link>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              )}
            </MenubarMenu>
          </Menubar>
        ))}
      </nav>
    </div>
  );
};
