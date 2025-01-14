import Image from "next/image";
import { FC } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { initialValues } from "../form/CreateProgramForm";

type PropsType = {
  values: typeof initialValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: string, value: string | boolean | number) => void;
};

const bodyImages = [
  { min: 5, max: 9, image: "/img/fatProgress/fat5-9.webp" },
  { min: 10, max: 14, image: "/img/fatProgress/fat10-14.webp" },
  { min: 15, max: 19, image: "/img/fatProgress/fat-15-19.webp" },
  { min: 20, max: 24, image: "/img/fatProgress/fat20-24.webp" },
  { min: 25, max: 29, image: "/img/fatProgress/fat25-29.webp" },
  { min: 30, max: 34, image: "/img/fatProgress/fat30-34.webp" },
  { min: 35, max: 39, image: "/img/fatProgress/fat35-39.webp" },
  { min: 40, max: Infinity, image: "/img/fatProgress/fatMore40.webp" },
];

const showBodyFat = (percent: number) => {
  return (
    bodyImages.find((range) => percent >= range.min && percent <= range.max)
      ?.image || null
  );
};

const renderInputField = (
  label: string,
  name: string,
  value: number,
  placeholder: string,
  unit: string,
  min: number,
  max: number,
  setFieldValue: (field: string, value: string | boolean | number) => void
) => (
  <div className="flex flex-col gap-3 flex-1">
    <Label className="block text-md font-medium text-center text-gray-700">
      {label}
    </Label>
    <Input
      type="number"
      name={name}
      placeholder={placeholder}
      min={min}
      max={max}
      value={value}
      onChange={(e) => {
        const inputValue = e.target.value;
        const newValue = Number(inputValue);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
          setFieldValue(name, newValue);
        }
      }}
      className="border w-full shadow-none rounded-md p-3 focus:outline-none focus:ring-0 focus:border-transparent text-md sm:text-lg"
    />
  </div>
);

export const SelectBodyInfo: FC<PropsType> = ({ values, setFieldValue }) => {
  const bodyFat = showBodyFat(values.fatPercentage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="flex flex-row md:flex-col md:flex-wrap justify-center flex-wrap gap-4">
        {renderInputField(
          "Current Height",
          "currentHeight",
          values.currentHeight,
          "e.g., 175",
          "cm",
          0,
          300,
          setFieldValue
        )}
        {renderInputField(
          "Current Weight",
          "currentWeight",
          values.currentWeight,
          "e.g., 70",
          "kg",
          0,
          300,
          setFieldValue
        )}
        {renderInputField(
          "Current Fat %",
          "fatPercentage",
          values.fatPercentage,
          "e.g., 15",
          "%",
          5,
          60,
          setFieldValue
        )}
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={bodyFat || "/img/fatProgress/fat10-14.webp"}
          alt="Body Fat"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-row md:flex-col md:flex-wrap justify-center flex-wrap gap-4">
        {renderInputField(
          "Wish Height",
          "goalHeight",
          values.goalHeight,
          "e.g., 175",
          "cm",
          0,
          300,
          setFieldValue
        )}
        {renderInputField(
          "Wish Weight",
          "goalWeight",
          values.goalWeight,
          "e.g., 70",
          "kg",
          0,
          300,
          setFieldValue
        )}
        {renderInputField(
          "Wish Fat %",
          "goalFatPercentage",
          values.goalFatPercentage,
          "e.g., 15",
          "%",
          5,
          60,
          setFieldValue
        )}
      </div>
    </div>
  );
};
