import { EmptyMessageWithSmile } from "@/components/common";
import { MessageItem } from "@/components/common/MessageItem";
import { FC } from "react";

type Props = {
  messages: Array<string>;
};

export const MessageList: FC<Props> = ({ messages }) => {
  if (!messages.length)
    return (
      <div className="flex flex-col gap-6 p-4 flex-1 justify-center">
        <EmptyMessageWithSmile message={"There are not messages yet"} />
      </div>
    );

  return (
    <div className="flex flex-col gap-6 p-4 flex-1">
      {messages.map((message) => (
        <MessageItem key={message} isMine={false} message={message} />
      ))}
    </div>
  );
};
