import { FC } from "react";
import { formatDate } from "@/app/helpers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { initialValues } from "../form/CreateProgramForm";

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
    Program: {
      Title: values.title,
      Notes: values.notes,
      "Program Start Date": formatDate(new Date(values.programStart)),
      "Program End Date":
        values.programEnd !== null
          ? formatDate(new Date(values.programEnd))
          : "",
      "Public Program": values.isPrivate ? "Yes" : "No",
    },
    Personal: {
      "Current Age": values.currentAge,
      Gender: values.gender,
      "Current Weight (kg)": values.currentWeight,
      "Current Height (cm)": values.currentHeight,
      "Fat Percentage (%)": values.fatPercentage,
      "Goal Weight (kg)": values.goalWeight,
      "Goal Height (cm)": values.goalHeight,
      "Goal Fat Percentage (%)": values.goalFatPercentage,
    },
    Weekly: {
      "Weekly Sessions": values.weekSessions,
    },
  };

  const handleSwitchChange = () => {
    setFieldValue("isPrivate", !values.isPrivate);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      <div className="flex-1 bg-white p-6 rounded-md shadow-sm">
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {Object.entries(summaryObj).map(([category, fields]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-2">{category}</h3>
              {Object.entries(fields).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium text-gray-600">{key}: </span>
                  <span>{value || "N/A"}</span>
                </li>
              ))}
            </div>
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
            value={values.title}
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
            value={values.notes}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <Switch
            name="isPrivate"
            id="isPrivate"
            checked={values.isPrivate}
            onClick={handleSwitchChange}
          />
          <p>Public / Private</p>
        </div>
      </div>
    </div>
  );
};
