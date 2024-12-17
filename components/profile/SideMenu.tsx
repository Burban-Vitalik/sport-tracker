"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "My Profile", href: "/accounts/profile" },
  { label: "Security", href: "/profile/security" },
  { label: "Settings", href: "/profile/settings" },
];

export const SideMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 h-full bg-white">
      <nav className="flex flex-col gap-4">
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
