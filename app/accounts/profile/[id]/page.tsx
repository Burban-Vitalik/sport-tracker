"use client";
import { SideMenu } from "@/components/profile/SideMenu";
import { useUser } from "@/hooks/userContext";
import { ProfileHeader } from "../elements/ProfileHeader";
import { User } from "@prisma/client";
import { BoxItem } from "../elements/BoxItem";

export default function ProfilePage() {
  const { user, isLoading } = useUser();

  if (isLoading && !user) {
    return <p>Loading...</p>;
  }

  if (!isLoading && !user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row">
        <SideMenu userId={user?.id as number} />
        <div className="flex flex-col gap-4 w-full">
          <ProfileHeader user={user as User} />
          <div className="flex flex-row flex-wrap gap-4 w-full">
            <BoxItem />
            <BoxItem />
            <BoxItem />
          </div>
        </div>
      </div>
    </div>
  );
}
