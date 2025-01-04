import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

type PropsType = {
  label?: string;
  name?: string;
  width?: number;
  value?: string;
  options: string[];
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const CustomSelect: FC<PropsType> = ({
  label,
  name,
  value,
  options,
  width = 180,
  placeholder = "Select",
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <Label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </Label>
      )}
      <Select name={name} value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-[${width}px]`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
