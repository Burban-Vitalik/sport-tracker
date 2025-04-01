"use client";
import { ChatProvider } from "@/components/providers/ChatProvider";
import { ChatSection } from "@/components/sections/chat";
import { useFetchChat } from "@/hooks/fetch";
import { useParams } from "next/navigation";

export default function ChatSectionPage() {
  const params = useParams();
  const { id } = params;
  const { chat, loading } = useFetchChat(id as string);

  return (
    <ChatProvider chat={chat} loading={loading}>
      <ChatSection />
    </ChatProvider>
  );
}
