import { Chat, Message } from "@prisma/client";

export type ChatWithMessages = Chat & {
  messages: Message[];
};

export type SendMessage = ({
  text: string,
  chatId: string,
  senderId: string,
}) => Promise<void>;
