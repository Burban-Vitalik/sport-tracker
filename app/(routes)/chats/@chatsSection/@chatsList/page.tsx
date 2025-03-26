"use client";
import { ItemsList } from "@/components/common/ItemsList";
import { ChatItemCard } from "@/components/sections/chat";
import { useUser } from "@/context/userContext";
import { useFetchChats } from "@/hooks/fetch";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function ChatsListPage() {
  const { user } = useUser();
  const router = useRouter();

  const params = useSearchParams();
  const { chats } = useFetchChats({
    userId: user?.id as string,
  });

  const chatClick = useCallback(
    (chatId: string) => {
      const newParams = new URLSearchParams(params.toString());
      newParams.set("type", params.get("type") || "chat");
      router.push(`/chats/${chatId}?${newParams.toString()}`);
    },
    [params, router]
  );

  return (
    <ItemsList items={chats}>
      {(item) => (
        <ChatItemCard
          key={item.id}
          {...item}
          onClick={() => chatClick(item.id)}
        />
      )}
    </ItemsList>
  );
}
