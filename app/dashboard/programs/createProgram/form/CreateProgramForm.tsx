"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { FormHeader } from "./FormHeader";
import { useUser } from "@/hooks/userContext";
import { Step1, Step2, Step3, Step4 } from "../formSteps";

export const initialValues = {
  title: "",
  description: "",
  currentAge: 18,
  gender: "male",
  // currentWeight: 0,
  // currentHeight: 0,
  programType: "",
  // programGoal: "",
  programStart: new Date(),
  programEnd: "",
  // trainingMode: "",
  withCoach: false,
  // programFor: {
  //   userId: "",
  //   typeUser: "",
  // },
  weeklySessions: 3,
  programFor: "",
  isPublic: false,
  additionalNotes: "",
};

const steps = [
  { label: "For Whom", component: Step1 },
  { label: "General Information", component: Step2 },
  { label: "User Details", component: Step3 },
  { label: "Finalize Program", component: Step4 },
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

  const handleCreation = (values: typeof initialValues) => {
    console.log("Program Created with values: ", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleCreation}>
      {({ handleSubmit, values, handleChange, handleBlur, setFieldValue }) => (
        <Form
          onSubmit={handleSubmit}
          className="max-w-[90%] mx-auto p-8 space-y-6 rounded-lg "
        >
          <FormHeader currentStep={currentStep} stepLength={steps.length} />

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{steps[currentStep].label}</CardTitle>
            </CardHeader>
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
              onClick={
                isLastStep
                  ? () => console.log("program created", values)
                  : handleNext
              }
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
