"use client";

import {
  ChatSidebarActions,
  MembersList,
  NewChat,
} from "@/components/sections/chat";
import { useUser } from "@/context/userContext";
import { useFetchChats } from "@/hooks/fetch";
import { useChatParams } from "@/hooks/useChatParams";
import FaceImg from "@/public/img/userLogo.png";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export default function ChatPage() {
  const { user, isLoading } = useUser();

  const { chats } = useFetchChats({
    userId: user?.id as string,
  });

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

  if (isLoading && !user) return <p>1234...</p>;

  return (
    <div className="">
      <div className="flex gap-2 justify-around border-b p-4">
        <MembersList userImg={FaceImg} />
      </div>
      <ChatSidebarActions chatsType={type} toggleChatsType={toggleChatsType} />
      <NewChat chatsLength={filteredChats.length} />
    </div>
  );
}
