import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type PropsType = {
  icon: StaticImageData;
  name: string;
  className?: string;
  onClick?: () => void;
};

export const DrinkTypeIcon: FC<PropsType> = ({
  icon,
  name,
  className,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "p-2 bg-white shadow-md border border-gray-100 rounded-lg cursor-pointer hover:bg-blue-100 hover:scale-105 transition-transform duration-300",
        className
      )}
      onClick={onClick}
    >
      {icon.src && <Image src={icon.src} alt={name} width={50} height={50} />}
    </div>
  );
};
