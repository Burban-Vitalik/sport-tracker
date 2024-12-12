import React from "react";
import { Input } from "../ui/input";
import { FC } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  onIconClick?: () => void;
};

export const CustomTextField: FC<Props> = ({
  showIcon = false,
  iconPosition = "right",
  onIconClick,
  ...rest
}: Props) => {
  const [isPassword, setIsPassword] = React.useState(rest.type === "password");

  return (
    <div className="relative w-full">
      {iconPosition === "left" && showIcon && (
        <button
          type="button"
          onClick={onIconClick}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        >
          <HiEye />
        </button>
      )}

      <Input {...rest} type={isPassword ? "password" : "text"} />

      {iconPosition === "right" && showIcon && (
        <button
          type="button"
          //   onClick={onIconClick}
          onClick={() => setIsPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <HiEyeOff />
        </button>
      )}
    </div>
  );
};
