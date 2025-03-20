import { FC } from "react";
import { AvatarCover } from "@/components/common/Avatar";
import FaceImg from "../../../../../public/img/userLogo2.png";

export const PersonalInfo: FC = () => {
  return (
    <div className="flex flex-col items-center px-4 rounded-lg space-y-4 w-full">
      <AvatarCover image={FaceImg} size={24} />
      <div className="text-center">
        <p className="font-semibold text-2xl text-gray-900">Vitalik Burban</p>
        <p className="text-md text-gray-600">Fitness Coach</p>
      </div>
    </div>
  );
};
