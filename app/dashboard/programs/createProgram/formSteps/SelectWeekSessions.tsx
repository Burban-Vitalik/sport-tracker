"use client";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";
import { initialValues } from "../form/CreateProgramForm";
import { WorkoutGoal as WorkoutGoalEnum } from "../../../../enums/workoutGoal";

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (field: string, value: number) => void;
};

export const SelectWeekSecessions: FC<PropsType> = ({
  values,
  setFieldValue,
}) => {
  const [showMessage, setShowMessage] = useState(true);

  const handleAddSession = () => {
    if (values.weekSessions < 7) {
      setFieldValue("weekSessions", values.weekSessions + 1);
    }
  };

  const handleRemoveSession = () => {
    if (values.weekSessions > 1) {
      setFieldValue("weekSessions", values.weekSessions - 1);
    }
  };

  const getSessionColor = () => {
    if (values.weekSessions < 3) {
      return "#fbbf24";
    } else if (values.weekSessions >= 3 && values.weekSessions <= 4) {
      return "#34d399";
    } else {
      return "#f87171";
    }
  };

  const getMessage = () => {
    const workoutGoalName =
      WorkoutGoalEnum[values.workoutGoal as keyof typeof WorkoutGoalEnum];
    if (values.weekSessions < 3) {
      return {
        text: `Given your workout goal of ${workoutGoalName}, we recommend at least more sessions per week.`,
        type: "info",
      };
    } else if (values.weekSessions >= 3 && values.weekSessions <= 4) {
      return {
        text: `Given your workout goal of ${workoutGoalName}, we recommend a balanced number of sessions per week.`,
        type: "success",
      };
    } else {
      return {
        text: `Given your workout goal of ${workoutGoalName}, we recommend less sessions per week.`,
        type: "info",
      };
    }
  };

  const message = getMessage();

  return (
    <div className="flex flex-col gap-10">
      {/* Повідомлення */}
      {showMessage && (
        <div
          className={`flex items-center p-2 rounded-md space-x-2 ${
            message.type === "info"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {message.type === "info" ? (
            <X size={20} onClick={() => setShowMessage(false)} />
          ) : (
            <CheckCircle size={20} />
          )}
          <p className="text-sm">{message.text}</p>
        </div>
      )}

      {/* Кнопки додавання та видалення */}
      <div className="flex justify-end gap-4">
        <Button
          onClick={handleRemoveSession}
          disabled={values.weekSessions <= 1}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Remove session
        </Button>
        <Button
          onClick={handleAddSession}
          disabled={values.weekSessions >= 7}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Add session
        </Button>
      </div>

      {/* Список тренувань */}
      <div className="flex flex-wrap gap-2">
        {Array(values.weekSessions)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              style={{
                background: getSessionColor(),
              }}
              className="flex items-center justify-between px-4 py-2 text-white rounded-md"
            >
              <span>Workout {index + 1}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
