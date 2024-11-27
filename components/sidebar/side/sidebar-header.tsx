import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import { SidebarHeader } from "@/components/ui/sidebar";

type PropsType = {
  versions: Array<string>;
};

export const SidebarHeaderComponent = ({ versions }: PropsType) => {
  return (
    <SidebarHeader>
      <VersionSwitcher versions={versions} defaultVersion={versions[0]} />
      <SearchForm />
    </SidebarHeader>
  );
};
