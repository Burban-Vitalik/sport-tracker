"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelRightCloseIcon } from "lucide-react";

export const ToggleSidebarButton = () => {
  const { open, setOpen } = useSidebar();

  return open ? (
    <PanelLeftCloseIcon
      onClick={() => setOpen(false)}
      orientation="vertical"
      className="mr-2 h-4 cursor-pointer"
    />
  ) : (
    <PanelRightCloseIcon
      onClick={() => setOpen(true)}
      orientation="vertical"
      className="mr-2 h-4 cursor-pointer"
    />
  );
};
