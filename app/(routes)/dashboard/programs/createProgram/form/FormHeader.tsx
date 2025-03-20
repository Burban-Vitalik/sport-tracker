import { Progress } from "@/components/ui/progress";
import { FC } from "react";

type PropsType = {
  currentStep: number;
  stepLength: number;
  currentStepText: string;
};

export const FormHeader: FC<PropsType> = ({
  currentStep,
  stepLength,
  currentStepText,
}) => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {/* Personalized Workout Plan */}
          {currentStepText}
        </h1>
        <p className="text-sm text-gray-500">
          Step {currentStep + 1} of {stepLength}
        </p>
      </div>

      {/* Progress Bar */}
      <Progress value={(currentStep + 1) * (100 / stepLength)} />
    </>
  );
};
