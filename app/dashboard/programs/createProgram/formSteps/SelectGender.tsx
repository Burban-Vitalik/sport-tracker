import Image from "next/image";
import { FC } from "react";

import { Gender } from "@/app/enums/gender";

import { initialValues } from "../form/CreateProgramForm";

type PropsType = {
  values: typeof initialValues;
  errors: typeof initialValues;
  setFieldValue: (field: string, value: Gender) => void;
};

export const SelectGender: FC<PropsType> = ({
  setFieldValue,
  values,
  errors,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.values(Gender).map((gender) => (
        <div
          key={gender}
          className={`flex flex-col items-center gap-3 p-4 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${
            values.gender == gender ? "bg-white" : "bg-gray-100 opacity-50"
          } hover:shadow-lg hover:scale-105 ${
            errors.gender ? "border-2 border-red-200" : ""
          }`}
          onClick={() => setFieldValue("gender", gender)}
        >
          <Image
            src={gender === Gender.Male ? "/img/man.webp" : "/img/male.webp"}
            alt={gender}
            width={160}
            height={160}
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 30vw, 20vw"
          />
          <span className="text-lg font-semibold text-gray-700">{gender}</span>
        </div>
      ))}
    </div>
  );
};
