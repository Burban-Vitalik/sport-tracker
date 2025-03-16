"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback } from "react";

import { ChatItemCard } from "./ChatItemCard";
import { ChatWithMessages } from "@/types/chat";

type Props = {
  chats: ChatWithMessages[];
};

export const ChatsList: FC<Props> = ({ chats }) => {
  const router = useRouter();
  const params = useSearchParams();

  const chatClick = useCallback(
    (chatId: string) => {
      const newParams = new URLSearchParams(params.toString());
      newParams.set("type", params.get("type") || "chat");
      router.push(`/chats/${chatId}?${newParams.toString()}`);
    },
    [params, router]
  );

  if (!chats.length) return null;

  return (
    <div className="overflow-y-auto">
      {chats.map((chat) => (
        <ChatItemCard
          count={chat.messages.length}
          senderName="John Doe"
          message={chat.messages[0]?.text}
          key={chat.id}
          onClick={chatClick.bind(null, chat.id)}
        />
      ))}
    </div>
  );
};
