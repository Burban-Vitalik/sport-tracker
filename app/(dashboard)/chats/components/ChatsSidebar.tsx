"use client";

import { useRouter } from "next/navigation";
import { FC, useCallback, useMemo } from "react";

import { useChatParams } from "@/hooks/useChatParams";
import { ChatWithMessages } from "@/types/chat";

import FaceImg from "../../../../public/img/userLogo.png";
import { ChatsList } from "./ChatsList";
import { ChatSidebarActions } from "./ChatsSidebarActions";
import { MembersList } from "./MembersList";
import { NewChat } from "./NewChat";

type PropsType = {
  chats: ChatWithMessages[];
};

export const ChatsSidebar: FC<PropsType> = ({ chats }) => {
  const router = useRouter();
  const { chatId, type, params } = useChatParams();

  const toggleChatsType = useCallback(
    (newType: string) => {
      if (!chatId) return;
      const newParams = new URLSearchParams(params.toString());
      newParams.set("type", newType);
      router.push(`/chats/${chatId}?${newParams.toString()}`);
    },
    [chatId, params, router]
  );

  const filteredChats = useMemo(() => {
    return type === "all" ? chats : chats.filter((chat) => chat.type === type);
  }, [type, chats]);

  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex justify-around border-b p-4">
        <MembersList userImg={FaceImg} />
      </div>

      <ChatSidebarActions chatsType={type} toggleChatsType={toggleChatsType} />
      <NewChat chatsLength={filteredChats.length} />
      <ChatsList chats={chats} />
    </div>
  );
};
