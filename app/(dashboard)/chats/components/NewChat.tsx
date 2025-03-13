"use client";
import { FC, useState } from "react";

import { CreateChat } from "@/components/chat/CreateChat";
import { CustomModal } from "@/components/modals/CustomModal";
import { useSearchParams } from "next/navigation";

type Props = {
  chatsLength: number;
};

export const NewChat: FC<Props> = ({ chatsLength = 6 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

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
        <CreateChat />
      </CustomModal>
    </section>
  );
};
