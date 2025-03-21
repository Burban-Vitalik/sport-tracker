"use client";

import { Chat } from "@prisma/client";
import { useEffect, useState } from "react";

type DataType = {
  chat: Chat | null;
  loading: boolean;
};

export const useFetchChat = (chatId: string) => {
  const [data, setData] = useState<DataType>({
    chat: null,
    loading: false,
  });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const response = await fetch(`/api/chats/${chatId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch chat");
        }
        const data = await response.json();
        setData({ chat: data, loading: false });
      } catch (error) {
        console.error("Error fetching chat:", error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [chatId]);

  return data;
};
