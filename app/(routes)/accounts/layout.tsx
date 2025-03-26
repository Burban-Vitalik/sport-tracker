"use client";
import { SideMenu } from "@/components/common/SideMenu";
import { useParams } from "next/navigation";

// app/accounts/layout.js
export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const user = params.id;

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <SideMenu userId={user?.id} />
      <div className="flex flex-col gap-4 w-full">{children}</div>
    </div>
  );
}
