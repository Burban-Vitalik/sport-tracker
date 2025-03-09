import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type Props = {
  image: StaticImageData | string;
  size?: number;
  alt?: string;
  key?: number;
  onClick?: () => void;
};

export const AvatarCover: FC<Props> = ({
  image,
  size = 12,
  alt = "Image",
  key,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      key={key}
      className={`relative w-${size} h-${size} rounded-full overflow-hidden border border-gray-300 shadow-md cursor-pointer`}
    >
      <Image src={image} layout="fill" objectFit="cover" alt={alt} />
    </div>
  );
};
