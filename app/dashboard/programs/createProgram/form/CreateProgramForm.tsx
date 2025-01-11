"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { FormHeader } from "./FormHeader";
import { useUser } from "@/hooks/userContext";
import { SelectAge } from "../formSteps/SelectAge";
import { SelectWeekSecessions } from "../formSteps/SelectWeekSessions";
import { SelectBodyInfo } from "../formSteps/SelectBodyInfo";
import { SelectProgramDuration } from "../formSteps/SelectProgramDuration";
import { Summarize } from "../formSteps/Summurize";
import { SelectGender, SelectWorkoutGoal } from "../formSteps";
import { Gender } from "@/app/enums/gender";

export const initialValues = {
  title: "dshjdshjds",
  currentAge: 22,
  gender: Gender.Male,
  workoutGoal: "strength_development",
  currentWeight: 82,
  currentHeight: 182,
  fatPercentage: 20,
  goalWeight: 92,
  goalHeight: 185,
  goalFatPercentage: 20,
  weekSessions: 1,
  notes: "hjdshsdhdsjh",
  isPrivate: false,
  userId: 1,

  // programStart: new Date(),
  programEnd: null,
};

const steps = [
  { label: "Select gender", component: SelectGender },
  { label: "Select age", component: SelectAge },
  { label: "Select your goal", component: SelectWorkoutGoal },
  { label: "Select week sessions", component: SelectWeekSecessions },
  { label: "Select your body properties", component: SelectBodyInfo },
  { label: "Select Data", component: SelectProgramDuration },
  { label: "Summary", component: Summarize },
];

export function CreateProgramForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const currentUser = useUser();

  if (!currentUser.isLoading && !currentUser) {
    return <p>Loading...</p>;
  }
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  const handleCreation = async (values: typeof initialValues) => {
    debugger;
    try {
      const response = await fetch("/api/workouts/programs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Failed to create program");
      }

      const data = await response.json();
      console.log("Workout Program Created:", data);
    } catch (error) {
      console.error("Error creating workout program:", error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleCreation}>
      {({ handleSubmit, values, handleChange, handleBlur, setFieldValue }) => (
        <Form
          onSubmit={handleSubmit}
          className="max-w-[100%] md:max-w-[90%] mx-auto p-8 space-y-6 rounded-lg"
        >
          <FormHeader
            currentStep={currentStep}
            stepLength={steps.length}
            currentStepText={steps[currentStep].label}
          />
          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`${
                currentStep === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Back
            </Button>
            <Button
              type={isLastStep ? "submit" : "button"}
              onClick={!isLastStep ? handleNext : undefined}
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </div>

          <Card className="mt-6 py-5 border-none shadow-none">
            <CardContent>
              {React.createElement(steps[currentStep].component as any, {
                values,
                handleChange,
                handleBlur,
                setFieldValue,
                userId: currentUser.user?.id.toString(),
              })}
            </CardContent>
          </Card>
        </Form>
      )}
    </Formik>
  );
}
