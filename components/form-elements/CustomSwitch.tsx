import React, { FC } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

type PropsType = {
  name: string;
  label: string;
  isChecked: boolean;
  onChange: (value?: boolean) => void;
};

export const CustomSwitch: FC<PropsType> = ({
  isChecked,
  onChange,
  label,
  name,
}) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <Switch
        name={name}
        id={name}
        checked={isChecked}
        onCheckedChange={onChange}
      />
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
    </div>
  );
};
