import Image from "next/image";
import FaceImg from "../../../../public/img/userLogo.png";
import { FC } from "react";

type Props = {
  name?: string;
  message?: string;
  time?: string;
  count?: number;
  onClick?: () => void;
};

export const ChatItemCard: FC<Props> = ({
  name = "Vitalik Burban",
  message = "Hello! How are you?",
  time = "8 min",
  count = 10,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-between p-3 hover:bg-gray-200 transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="relative size-12 rounded-full overflow-hidden">
          <Image
            src={FaceImg}
            layout="fill"
            objectFit="cover"
            alt="User Avatar"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500 truncate w-48">{message}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center min-w-[40px]">
        <p className="text-sm text-gray-400">{time}</p>
        <div className="bg-cyan-700 text-white text-sm font-semibold flex items-center justify-center w-6 h-6 rounded-full">
          {count}
        </div>
      </div>
    </div>
  );
};
