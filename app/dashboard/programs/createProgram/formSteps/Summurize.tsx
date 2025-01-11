import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initialValues } from "../form/CreateProgramForm";
import { FC } from "react";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/app/helpers";

type PropsType = {
  values: typeof initialValues;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFieldValue: (field: string, value: string | boolean | number) => void;
};

export const Summarize: FC<PropsType> = ({
  values,
  handleChange,
  setFieldValue,
}) => {
  const summaryObj = {
    Title: values.title,
    Notes: values.notes,
    "Current Age": values.currentAge,
    Gender: values.gender,
    "Workout Goal": values.workoutGoal,
    "Current Weight (kg)": values.currentWeight,
    "Current Height (cm)": values.currentHeight,
    "Fat Percentage (%)": values.fatPercentage,
    "Goal Weight (kg)": values.goalWeight,
    "Goal Height (cm)": values.goalHeight,
    "Goal Fat Percentage (%)": values.goalFatPercentage,
    "Weekly Sessions": values.weekSessions,
    "Public Program": values.isPrivate ? "Yes" : "No",
    "Program Start Date": formatDate(new Date(values.programStart)),
    "Program End Date": formatDate(new Date(values.programEnd)),
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      <div className="flex-1 bg-white p-6 rounded-md shadow-sm">
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {Object.entries(summaryObj).map(([key, value]) => (
            <li key={key}>
              <span className="font-medium text-gray-600">{key}: </span>
              <span>{value || "N/A"}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col gap-6 bg-white p-6 rounded-md shadow-sm">
        <div>
          <Label htmlFor="title" className="text-gray-700 font-medium">
            Program Name
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Enter program name"
            className="mt-2 w-full"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="notes" className="text-gray-700 font-medium">
            Notes
          </Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Enter description"
            className="mt-2 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <Switch
            name="isPrivate"
            id="isPrivate"
            checked={values.isPrivate}
            onClick={() => setFieldValue("isPrivate", !values.isPrivate)}
          />
          <p>Public / Private</p>
        </div>
      </div>
    </div>
  );
};
