"use client";

import { usePathname } from "next/navigation";

import { ChatSection } from "../components/ChatSection";
import { useFetchMessages } from "@/hooks/fetch/useFetchMessages";

const ChatPage = () => {
  const pathname = usePathname();
  const chatId = pathname.split("/").pop();

  const { messages, loading } = useFetchMessages(chatId as string);

  if (loading) return <div>Loading</div>;

  return <ChatSection messages={messages} />;
};

export default ChatPage;
