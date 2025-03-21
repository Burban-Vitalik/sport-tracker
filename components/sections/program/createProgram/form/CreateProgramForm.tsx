"use client";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { showToast } from "@/app/helpers";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@/context/userContext";
import { Gender, User, WorkoutGoal, WorkoutProgram } from "@prisma/client";

import {
  SelectAge,
  SelectBodyInfo,
  SelectGender,
  SelectProgramDuration,
  SelectWeekSecessions,
  SelectWorkoutGoal,
  Summarize,
} from "../formSteps";
import { FormHeader } from "./FormHeader";

export const initialValues: Omit<WorkoutProgram, "id" | "userId"> = {
  title: "Some title",
  currentAge: 22,
  gender: Gender.Male,
  workoutGoal: WorkoutGoal.FAT_LOSS,
  currentWeight: 82,
  currentHeight: 182,
  fatPercentage: 20,
  goalWeight: 92,
  goalHeight: 185,
  goalFatPercentage: 20,
  weekSessions: 1,
  notes: "some notes",
  isPrivate: false,
  programStart: new Date(),
  programEnd: new Date(),
};

const steps = [
  { label: "Select gender", component: SelectGender },
  { label: "Select age", component: SelectAge },
  { label: "Select your body properties", component: SelectBodyInfo },
  { label: "Select week sessions", component: SelectWeekSecessions },
  { label: "Select your goal", component: SelectWorkoutGoal },
  { label: "Select Data", component: SelectProgramDuration },
  { label: "Summary", component: Summarize },
];

export function CreateProgramForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const currentUser = useUser();
  const router = useRouter();

  if (!currentUser.isLoading && !currentUser) {
    return <p>Loading...</p>;
  }

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = (e: React.FormEvent) => {
    if (currentStep < steps.length - 1) {
      e.preventDefault();
      setCurrentStep((prev) => prev + 1);
    }
  };
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  const handleCreation = async (values: typeof initialValues) => {
    if (!currentUser) return;

    if (isLastStep) {
      try {
        const response = await fetch("/api/workouts/programs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, userId: currentUser.user?.id }),
        });

        if (!response.ok) {
          showToast({ message: "Failed to create program", type: "error" });
          throw new Error("Failed to create program");
        }

        const data = await response.json();
        showToast({ message: "Workout Program Created", type: "success" });
        router.push("/dashboard/programs");
        console.log("Workout Program Created:", data);
      } catch (error) {
        console.error("Error creating workout program:", error);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleCreation}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
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
            {!isLastStep ? (
              <Button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Finish
              </Button>
            )}
          </div>

          <Card className="mt-6 py-5 border-none shadow-none">
            <CardContent>
              {React.createElement(
                steps[currentStep].component as React.ComponentType<{
                  values: typeof initialValues;
                  handleChange: (
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => void;
                  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
                  setFieldValue: (
                    field: string,
                    value: string | boolean | number
                  ) => void;
                  user?: User;
                  errors?: unknown;
                  touched?: unknown;
                }>,
                {
                  values: formik.values,
                  handleChange: formik.handleChange,
                  handleBlur: formik.handleBlur,
                  setFieldValue: formik.setFieldValue,
                  user: currentUser.user || undefined,
                  errors: formik.errors,
                  touched: formik.touched,
                }
              )}
            </CardContent>
          </Card>
        </Form>
      )}
    </Formik>
  );
}
