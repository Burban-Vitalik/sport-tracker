import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { FC } from "react";
import { CustomSwitch } from "@/components/form-elements/CustomSwitch";
import ProgramLogo from "../../../../../public/img/program.webp";
import Image from "next/image";
import { initialValues } from "../form/CreateProgramForm";
import { FormTitle } from "../form/FormTitle";

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (field: string, value: string | boolean | number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const Step2: FC<PropsType> = ({
  values,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  return (
    <div className="space-y-8">
      {/* Основний контент */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Фото програми */}
        <div className="col-span-1 flex justify-center items-start">
          <Image
            src={ProgramLogo}
            alt="Program Logo"
            className="object-cover rounded-md shadow-md w-full h-full"
          />
        </div>

        {/* Поля вводу */}
        <div className="col-span-2 flex flex-col gap-6">
          <FormTitle
            title="Let’s Start with the Basics"
            subtitle="Provide the essential details about your program."
          />

          {/* Назва програми */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Program Name
            </Label>
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g., Summer Workout Plan"
              className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Опис програми */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </Label>
            <Textarea
              name="description"
              value={values.description}
              onChange={
                handleChange as unknown as (
                  e: React.ChangeEvent<HTMLTextAreaElement>
                ) => void
              }
              onBlur={
                handleBlur as unknown as (
                  e: React.FocusEvent<HTMLTextAreaElement>
                ) => void
              }
              placeholder="Briefly describe your program"
              className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          {/* Перемикач приватності */}
          <div>
            <CustomSwitch
              name="isPublic"
              label="Public / Private"
              isChecked={values.isPublic}
              onChange={() => setFieldValue("isPublic", !values.isPublic)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
