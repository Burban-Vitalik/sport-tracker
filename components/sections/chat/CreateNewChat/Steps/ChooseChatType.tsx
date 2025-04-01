import { ChatTypeCard } from "@/components/cards/ChatTypeCard";
import { MessageSquare, Users, Megaphone } from "lucide-react";

type Props = {
  onClick: (chatType: string) => void;
  type: string;
};

export function ChooseChatType({ onClick, type }: Props) {
  const chatOptions = [
    {
      label: "Direct",
      type: "CHAT",
      icon: <MessageSquare size={32} />,
      bg: "bg-blue-500",
    },
    {
      label: "Channel",
      type: "CHANEL",
      icon: <Megaphone size={32} />,
      bg: "bg-green-500",
    },
    {
      label: "Group",
      type: "GROUP",
      icon: <Users size={32} />,
      bg: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-6">
      {chatOptions.map(({ label, icon, bg, type: chatType }) => (
        <div key={label} onClick={() => onClick(chatType)}>
          <ChatTypeCard
            label={label}
            icon={icon}
            bg={bg}
            className={chatType === type ? "bg-green-100" : ""}
          />
        </div>
      ))}
    </div>
  );
}
