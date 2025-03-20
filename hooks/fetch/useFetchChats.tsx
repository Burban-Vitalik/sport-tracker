"use client";
import { useEffect, useState } from "react";

import { ChatWithMessages } from "@/types/chat";
import { apiFetcher } from "@/lib/fetcher";

type Props = {
  userId: string;
};

type DataType = {
  chats: ChatWithMessages[];
  loading: boolean;
};

export const useFetchChats = ({ userId }: Props): DataType => {
  const [data, setData] = useState<DataType>({
    chats: [],
    loading: false,
  });

  useEffect(() => {
    const fetchChats = async () => {
      setData((prev) => ({ ...prev, loading: true }));
      try {
        const chatsData = await apiFetcher(`/api/chats?userId=${userId}`);

        setData({ chats: chatsData, loading: false });
      } catch (error) {
        console.error("Error fetching chats:", error);
        setData({ chats: [], loading: false });
      }
    };

    fetchChats();
  }, [userId]);

  return data;
};
