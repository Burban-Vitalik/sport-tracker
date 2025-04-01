import React, { useState } from "react";
import { ChooseChatType } from "./sections/chat/CreateNewChat/Steps/ChooseChatType";
import { BasicInformation } from "./sections/chat/CreateNewChat/Steps/BasicInformation";

export function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    chatType: "CHAT",
    chatName: "",
    chatPrivacy: "public",
  });

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-center">
            <h3
              className="text-xl font-semibold"
              onClick={() => handleStepChange(1)}
            >
              Choose Type
            </h3>
            <ChooseChatType
              type={formData.chatType}
              onClick={(chatType: string) => {
                setFormData({ ...formData, chatType: chatType });
                handleStepChange(2);
              }}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col ">
            <BasicInformation
              type={formData.chatType}
              stepBack={() => handleStepChange(1)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full">{renderStepContent()}</div>;
}
