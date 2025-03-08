import Image from "next/image";
import { Info } from "lucide-react";
import { FC } from "react";

type Props = {
  toggleInfo: VoidFunction;
  userName?: string;
  status?: string;
  imageSrc?: string;
};

export const ChatSectionHeader: FC<Props> = ({
  toggleInfo,
  userName = "Vitalik Burban",
  status = "Online",
  imageSrc = "/img/userLogo2.png",
}) => {
  return (
    <header className="flex items-center gap-4 p-4 rounded-lg shadow-sm">
      <div className="relative size-12 rounded-full overflow-hidden border hover:scale-110 transition-transform">
        <Image
          src={imageSrc}
          fill
          sizes="48px"
          className="object-cover"
          alt={`${userName}'s avatar`}
          priority
        />
      </div>
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
      <Info
        color="gray"
        className="cursor-pointer hover:text-black transition-colors"
        onClick={toggleInfo}
        aria-label="Open user info"
      />
    </header>
  );
};
