import { CustomSelect } from "@/components/form-elements/CustomSelect";
import { FormTitle } from "../form/FormTitle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { initialValues } from "../form/CreateProgramForm";
import { FC } from "react";

type PropsType = {
  values: typeof initialValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: string, value: string | boolean | number) => void;
};

export const Step3: FC<PropsType> = ({ values, handleChange }) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col">
        <FormTitle
          title="Tell us about your body shape"
          subtitle="This information will help us customize your program."
        />

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4">
              <Label>Current Age</Label>
              <Input
                type="number"
                name="currentAge"
                placeholder="e.g., 25"
                min={0}
                max={99}
                value={values.currentAge}
                onChange={handleChange}
              />
            </div>

            <CustomSelect
              label="Gender"
              placeholder="Select Gender"
              name="gender"
              options={["Male", "Female"]}
            />
            <div className="flex flex-col gap-4">
              <Label className="block text-sm font-medium text-gray-700">
                Weekly Training Sessions
              </Label>
              <Input
                type="number"
                name="weeklySessions"
                placeholder="e.g., 3"
                min={1}
                max={7}
                value={values.weeklySessions}
                onChange={handleChange}
                // defaultValue={3}
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Body Type
            </Label>
            <div className="flex flex-wrap gap-4">
              <Label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="bodyType"
                  value="slim"
                  className="h-4 w-4"
                />
                <span>Slim</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="bodyType"
                  value="average"
                  className="h-4 w-4"
                />
                <span>Average</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="bodyType"
                  value="heavy"
                  className="h-4 w-4"
                />
                <span>Heavy</span>
              </Label>
            </div>
          </div>

          {/* Нотатки */}
          <div className="col-span-1 md:col-span-2">
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </Label>
            <Textarea
              name="additionalNotes"
              placeholder="Any specific goals or preferences?"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              value={values.additionalNotes}
              onChange={handleChange as any}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
