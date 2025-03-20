import Image from "next/image";
import React, { FC } from "react";
import {
  FaBalanceScale,
  FaBolt,
  FaDumbbell,
  FaHeartbeat,
  FaRunning,
} from "react-icons/fa";

import { initialValues } from "../form/CreateProgramForm";

const goals = [
  {
    src: "/img/shapes/slim.webp",
    id: "muscle_gain",
    label: "Muscle Gain",
    icon: <FaDumbbell className="text-yellow-500" />,
  },
  {
    src: "/img/shapes/fit.webp",
    id: "fat_loss",
    label: "Fat Loss",
    icon: <FaHeartbeat className="text-red-500" />,
  },
  {
    src: "/img/shapes/muscular.webp",
    id: "maintenance",
    label: "Maintenance",
    icon: <FaBalanceScale className="text-yellow-500" />,
  },
  {
    src: "/img/shapes/bodybuilding.webp",
    id: "strength_development",
    label: "Strength Development",
    icon: <FaBolt className="text-blue-500" />,
  },
  {
    src: "/img/shapes/bodybuilding.webp",
    id: "cardio",
    label: "Cardio",
    icon: <FaRunning className="text-blue-500" />,
  },
];

type PropsType = {
  values: typeof initialValues;
  setFieldValue: (field: string, value: string) => void;
};

const GoalButton: FC<{
  goal: (typeof goals)[number];
  isSelected: boolean;
  onClick: () => void;
}> = ({ goal, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`flex items-center gap-4 p-2 rounded-lg shadow-md transition-all duration-300
        ${
          isSelected
            ? "bg-gray-50 text-primary-700 scale-105 shadow-lg"
            : "bg-white text-gray-800 hover:shadow-xl"
        }`}
    >
      <div
        className={`text-xl md:text-2xl transition-colors duration-200 ${
          isSelected ? "text-primary-500" : "text-gray-500"
        }`}
      >
        {goal.icon}
      </div>
      <p
        className={`text-md md:text-lg font-semibold transition-colors duration-200 ${
          isSelected ? "text-primary-700" : "text-gray-800"
        }`}
      >
        {goal.label}
      </p>
    </button>
  );
};

export const SelectWorkoutGoal: FC<PropsType> = ({ values, setFieldValue }) => {
  const selectedGoal = goals.find((goal) => goal.id === values.workoutGoal);

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="flex items-center justify-center">
        <Image
          src={selectedGoal?.src || "/img/coachPerson.webp"}
          alt="Workout Goal Image"
          width={300}
          height={300}
          className="object-contain lg:w-80 lg:h-80 lg:object-contain"
        />
      </div>

      <div className="grid gap-4 w-full">
        {goals.map((goal) => (
          <GoalButton
            key={goal.id}
            goal={goal}
            isSelected={values.workoutGoal === goal.id}
            onClick={() => setFieldValue("workoutGoal", goal.id)}
          />
        ))}
      </div>
    </div>
  );
};
