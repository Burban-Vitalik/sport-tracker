"use client";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { AvatarCover } from "@/components/common/Avatar";

type Props = {
  toggleModal: VoidFunction;
  userName?: string;
  status?: string;
  imageSrc?: string;
};

export const ChatSectionHeader: FC<Props> = ({
  toggleModal,
  userName = "Vitalik Burban",
  status = "Online",
  imageSrc = "/img/userLogo2.png",
}) => {
  const router = useRouter();

  return (
    <header className="flex items-center gap-4 p-4 rounded-lg shadow-sm">
      <AvatarCover
        image={imageSrc}
        size={12}
        onClick={() => router.push("/users/1")}
      />
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-gray-900">{userName}</p>
        <p
          className={`text-sm truncate ${
            status === "Online" ? "text-green-500" : "text-gray-500"
          }`}
        >
          {status}
        </p>
      </div>
      <div className="flex gap-2">
        <EllipsisVertical
          color="gray"
          className="cursor-pointer hover:text-black transition-colors"
          onClick={toggleModal}
          aria-label="Open user info"
        />
      </div>
    </header>
  );
};
