import { MessageCirclePlus } from "lucide-react";
import { FC } from "react";

type Props = {
  chatsLength: number;
};

export const NewChat: FC<Props> = ({ chatsLength = 0 }) => {
  return (
    <section className="flex justify-between p-4 items-center">
      <p className="text-md font-semibold text-gray-500">
        Chats: {chatsLength}
      </p>
      <button className="flex items-center gap-2 text-gray-600 font-medium">
        <MessageCirclePlus size={20} />
        <span>New Chat</span>
      </button>
    </section>
  );
};
