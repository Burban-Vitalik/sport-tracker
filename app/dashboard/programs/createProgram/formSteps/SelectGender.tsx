import { FC } from "react";
import { initialValues } from "../form/CreateProgramForm";
import ManImage from "../../../../../public/img/man.webp";
import MaleImage from "../../../../../public/img/male.webp";
import Image from "next/image";

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (
    field: string,
    value: string | boolean | number | object
  ) => void;
};

export const SelectGender: FC<PropsType> = ({ setFieldValue, values }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        className={`flex flex-col items-center gap-3 p-4 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${
          values.gender === "Male" ? "bg-white" : "bg-gray-100 opacity-50"
        } hover:shadow-lg hover:scale-105`}
        onClick={() => setFieldValue("gender", "Male")}
      >
        <Image
          src={ManImage}
          alt="For Myself"
          width={160}
          height={160}
          className="rounded-full"
        />
        <span className="text-lg font-semibold text-gray-700">Male</span>
      </div>

      <div
        className={`flex flex-col items-center gap-3 p-4 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${
          values.gender === "Female" ? "bg-white" : "bg-gray-100 opacity-50"
        } hover:shadow-lg hover:scale-105`}
        onClick={() => setFieldValue("gender", "Female")}
      >
        <Image
          src={MaleImage}
          alt="For My Client"
          width={160}
          height={160}
          className="rounded-full"
        />
        <span className="text-lg font-semibold text-gray-700">Female</span>
      </div>
    </div>
  );
};
