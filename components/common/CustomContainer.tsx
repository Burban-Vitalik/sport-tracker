import { cn } from "@/lib/utils";
import { FC } from "react";

type PropsType = {
  children: React.ReactNode;
  width?: string;
};

export const CustomContainer: FC<PropsType> = ({
  children,
  width = "w-[80%]",
}) => {
  return (
    <div className={cn(width, "flex flex-col gap-4 mx-auto")}>{children}</div>
  );
};
