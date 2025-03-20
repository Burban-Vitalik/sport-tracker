"use client";
import { FC } from "react";

import { useModal } from "@/hooks/useModal";

import {
  ChatSectionHeader,
  InfoPanel,
  MessageList,
  SendMessageForm,
} from "./index";

export const ChatSection: FC = () => {
  const { isOpen, toggleModal } = useModal();

  return (
    <div className="w-full h-[80vh] bg-gray-50 rounded-2xl shadow-lg flex overflow-hidden">
      <div className="bg-white rounded-l-2xl shadow-inner transition-all duration-500 flex flex-col w-full">
        <ChatSectionHeader toggleModal={toggleModal} />
        <MessageList />
        <SendMessageForm />
      </div>
      <InfoPanel isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
};
