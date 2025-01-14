import Image from "next/image";
import React, { FC } from "react";

import { Slider } from "@/components/ui/slider";

import { initialValues } from "../form/CreateProgramForm";

const ageGroups = [
  { src: "/img/age18-29.webp", label: "Age: 16-29", range: [16, 29] },
  { src: "/img/age30-39.webp", label: "Age: 30-39", range: [30, 39] },
  { src: "/img/age40-49.webp", label: "Age: 40-49", range: [40, 59] },
  { src: "/img/age50.webp", label: "Age: 50+", range: [60, 80] },
];

type PropsType = {
  values: typeof initialValues;
  handleChange: (e: { target: { name: string; value: string } }) => void;
};

export const SelectAge: FC<PropsType> = ({ values, handleChange }) => {
  const currentAgeGroup = ageGroups.find(
    (group) =>
      values.currentAge >= group.range[0] && values.currentAge <= group.range[1]
  );

  const handleSliderChange = (value: number[]) => {
    handleChange({ target: { name: "currentAge", value: value[0].toFixed() } });
  };
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center">
        <Slider
          value={[values.currentAge]}
          defaultValue={[values.currentAge]}
          onValueChange={handleSliderChange}
          min={16}
          max={80}
          step={1}
          className="w-72"
        />
        <p className="mt-2 text-lg font-medium">Age: {values.currentAge}</p>
      </div>

      {currentAgeGroup && (
        <div className="flex flex-col items-center gap-3">
          <div className="overflow-hidden rounded-full">
            <Image
              src={currentAgeGroup.src}
              alt={currentAgeGroup.label}
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
