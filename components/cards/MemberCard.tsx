import { StaticImageData } from "next/image";
import { AvatarCover } from "../common/Avatar";
import Logo from "@/public/img/userLogo.png";
import { FC } from "react";

type Props = {
  name: string;
};

export const MemberCard: FC<Props> = ({ name }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-md">
      <AvatarCover image={Logo as StaticImageData} size={8} />
      <p className="text-gray-500 text-md font-semibold text-ellipsis overflow-hidden">
        {name}
      </p>
    </div>
  );
};
