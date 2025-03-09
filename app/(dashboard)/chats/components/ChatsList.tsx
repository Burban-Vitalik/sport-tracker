"use client";
import { FC } from "react";
import { ChatItemCard } from "./ChatItemCard";
import { useRouter } from "next/navigation";

type Props = {
  chats: string[];
};

export const ChatsList: FC<Props> = ({ chats }) => {
  const router = useRouter();
  if (!chats.length) return <></>;
  return (
    <div className="overflow-y-auto">
      {chats.map((chat) => (
        <ChatItemCard
          key={chat}
          onClick={() => router.push(`/chats/${chat}`)}
        />
      ))}
    </div>
  );
};
