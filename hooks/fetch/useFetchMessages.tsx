import { Message } from "@prisma/client";
import { useEffect, useState } from "react";

type DataType = {
  messages: Message[];
  loading: boolean;
};

export const useFetchMessages = (chatId: string): DataType => {
  const [data, setData] = useState<DataType>({
    messages: [],
    loading: false,
  });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const response = await fetch(`/api/messages?chatId=${chatId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch chat");
        }
        const data = await response.json();
        setData({ messages: data, loading: false });
      } catch (error) {
        console.error("Error fetching chat:", error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [chatId]);

  return data;
};
