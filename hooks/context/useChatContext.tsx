import { ChatContextType } from "@/types/chat";
import React, { createContext } from "react";

const ChatContext = createContext<ChatContextType | null>(null);

export const useChatContext = () => {
  const context = React.useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export default ChatContext;
