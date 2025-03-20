"use client";

import { usePathname } from "next/navigation";

import { useFetchChat } from "@/hooks/fetch/useFetchChat";
import { ChatSection } from "../components";
import { ChatProvider } from "@/hooks/context/useChatContext";

const ChatPage = () => {
  const pathname = usePathname();
  const chatId = pathname.split("/").pop();

  const { chat, loading } = useFetchChat(chatId as string);

  if (loading) return <div>Loading</div>;
  if (!chat) return <div>Chat not found</div>;

  return (
    <ChatProvider chat={chat} loading={loading}>
      <ChatSection />
    </ChatProvider>
  );
};

export default ChatPage;
