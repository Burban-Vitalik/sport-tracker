"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback } from "react";

import { ChatItemCard } from "./ChatItemCard";

type Chat = {
  id: string;
  type: string;
  name: string;
  members: number;
};

type Props = {
  chats: Array<Chat>;
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
          message={chat.name}
          key={chat.id}
          onClick={chatClick.bind(null, chat.id)}
        />
      ))}
    </div>
  );
};
