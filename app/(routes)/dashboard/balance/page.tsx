"use client";
import { Plus, Scale } from "lucide-react";

import { CustomContainer } from "@/components/common/CustomContainer";
import { CustomModal } from "@/components/modals/CustomModal";
import { useModal } from "@/hooks/useModal";

import CoffeeCup from "../../../public/img/coffeeIcon.png";
import TeaBalance from "../../../public/img/teaIcon.png";
import WaterBalance from "../../../public/img/waterBottle.png";
import { AddDrinkForm } from "./components/AddDrinkForm";
import { BalanceList } from "./components/BalanceList";

export default function BalancePage() {
  const { isOpen, openModal, closeModal } = useModal();

  const balanceList = [
    {
      drinkType: "Coffee",
      fillLevel: 40,
      color: "#6b4226",
      backgroundColor: "#f1e4db",
      icon: CoffeeCup,
    },
    {
      drinkType: "Tea",
      fillLevel: 60,
      color: "#a16207",
      backgroundColor: "#e8ddcf",
      icon: TeaBalance,
    },
    {
      drinkType: "Water",
      fillLevel: 80,
      color: "#3b82f6",
      backgroundColor: "#cfdcf0",
      icon: WaterBalance,
    },
  ];

  return (
    <CustomContainer width="w-[100%]">
      <div className="py-4 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          Balance Page <Scale size={30} color="gray" />
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Manage your water, coffee, and tea balance
        </p>

        <nav>
          <ul className="flex gap-4 mb-4">
            <li className="text-white hover:text-gray-800 transition-all duration-300 cursor-pointer bg-gray-400 p-2 rounded-md">
              Daily
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer bg-gray-200 p-2 rounded-md">
              Weekly
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer bg-gray-200 p-2 rounded-md">
              Monthly
            </li>
          </ul>
        </nav>

        <div className="flex gap-6 mt-6 w-full flex-wrap justify-start">
          <BalanceList listItems={balanceList} />

          <div className="w-[200px] h-[400px] bg-gray-200 rounded-xl p-4 flex justify-center items-center text-gray-500 font-semibold text-lg flex-col cursor-pointer hover:bg-gray-300 transition-all duration-300 shadow-md">
            <Plus size={32} />
            <span className="mt-2" onClick={openModal}>
              Add Balance
            </span>
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Add Balance"
        className="w-full sm:w-[600px] max-w-lg mx-6"
      >
        <AddDrinkForm />
      </CustomModal>
    </CustomContainer>
  );
}
