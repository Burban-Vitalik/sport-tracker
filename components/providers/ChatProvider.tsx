import ChatContext from "@/hooks/context/useChatContext";
import { ChatProviderProps } from "@/types/chat";

export const ChatProvider = ({
  chat,
  loading,
  children,
}: ChatProviderProps) => {
  return (
    <ChatContext.Provider value={{ chat, loading }}>
      {children}
    </ChatContext.Provider>
  );
};
