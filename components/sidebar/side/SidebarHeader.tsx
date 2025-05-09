import { SearchForm } from "./Search";
import { VersionSwitcher } from "./VersionSwitcher";
import { SidebarHeader } from "@/components/ui/sidebar";
import { UserRole } from "@prisma/client";

type PropsType = {
  versions: Array<string>;
  userRole: UserRole;
};

export const SidebarHeaderComponent = ({ versions, userRole }: PropsType) => {
  return (
    <SidebarHeader>
      <VersionSwitcher
        versions={versions as UserRole[]}
        defaultVersion={userRole}
      />
      <SearchForm />
    </SidebarHeader>
  );
};
