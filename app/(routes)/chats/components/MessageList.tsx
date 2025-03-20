"use client";
import { FC } from "react";

import { EmptyMessageWithSmile } from "@/components/common";
import { MessageItem } from "@/components/common/MessageItem";
import { useChatContext } from "@/hooks/context/useChatContext";

export const MessageList: FC = () => {
  const { chat } = useChatContext();
  const messages = chat?.messages;

  if (!messages || !messages.length)
    return (
      <div className="flex flex-col gap-6 p-4 flex-1 justify-center">
        <EmptyMessageWithSmile message={"There are not messages yet"} />
      </div>
    );

  return (
    <div className="flex flex-col gap-6 p-4 flex-1 overflow-y-scroll">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          isMine={Math.random() > 0.5}
          message={message.text}
        />
      ))}
    </div>
  );
};
