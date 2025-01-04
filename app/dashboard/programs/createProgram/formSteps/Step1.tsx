import { Button } from "@/components/ui/button";
import { FC } from "react";
import { initialValues } from "../form/CreateProgramForm";

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (
    field: string,
    value: string | boolean | number | object
  ) => void;
  userId: string;
};

const colorSuccess = "#e0fbfa";
const colorFailure = "#f3e4e4";

export const Step1: FC<PropsType> = ({ values, setFieldValue, userId }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Button
        className="p-20 border border-gray-300 rounded-lg text-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        style={{
          background:
            values.programFor === userId ? colorSuccess : colorFailure,
        }}
        onClick={() => setFieldValue("programFor", userId)}
      >
        For myself
      </Button>

      <Button
        className="p-20 border border-gray-300 rounded-lg text-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        style={{
          background:
            values.programFor !== userId ? colorSuccess : colorFailure,
        }}
        onClick={() => setFieldValue("programFor", "2")}
      >
        For my client
      </Button>
    </div>
  );
};
