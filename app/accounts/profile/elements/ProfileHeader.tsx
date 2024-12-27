"use client";

import Image from "next/image";
import UserLogo from "../../../../public/img/userLogo.png";
import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { Pencil, Trash2 } from "lucide-react";
import { User } from "@prisma/client";
import { useState } from "react";
import { ProfileHeaderUpdateForm } from "./updateForms/ProfileHeaderUpdate";
import { CustomModal } from "@/components/modals/CustomModal";
import { UploadFile } from "@/components/common/UploadFile";
import { uploadFileToStarage } from "@/lib/supabase/storage/uploadFile";
import { getFullUserName, showToast } from "@/app/helpers";
import { formFullUrl } from "@/lib/supabase/helperes/makeFullUrl";
import { useRouter } from "next/navigation";

type PropsType = {
  user: User;
};

export const ProfileHeader = ({ user }: PropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const router = useRouter();

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleUploadImage = async (file: File) => {
    if (!file) return;

    try {
      const response = await uploadFileToStarage({
        bucket: "images",
        folder: user.id.toString(),
        file,
      });

      if (!response) return;

      const fullUrl = formFullUrl({
        bucket: "images",
        filePath: response.path || "",
      });

      const res = await fetch(`/api/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          profileImage: fullUrl,
        }),
      });

      if (res.ok) {
        showToast({ message: "Profile updated successfully", type: "success" });
        router.refresh();
      } else {
        showToast({ message: "Profile update failed", type: "error" });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      showToast({ message: "An error occurred during upload", type: "error" });
    }
  };

  return (
    <>
      <section className="flex items-center w-full p-4 bg-white">
        <div className="flex-shrink-0">
          <UploadFile handleUploadImage={handleUploadImage}>
            <Image
              src={user.profileImage || UserLogo}
              alt="User Logo"
              height={70}
              width={70}
              className="object-cover w-full h-full rounded-full"
              draggable={false}
            />
          </UploadFile>
        </div>

        <div className="ml-5 flex flex-col">
          <p className="font-bold text-gray-700 text-lg">
            {getFullUserName({
              firstName: user.firstName,
              lastName: user.lastName,
            })}
          </p>
          <p className="mt-1 text-sm font-medium text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-500">{user.age} years old</p>
        </div>

        <div className="ml-auto flex flex-col gap-2">
          <CustomIconButton
            variant="destructive"
            className="flex items-center gap-1 bg-green-600 text-white hover:bg-green-700 hover:text-white"
            onClick={() =>
              openModal(
                <ProfileHeaderUpdateForm
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  age={user.age as number}
                  userId={user.id}
                  closeModal={closeModal}
                />
              )
            }
          >
            <Pencil size={14} /> Edit
          </CustomIconButton>
          <CustomIconButton
            className="flex items-center gap-1"
            onClick={() => router.push(`/accounts/settings`)}
            variant="destructive"
          >
            <Trash2 /> Delete
          </CustomIconButton>
        </div>
      </section>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Profile"
      >
        {modalContent}
      </CustomModal>
    </>
  );
};
