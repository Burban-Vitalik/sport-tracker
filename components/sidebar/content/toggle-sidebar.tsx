"use client";

import { PanelLeftCloseIcon, PanelRightCloseIcon } from "lucide-react";

import { useSidebar } from "@/components/ui/sidebar";

export const ToggleSidebarButton = () => {
  const { open, setOpen } = useSidebar();

  return open ? (
    <PanelLeftCloseIcon
      onClick={() => setOpen(false)}
      orientation="vertical"
      className="mr-2 h-4 cursor-pointer text-black"
    />
  ) : (
    <PanelRightCloseIcon
      onClick={() => setOpen(true)}
      orientation="vertical"
      className="mr-2 h-4 cursor-pointer text-black"
    />
  );
};
