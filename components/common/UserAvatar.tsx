import Image from "next/image";
import { FC } from "react";

type PropsType = {
  imageUrl: string;
  width?: number;
  height?: number;
};

export const UserAvatar: FC<PropsType> = ({
  width = 50,
  height = 50,
  imageUrl,
}) => {
  return (
    <Image
      src={imageUrl}
      alt="Image"
      width={width}
      height={height}
      style={{ maxWidth: width, maxHeight: height }}
      className="rounded-full object-cover h-full w-full"
    />
  );
};
