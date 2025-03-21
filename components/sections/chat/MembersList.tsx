import { AvatarCover } from "@/components/common/Avatar";
import { StaticImageData } from "next/image";
import { FC } from "react";

type Props = {
  members?: string[];
  userImg: StaticImageData;
};

export const MembersList: FC<Props> = ({ userImg }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <AvatarCover image={userImg} key={index} />
      ))}
    </>
  );
};
