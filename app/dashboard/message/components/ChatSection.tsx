"use client";
import { useEffect, useState } from "react";
import { ChatSectionHeader } from "./ChatSectionHeader";
import { MessageList } from "./MessageList";
import { SendMessageForm } from "./SendMessageForm";
import { InfoPanel } from "./InfoPanel";
import io from "socket.io-client";

const socket = io("http://localhost:3000", {
  path: "/api/socket",
  autoConnect: false, // Не підключаємося одразу
});

export const ChatSection = () => {
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.connect();

    socket.on("receiveMessage", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const toggleInfo = () => {
    setIsOpenInfo((prev) => !prev);
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      setMessage(""); // Очищаємо інпут після відправки
    }
  };

  return (
    <div className="w-full h-[80vh] bg-gray-50 rounded-2xl shadow-lg flex overflow-hidden">
      <div className="bg-white rounded-l-2xl shadow-inner transition-all duration-500 flex flex-col w-full">
        <ChatSectionHeader toggleInfo={toggleInfo} />
        <MessageList messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
      </div>
      <InfoPanel isOpen={isOpenInfo} toggleInfo={toggleInfo} />
    </div>
  );
};
