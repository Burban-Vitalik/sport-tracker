import { Label } from "@/components/ui/label";
import { initialValues } from "../form/CreateProgramForm";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { FormTitle } from "../form/FormTitle";

type PropsType = {
  values: typeof initialValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Step4: FC<PropsType> = ({ values, handleChange }) => {
  return (
    <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
      <FormTitle
        title="Program Specifics"
        subtitle="Provide details about your program."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Початок програми */}
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Program Start Date
          </Label>
          <Input
            type="date"
            name="programStart"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Завершення програми */}
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Program End Date
          </Label>
          <Input
            type="date"
            name="programEnd"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
