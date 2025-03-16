import Image from "next/image";
import FaceImg from "../../public/img/userLogo.png";
import { Check } from "lucide-react";
import { FC } from "react";

type Props = {
  message: string;
  isMine: boolean;
};

export const MessageItem: FC<Props> = ({ message, isMine }) => {
  return (
    <div className="flex items-end gap-4 text-wrap">
      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-300 shadow-md cursor-pointer">
        <Image
          src={FaceImg}
          layout="fill"
          objectFit="cover"
          alt="User Avatar"
        />
      </div>
      <div
        className="relative bg-white p-4 rounded-2xl shadow-md max-w-xs min-w-36 break-words overflow-hidden"
        style={{ background: isMine ? "#E2F7CB" : "" }}
      >
        <p className="text-sm text-gray-800 leading-relaxed break-words overflow-hidden">
          {message}
        </p>
        <div className="absolute bottom-1 right-2 flex items-center text-xs text-gray-500 gap-1">
          <span>10:20 PM</span>
          <Check size={14} className="text-blue-500" />
        </div>
      </div>
    </div>
  );
};
