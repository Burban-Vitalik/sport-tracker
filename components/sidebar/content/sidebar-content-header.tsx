import LogoutButton from "@/components/auth/LogoutButton";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../ui/breadcrumb";
import { ToggleSidebarButton } from "./toggle-sidebar";

type PropsType = {
  data?: number;
};

export const SidebarContentHeader = ({}: PropsType) => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <ToggleSidebarButton />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbItem className="ml-10">
            <BreadcrumbPage>
              <LogoutButton />
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};
