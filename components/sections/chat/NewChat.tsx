"use client";
import { FC } from "react";

import { CustomModal } from "@/components/modals/CustomModal";
import { useSearchParams } from "next/navigation";
import { useModal } from "@/hooks/useModal";
import { Stepper } from "@/components/Stepper";

type Props = {
  chatsLength: number;
};

export const NewChat: FC<Props> = ({ chatsLength = 6 }) => {
  const { isOpen, toggleModal } = useModal();

  const params = useSearchParams();
  const chatsType = params.get("type") || "chat";

  const formattedType = chatsType.charAt(0).toUpperCase() + chatsType.slice(1);

  return (
    <section className="flex justify-between p-4 items-center">
      <p className="text-md font-semibold text-gray-500">
        Chats: {chatsLength}
      </p>
      <button className="flex items-center gap-2 text-gray-600 font-medium">
        <span onClick={toggleModal}>
          New {formattedType == "All" ? "Chat" : formattedType}
        </span>
      </button>

      <CustomModal isOpen={isOpen} onClose={toggleModal} title="New Chat">
        <Stepper />
      </CustomModal>
    </section>
  );
};
