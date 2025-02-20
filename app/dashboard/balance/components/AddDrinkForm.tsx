import { DrinkType } from "@prisma/client";
import { Form, Formik } from "formik";
import CoffeeCup from "../../../../public/img/coffeeIcon.png";
import TeaBalance from "../../../../public/img/teaIcon.png";
import WaterBalance from "../../../../public/img/waterBottle.png";
import { DrinkTypeIcon } from "@/components/cards/DrinkTypeIcon";
import { StaticImageData } from "next/image";
import { CustomIconButton } from "@/components/form-elements";
import { Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const drinkTypes: Array<{ name: DrinkType | null; icon: StaticImageData }> = [
  { name: DrinkType.COFFEE, icon: CoffeeCup },
  { name: DrinkType.TEA, icon: TeaBalance },
  { name: DrinkType.WATER, icon: WaterBalance },
];

export const AddDrinkForm = () => {
  const initialValues: { drinkType: DrinkType | null; amount: number } = {
    drinkType: null,
    amount: 250,
  };

  function handleAdd(values: typeof initialValues) {
    console.log("submit", values);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleAdd}>
      {({ handleSubmit, values, setFieldValue }) => (
        <Form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded-2xl shadow-xl"
        >
          <div className="flex flex-col gap-6">
            <p className="text-xl font-bold text-cyan-700 text-center">
              Choose your drink
            </p>
            <div className="flex justify-center gap-6">
              {drinkTypes.map((drinkType) => (
                <DrinkTypeIcon
                  key={drinkType.name}
                  name={drinkType.name as DrinkType}
                  icon={drinkType.icon}
                  className={`cursor-pointer p-3 justify-center flex rounded-lg transition-all transform ${
                    values.drinkType === drinkType.name
                      ? "bg-cyan-100 border-2 border-cyan-600 scale-110 shadow-md"
                      : "bg-gray-100 hover:scale-105"
                  }`}
                  onClick={() => setFieldValue("drinkType", drinkType.name)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 my-6 items-center">
            <Label
              htmlFor="amount"
              className="text-lg font-semibold text-gray-700"
            >
              Volume:{" "}
              <input
                type="text"
                value={values.amount}
                className="text-cyan-600 w-16 text-center border border-gray-300 rounded-md"
                onChange={(e) => {
                  const newValue = e.target.value.trim();
                  const numValue = newValue === "" ? 0 : Number(newValue);
                  if (isNaN(numValue)) return;
                  setFieldValue(
                    "amount",
                    Math.min(2000, Math.max(0, numValue))
                  );
                }}
              />{" "}
              ml
            </Label>
            <Input
              type="range"
              id="amount"
              name="amount"
              min={0}
              max={2000}
              step={50}
              value={values.amount}
              onChange={(e) =>
                setFieldValue(
                  "amount",
                  Math.min(2000, Math.max(0, Number(e.target.value)))
                )
              }
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer transition-all"
              style={{
                backgroundSize: `${(values.amount / 2000) * 100}% 100%`,
              }}
            />
          </div>

          <CustomIconButton
            className="mt-6 bg-cyan-600 text-white w-full py-2 rounded-lg hover:bg-cyan-700 flex items-center justify-center gap-2 transition-all"
            type="submit"
          >
            <Send />
            Confirm
          </CustomIconButton>
        </Form>
      )}
    </Formik>
  );
};
