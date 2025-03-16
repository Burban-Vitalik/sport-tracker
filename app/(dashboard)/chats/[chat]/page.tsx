"use client";

import { useEffect, useState } from "react";
import { ChatSection } from "../components/ChatSection";
import { Message } from "@prisma/client";
import { usePathname } from "next/navigation";

type DataType = {
  messages: Message[] | [];
  loading: boolean;
};

const ChatPage = () => {
  const [data, setData] = useState<DataType>({
    messages: [],
    loading: false,
  });

  const pathname = usePathname();
  const chatId = pathname.split("/").pop();

  useEffect(() => {
    if (!chatId) return;

    async function getMessages() {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const response = await fetch(`/api/messages?chatId=${chatId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData({ messages: data, loading: false });
      } catch (error) {
        console.error("Error fetching messages:", error);
        setData((prev) => ({ ...prev, loading: false }));
      }
    }
    getMessages();
  }, [chatId]);

  return <ChatSection messages={data.messages} />;
};

export default ChatPage;
