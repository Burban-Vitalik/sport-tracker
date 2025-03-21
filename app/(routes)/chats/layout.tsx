"use client";
import { useFetchChats } from "@/hooks/fetch/useFetchChats";

import { useUser } from "@/context/userContext";
import { ChatsSidebar } from "@/components/sections/chat";

type Props = {
  children: React.ReactNode;
};

export default function ChatsLayout({ children }: Props) {
  const { user, isLoading } = useUser();

  const { chats } = useFetchChats({
    userId: user?.id as string,
  });

  if (!user || isLoading) return <p>Loading...</p>;

  return (
    <section className="flex gap-6 h-[80vh]">
      <ChatsSidebar chats={chats} />
      {children}
    </section>
  );
}
