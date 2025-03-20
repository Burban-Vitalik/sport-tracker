import { CustomIconButton } from "@/components/form-elements";
import { BicepsFlexed, Pencil } from "lucide-react";
import { FC } from "react";

type PropsType = {
  title: string;
  data?: {
    [key: string]: string | number;
  };
};

export const SectionInformation: FC<PropsType> = ({ title, data }) => {
  if (!data) return null;
  return (
    <div className="rounded-lg p-6 shadow-md cursor-pointer bg-white hover:shadow-lg border-gray-200">
      {/* Header */}
      <div className="flex flex-row justify-between items-center border-b pb-4 mb-4">
        <p className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
          <BicepsFlexed className="text-gray-700" />
          {title}
        </p>
        <div>
          <CustomIconButton>
            <Pencil className="text-gray-600" /> Edit
          </CustomIconButton>
        </div>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 overflow-hidden">
        {Object.entries(data).map(([key, value]) => (
          <SectionInformationItem
            key={key}
            subtitle={capitalize(key)}
            text={value}
          />
        ))}
      </div>
    </div>
  );
};

const SectionInformationItem = ({
  subtitle,
  text,
}: {
  subtitle: string;
  text: string | number;
}) => {
  return (
    <div className="flex flex-row gap-1">
      <span className="text-sm font-medium text-gray-700">{subtitle}:</span>
      <span className="text-sm font-normal text-gray-900">{text}</span>
    </div>
  );
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
