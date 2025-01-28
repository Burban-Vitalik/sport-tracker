"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideMenu = ({ userId }: { userId: number }) => {
  const pathname = usePathname();

  const menuItems = [
    { label: "My Profile", href: `/accounts/profile/${userId}` },
    { label: "Security", href: "/profile/security" },
    { label: "Settings", href: "/accounts/settings" },
  ];

  return (
    <div className="flex flex-col gap-4 min-w-[200px] bg-white shadow-md p-4 border rounded-lg md:w-fit">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
              "no-underline hover:no-underline"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
