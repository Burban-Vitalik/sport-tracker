"use client";

import Image from "next/image";
import UserLogo from "../../../../public/img/userLogo.png";
import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { Pencil } from "lucide-react";
import { User } from "@prisma/client";
import { getFullUserName } from "@/app/helpers/getFullUserName";
import { useState } from "react";
import { ProfileHeaderUpdateForm } from "./updateForms/ProfileHeaderUpdate";
import { CustomModal } from "@/components/modals/CustomModal";

type PropsType = {
  user: User;
};

export const ProfileHeader = ({ user }: PropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <section className="flex items-center w-full border p-4 rounded-md bg-white shadow-sm">
        <div className="flex-shrink-0">
          <Image
            src={UserLogo}
            alt="User Logo"
            height={70}
            width={70}
            className="rounded-full"
          />
        </div>

        <div className="ml-5 flex flex-col">
          <p className="font-bold text-gray-700 text-lg">
            {getFullUserName(user.firstName, user.lastName)}
          </p>
          <p className="mt-1 text-sm font-medium text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-500">{user.age} years old</p>
        </div>

        <div className="ml-auto">
          <CustomIconButton
            variant="outline"
            className="flex items-center gap-1"
            onClick={() =>
              openModal(
                <ProfileHeaderUpdateForm
                  firstName="Vitalik"
                  lastName="Burban"
                  email="vitalik@bk.com"
                  age="26"
                />
              )
            }
          >
            <Pencil size={14} /> Edit
          </CustomIconButton>
        </div>
      </section>
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </CustomModal>
    </>
  );
};
