import { CustomSearchInput } from "@/components/form-elements/CustomSearchInput";
import { ToggleSidebarButton } from "./toggle-sidebar";

export const SidebarContentHeader = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4 bg-cyan-700">
      <ToggleSidebarButton />
      <div className="flex gap-2 w-1/3">
        <CustomSearchInput />
      </div>
    </header>
  );
};
