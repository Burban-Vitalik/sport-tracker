"use client";

import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { getFullUserName, showToast } from "@/app/helpers";
import { UploadFile } from "@/components/common/UploadFile";
import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { CustomModal } from "@/components/modals/CustomModal";
import { useUpdateUser } from "@/hooks/put/useUpdateUser";
import { useModal } from "@/hooks/useModal";
import { formFullUrl } from "@/lib/supabase/helperes/makeFullUrl";
import { uploadFileToStarage } from "@/lib/supabase/storage/uploadFile";
import UserLogo from "@/public/img/userLogo.png";
import { User } from "@prisma/client";

import { ProfileHeaderUpdateForm } from "./updateForms/ProfileHeaderUpdate";

type PropsType = {
  user: User;
};

export const ProfileHeader = ({ user }: PropsType) => {
  const router = useRouter();

  const { isOpen: isModalOpen, openModal, closeModal } = useModal();
  const { updateUser } = useUpdateUser();

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

      updateUser({ userId: user.id, data: { profileImage: fullUrl } });
    } catch (error) {
      console.error("Error uploading image:", error);
      showToast({ message: "An error occurred during upload", type: "error" });
    }
  };

  return (
    <>
      <section className="flex items-center w-full p-6 bg-white border rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
        <div className="flex-shrink-0">
          <UploadFile handleUploadImage={handleUploadImage}>
            <Image
              src={user.profileImage || UserLogo}
              alt="User Logo"
              height={90}
              width={90}
              className="object-cover w-full h-full rounded-full border-2 border-gray-200"
              draggable={false}
            />
          </UploadFile>
        </div>

        <div className="ml-6 flex flex-col">
          <p className="text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
            {getFullUserName({
              firstName: user.firstName,
              lastName: user.lastName,
            })}
          </p>
          <p className="mt-2 text-sm font-medium text-gray-500">{user.email}</p>
          <p className="mt-2 w-fit inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white lowercase tracking-wide shadow-md transform transition-all hover:bg-green-600">
            {user.role}
          </p>
        </div>

        <div className="ml-auto flex flex-col gap-2">
          <CustomIconButton
            variant="destructive"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm py-2 px-3 bg-white border hover:bg-gray-100"
            onClick={openModal}
          >
            <Pencil size={14} />
          </CustomIconButton>
          <CustomIconButton
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm py-2 px-3 bg-white border hover:bg-gray-100"
            onClick={() => router.push(`/accounts/settings`)}
            variant="destructive"
          >
            <Trash2 size={14} />
          </CustomIconButton>
        </div>
      </section>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Profile"
      >
        <ProfileHeaderUpdateForm
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          age={user.age as number}
          userId={user.id}
          closeModal={closeModal}
        />
      </CustomModal>
    </>
  );
};
