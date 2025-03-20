import Image from "next/image";
import { FC } from "react";

import { ComponentCover } from "@/components/common/ComponentCover";

import FaceImg from "../../../../public/img/userLogo.png";

type Props = {
  senderName?: string;
  message?: string;
  time?: string;
  count?: number;
  onClick?: () => void;
};

const Avatar: FC = () => (
  <div className="relative w-12 h-12 rounded-full overflow-hidden">
    <Image src={FaceImg} layout="fill" objectFit="cover" alt="User Avatar" />
  </div>
);

const ChatInfo: FC<{ senderName: string; message: string }> = ({
  senderName,
  message,
}) => (
  <div>
    <p className="text-base font-semibold text-gray-900">{senderName}</p>
    <p className="text-sm text-gray-500 truncate w-48">{message}</p>
  </div>
);

const ChatMeta: FC<{ time: string; count: number }> = ({ time, count }) => (
  <div className="flex flex-col gap-2 items-center min-w-[40px]">
    <p className="text-sm text-gray-400">{time}</p>
    {count > 0 && (
      <div className="bg-cyan-700 text-white text-xs font-semibold flex items-center justify-center w-5 h-5 rounded-full">
        {count}
      </div>
    )}
  </div>
);

export const ChatItemCard: FC<Props> = ({
  senderName = "Vitalik Burban",
  message = "Hello! How are you?",
  time = "8 min",
  count = 2,
  onClick,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Message",
    author: {
      "@type": "Person",
      name: senderName,
    },
    dateCreated: new Date().toISOString(),
    text: message,
  };

  return (
    <ComponentCover jsonLd={jsonLd}>
      <div
        className={`flex items-center justify-between p-3 hover:bg-gray-200 transition ${
          onClick ? "cursor-pointer" : ""
        }`}
        onClick={onClick}
        aria-label={onClick ? `Chat with ${senderName}` : undefined}
      >
        <div className="flex items-center gap-4">
          <Avatar />
          <ChatInfo senderName={senderName} message={message} />
        </div>
        <ChatMeta time={time} count={count} />
      </div>
    </ComponentCover>
  );
};
