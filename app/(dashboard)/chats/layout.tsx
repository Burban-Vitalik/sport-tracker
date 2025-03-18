"use client";
import { useFetchChats } from "@/hooks/fetch/useFetchChats";

import { ChatsSidebar } from "./components/ChatsSidebar";

type Props = {
  children: React.ReactNode;
};

export default function ChatsLayout({ children }: Props) {
  const { chats } = useFetchChats({
    userId: "cm87nf0eg0000uwekoud293e9",
  });

  return (
    <section className="flex gap-6 h-[80vh]">
      <ChatsSidebar chats={chats} />
      {children}
    </section>
  );
}
