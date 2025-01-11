import React, { FC } from "react";
import {
  FaDumbbell,
  FaHeartbeat,
  FaBalanceScale,
  FaBolt,
  FaRunning,
} from "react-icons/fa";
import { initialValues } from "../form/CreateProgramForm";
import Image from "next/image";

import CoachPerson from "../../../../../public/img/coachPerson.webp";
import SlimBody from "../../../../../public/img/shapes/slim.webp";
import MuscularBody from "../../../../../public/img/shapes/muscular.webp";
import FitBody from "../../../../../public/img/shapes/fit.webp";
import BodyBuldingBody from "../../../../../public/img/shapes/bodybuilding.webp";

const goals = [
  {
    src: SlimBody,
    id: "muscle_gain",
    label: "Muscle Gain",
    icon: <FaDumbbell className="text-yellow-500" />,
  },
  {
    src: FitBody,
    id: "fat_loss",
    label: "Fat Loss",
    icon: <FaHeartbeat className="text-red-500" />,
  },
  {
    src: MuscularBody,
    id: "maintenance",
    label: "Maintenance",
    icon: <FaBalanceScale className="text-yellow-500" />,
  },
  {
    src: BodyBuldingBody,
    id: "strength_development",
    label: "Strength Development",
    icon: <FaBolt className="text-blue-500" />,
  },
  {
    src: BodyBuldingBody,
    id: "cardio",
    label: "Cardio",
    icon: <FaRunning className="text-blue-500" />,
  },
];

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (
    field: string,
    value: string | boolean | number | object
  ) => void;
};

export const SelectWorkoutGoal: FC<PropsType> = ({ values, setFieldValue }) => {
  const selectedGoal = goals.find((goal) => goal.id === values.workoutGoal);

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="flex items-center justify-center">
        <Image
          src={selectedGoal?.src || CoachPerson}
          alt="Workout Goal Image"
          className="size-52 object-contain lg:w-80 lg:h-80 lg:object-contain"
        />
      </div>

      <div className="grid gap-4 w-full">
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => setFieldValue(values.workoutGoal, goal.id)}
            aria-pressed={values.workoutGoal === goal.id}
            className={`flex items-center gap-4 p-2 rounded-lg shadow-md transition-all duration-300
              ${
                values.workoutGoal === goal.id
                  ? "bg-gray-50 text-primary-700 scale-105 shadow-lg"
                  : "bg-white text-gray-800 hover:shadow-xl"
              }`}
          >
            <div
              className={`text-xl md:text-2xl transition-colors duration-200 ${
                values.workoutGoal === goal.id
                  ? "text-primary-500"
                  : "text-gray-500"
              }`}
            >
              {goal.icon}
            </div>
            <p
              className={`text-md md:text-lg font-semibold transition-colors duration-200 ${
                values.workoutGoal === goal.id
                  ? "text-primary-700"
                  : "text-gray-800"
              }`}
            >
              {goal.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
