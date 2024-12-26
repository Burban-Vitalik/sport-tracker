"use client"; // Тому що ми використовуємо хук

import { SideMenu } from "@/components/profile/SideMenu";
import { ProfileHeader } from "../elements/ProfileHeader";
import { PersonalInformation } from "../elements/PersonalInformation";
import AddressSection from "../elements/AddressSection";
import { useUser } from "@/hooks/userContext";
import { User } from "@prisma/client";

export default function ProfilePage() {
  const { user, isLoading } = useUser(); // Отримуємо користувача з контексту

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading && !user) {
    return <p>User not found</p>;
  }

  debugger;
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col gap-4 w-full px-4">
        <ProfileHeader user={user as User} />
        <div className="grid grid-cols-2 gap-4">
          <PersonalInformation />
          <AddressSection />
        </div>
      </div>
    </div>
  );
}
