import { ChevronLeft, MessageCircle, Settings, Video } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import FaceImg from "../../../../public/img/userLogo.png";
import { UseModal } from "@/types/modal";

type Props = {
  user?: string;
  toggleModal: UseModal["toggleModal"];
};

export const ChatInfo: FC<Props> = ({ toggleModal }) => {
  return (
    <div className="relative h-full rounded-r-2xl p-6 flex flex-col items-center space-y-6 shadow-lg">
      <div className="flex w-full justify-between">
        <span className="flex gap-2">
          <ChevronLeft
            className="cursor-pointer hover:scale-110 transition-all"
            onClick={toggleModal}
            color="gray"
            size={24}
          />
          <p className="font-semibold">Chanel Information</p>
        </span>
        <button>
          <Settings color="gray" size={24} />
        </button>
      </div>

      <div className="hidden">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
          <Image
            src={FaceImg}
            layout="fill"
            objectFit="cover"
            alt="User Avatar"
          />
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg text-gray-900">Vitalik Burban</p>
          <p className="text-sm text-gray-600">Fitness Coach</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition-all">
          <MessageCircle size={18} /> Chat
        </span>
        <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition-all">
          <Video size={18} /> Video Call
        </span>
      </div>

      {/* Profile Options */}
      <ul className="space-y-2 text-sm text-gray-600">
        <li
          className="cursor-pointer hover:text-blue-500 transition-all list-none"
          style={{ listStyleImage: "../../../../public/img/userLogo.png" }}
        >
          View friends
        </li>
        <li
          className="cursor-pointer hover:text-blue-500 transition-all list-none"
          style={{ listStyleImage: "../../../../public/img/userLogo.png" }}
        >
          View profile
        </li>
        <li
          className="cursor-pointer hover:text-blue-500 transition-all list-none"
          style={{ listStyleImage: "../../../../public/img/userLogo.png" }}
        >
          Add to friends
        </li>
      </ul>

      {/* Stats */}
      <div className="space-y-2 text-xs text-gray-600">
        <p>120 messages sent</p>
        <p>15 hours online</p>
        <p>15 hours chatting</p>
      </div>

      {/* Attachments */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Attachments</p>
        <div className="flex gap-4 justify-center">
          {[1, 2, 3, 4, 5].map((item) => (
            <span
              key={item}
              className="w-10 h-10 bg-green-500 flex items-center justify-center text-white font-semibold rounded-md hover:scale-105 transition-all"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
