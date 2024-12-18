import { SideMenu } from "@/components/profile/SideMenu";
import { ProfileHeader } from "./elements/ProfileHeader";
import { PersonalInformation } from "./elements/PersonalInformation";
import AddressSection from "./elements/AddressSection";
import { prisma } from "@/lib/prisma";

async function getUser(id: number) {
  return await prisma.user.findUnique({ where: { id } });
}

export default async function ProfilePage() {
  const user = await getUser(3);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col gap-4 w-full px-4">
        <ProfileHeader user={user} />
        <div className="grid grid-cols-2 gap-4">
          <PersonalInformation />
          <AddressSection />
        </div>
      </div>
    </div>
  );
}
