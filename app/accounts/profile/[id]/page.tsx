"use client";
import { BicepsFlexed, CircleHelp, User2 } from "lucide-react";
import { CustomModal } from "@/components/modals/CustomModal";
import { useModal } from "@/hooks/useModal";
import { useUser } from "@/hooks/userContext";
import { BodyInfo, User } from "@prisma/client";
import { BoxItem } from "../elements/BoxItem";
import { ProfileHeader } from "../elements/ProfileHeader";
import { BodyInfoForm } from "./forms/BodyInfoForm";
import { PageSkeleton } from "./ProfilePageSkeleton";

export default function ProfilePage() {
  const { user, isLoading } = useUser();
  const { isOpen, openModal, closeModal } = useModal();

  if (isLoading) return <PageSkeleton />;
  if (!user) return <PageSkeleton />;

  return (
    <div className="flex flex-col gap-4 w-full">
      <ProfileHeader user={user as User} />
      <div className="flex flex-row flex-wrap gap-4 w-full">
        <BoxItem
          icon={BicepsFlexed}
          title="Body Information"
          openModal={openModal}
        />
        <BoxItem icon={User2} title="Personal Information" />
        <BoxItem icon={CircleHelp} title="Other Information" />
      </div>

      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Edit Body Information"
      >
        <BodyInfoForm userData={user.bodyInfo as BodyInfo} />
      </CustomModal>
    </div>
  );
}
