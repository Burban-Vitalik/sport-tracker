import React, { FC } from "react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import AgeYoung from "../../../../../public/img/age18-29.webp";
import AgeMedium from "../../../../../public/img/age30-39.webp";
import AgeOlder from "../../../../../public/img/age40-49.webp";
import AgeOld from "../../../../../public/img/age50.webp";
import { initialValues } from "../form/CreateProgramForm";

const ageGroups = [
  { src: AgeYoung, label: "Age: 16-29", range: [16, 29] },
  { src: AgeMedium, label: "Age: 30-39", range: [30, 39] },
  { src: AgeOlder, label: "Age: 40-49", range: [40, 59] },
  { src: AgeOld, label: "Age: 50+", range: [60, 80] },
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
