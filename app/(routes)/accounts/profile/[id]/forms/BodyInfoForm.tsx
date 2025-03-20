import { CustomIconButton, CustomIconInput } from "@/components/form-elements";
import { Label } from "@/components/ui/label";
import { BodyInfo } from "@prisma/client";
import { Formik } from "formik";
import { Cake, Pen, X } from "lucide-react";
import { FC } from "react";

type InitialValuesType = Pick<BodyInfo, "height" | "weight">;

const formElements = [
  {
    name: "height",
    label: "Height",
    icon: <Cake size={18} />,
    type: "number",
  },
  {
    name: "weight",
    label: "Weight",
    icon: <Cake size={18} />,
    type: "number",
  },
];

const formButtons = [
  { label: "Update", type: "submit", icon: <Pen size={18} /> },
  { label: "Cancel", type: "reset", icon: <X size={18} /> },
];

type PropsType = {
  userData?: BodyInfo;
  handleUpdate?: (value: InitialValuesType) => void;
};

export const BodyInfoForm: FC<PropsType> = ({ userData }) => {
  const initialValues: InitialValuesType = {
    height: userData?.height || 0,
    weight: userData?.weight || 0,
  };

  const handleUpdate = async (value: InitialValuesType) => {
    console.log("value", value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleUpdate}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {formElements.map((element) => (
            <div key={element.name} className="flex flex-col gap-2">
              <Label className="text-md text-gray-600">{element.label}</Label>
              <CustomIconInput
                type={element.type}
                name={element.name}
                placeholder={element.label}
                defaultValue={values[element.name as keyof InitialValuesType]}
              >
                {element.icon}
              </CustomIconInput>
            </div>
          ))}
          <div className="flex flex-row gap-4">
            {formButtons.map((button) => (
              <CustomIconButton
                key={button.label}
                type={button.type as "submit" | "reset"}
                className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md flex items-center"
              >
                {button.icon}
                {button.label}
              </CustomIconButton>
            ))}
          </div>
        </form>
      )}
    </Formik>
  );
};
