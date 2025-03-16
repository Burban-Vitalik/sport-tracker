import { FC } from "react";

import { EmptyMessageWithSmile } from "@/components/common";
import { MessageItem } from "@/components/common/MessageItem";
import { Message } from "@prisma/client";

type Props = {
  messages?: Array<Message>;
};

export const MessageList: FC<Props> = ({ messages }) => {
  if (!messages)
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
          // isMine={message.senderId === "cm87nfi380002uweka202e3mf"}
          isMine={Math.random() > 0.5}
          message={message.text}
        />
      ))}
    </div>
  );
};
