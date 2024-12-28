"use client"; // Тому що ми використовуємо хук

import { SideMenu } from "@/components/profile/SideMenu";
import { ProfileHeader } from "../elements/ProfileHeader";
import { useUser } from "@/hooks/userContext";
import { User } from "@prisma/client";
import { SectionInformation } from "../elements/SectionInformation";

export default function ProfilePage() {
  const { user, isLoading } = useUser(); // Отримуємо користувача з контексту

  if (isLoading && !user) {
    return <p>Loading...</p>;
  }

  if (!isLoading && !user) {
    return <p>User not found</p>;
  }

  return (
    <div className="flex">
      <SideMenu userId={user?.id as number} />
      <div className="flex flex-col gap-4 w-full px-4">
        <ProfileHeader user={user as User} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <SectionInformation
            title="Contact Information"
            data={{
              firstName: user?.firstName as string,
              lastName: user?.lastName as string,
              email: user?.email as string,
            }}
          />
          <SectionInformation
            title="Body Information"
            data={{
              weight: 82,
              height: 182,
              age: 22,
            }}
          />
        </div>
      </div>
    </div>
  );
}
