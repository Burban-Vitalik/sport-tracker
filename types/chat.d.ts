import { Chat, Message } from "@prisma/client";

export type ChatWithMessages = Chat & {
  messages: Message[];
};

export type SendMessage = ({
  text: string,
  chatId: string,
  senderId: string,
}) => Promise<void>;

export type ChatContextType = {
  chat: Chat | null;
  loading: boolean;
};

export type ChatProviderProps = {
  children: React.ReactNode;
} & ChatContextType;
