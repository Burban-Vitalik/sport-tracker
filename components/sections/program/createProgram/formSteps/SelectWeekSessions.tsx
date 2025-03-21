"use client";
import { CheckCircle, X } from "lucide-react";
import { FC, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import { initialValues } from "../form/CreateProgramForm";
import { WorkoutGoal } from "@/app/enums/workoutGoal";

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (field: string, value: number) => void;
};

const getSessionColor = (weekSessions: number) => {
  if (weekSessions < 3) {
    return "#fbbf24";
  } else if (weekSessions >= 3 && weekSessions <= 4) {
    return "#34d399";
  } else {
    return "#f87171";
  }
};

const getMessage = (weekSessions: number, workoutGoal: string) => {
  if (weekSessions < 3) {
    return {
      text: `Given your workout goal of ${workoutGoal}, we recommend at least more sessions per week.`,
      type: "info",
    };
  } else if (weekSessions >= 3 && weekSessions <= 4) {
    return {
      text: `Given your workout goal of ${workoutGoal}, we recommend a balanced number of sessions per week.`,
      type: "success",
    };
  } else {
    return {
      text: `Given your workout goal of ${workoutGoal}, we recommend fewer sessions per week.`,
      type: "info",
    };
  }
};

export const SelectWeekSecessions: FC<PropsType> = ({
  values,
  setFieldValue,
}) => {
  const [showMessage, setShowMessage] = useState(true);

  const workoutGoalName = useMemo(
    () => WorkoutGoal[values.workoutGoal as keyof typeof WorkoutGoal],
    [values.workoutGoal]
  );
  const sessionColor = useMemo(
    () => getSessionColor(values.weekSessions),
    [values.weekSessions]
  );
  const message = useMemo(
    () => getMessage(values.weekSessions, workoutGoalName),
    [values.weekSessions, workoutGoalName]
  );

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

  return (
    <div className="flex flex-col gap-10">
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

      <div className="flex flex-wrap gap-2">
        {Array(values.weekSessions)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              style={{ background: sessionColor }}
              className="flex items-center justify-between px-4 py-2 text-white rounded-md"
            >
              <span>Workout {index + 1}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
