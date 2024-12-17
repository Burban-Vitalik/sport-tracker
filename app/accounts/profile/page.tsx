import { SideMenu } from "@/components/profile/SideMenu";
import { ProfileHeader } from "./elements/ProfileHeader";
import { PersonalInformation } from "./elements/PersonalInformation";
import AddressSection from "./elements/AddressSection";

export default function ProfilePage() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col gap-4 w-full px-4">
        <h1 className="text-2xl font-semibold">My Profle</h1>
        <ProfileHeader />
        <PersonalInformation />
        <AddressSection />
      </div>
    </div>
  );
}
