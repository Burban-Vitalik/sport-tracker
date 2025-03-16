"use client";
import { FC } from "react";

import { useModal } from "@/hooks/useModal";
import { sendMessage } from "@/lib/sendMessage";
import { Message } from "@prisma/client";

import {
  ChatSectionHeader,
  InfoPanel,
  MessageList,
  SendMessageForm,
} from "./index";

type PropsType = {
  messages: Message[];
};

export const ChatSection: FC<PropsType> = ({ messages }) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <div className="w-full h-[80vh] bg-gray-50 rounded-2xl shadow-lg flex overflow-hidden">
      <div className="bg-white rounded-l-2xl shadow-inner transition-all duration-500 flex flex-col w-full">
        <ChatSectionHeader toggleModal={toggleModal} />
        <MessageList messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
      </div>
      <InfoPanel isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
};
