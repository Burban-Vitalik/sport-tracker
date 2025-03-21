import { FC } from "react";

import { calculateTime } from "@/app/helpers/calculateTime";
import { CustomDataPicker } from "@/components/common/CustomDataPicker";

import { initialValues } from "../form/CreateProgramForm";

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (field: string, value: Date) => void;
};

export const SelectProgramDuration: FC<PropsType> = ({
  values,
  setFieldValue,
}) => {
  const isDisabledBeforeNow = (date: Date | null) =>
    (date && date < new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)) || false;

  const isDisabledBeforeStart = (date: Date) => {
    const now = new Date();
    const programStart = values.programStart
      ? new Date(values.programStart)
      : now;
    return date < now || date < programStart;
  };

  const durationInWeeks = calculateTime(
    values.programStart,
    values.programEnd,
    "weeks"
  );

  const totalWorkouts = durationInWeeks * 3;

  return (
    <div className="p-5 rounded-md bg-white max-w-lg mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <CustomDataPicker
            name="programStart"
            label="Start Program"
            date={values.programStart}
            setDate={(value?: Date) =>
              setFieldValue("programStart", value as Date)
            }
            disabled={isDisabledBeforeNow}
          />
        </div>

        <div className="flex flex-col items-center">
          <CustomDataPicker
            name="programEnd"
            label="End Program"
            date={values.programEnd}
            setDate={(value?: Date) =>
              setFieldValue("programEnd", value as Date)
            }
            disabled={isDisabledBeforeStart}
          />
        </div>

        {values.programStart && values.programEnd && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Calculated Duration:</p>
            <p className="text-xl font-bold text-blue-600">
              {durationInWeeks} weeks
            </p>
            <p className="text-sm text-gray-600">Total Workouts:</p>
            <p className="text-xl font-bold text-green-600">
              {totalWorkouts} workouts
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
