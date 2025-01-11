import { FC } from "react";
import { initialValues } from "../form/CreateProgramForm";

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (field: string, value: string | boolean | number) => void;
};

export const Coach: FC<PropsType> = ({ values, setFieldValue }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="border border-red-500">
        <div>Coach</div>
      </div>
      <div className="border border-green-500">
        <div>Alone</div>
      </div>
    </div>
  );
};
