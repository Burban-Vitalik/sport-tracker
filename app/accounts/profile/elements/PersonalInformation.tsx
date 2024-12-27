import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { FileUser, Pencil } from "lucide-react";

export const PersonalInformation = () => {
  return (
    <section className="rounded-md p-6 shadow-md">
      <div className="flex flex-row">
        <p className="text-2xl font-semibold mb-6 flex items-center gap-4">
          <FileUser />
          Personal Information
        </p>
        <div className="ml-auto">
          <CustomIconButton
            variant="outline"
            className="flex items-center gap-1"
          >
            <Pencil /> Edit
          </CustomIconButton>
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>First Name:</span>
          <span className="text-gray-800">Vitalik</span>
        </div>

        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>Last Name:</span>
          <span className="text-gray-800">Burban</span>
        </div>

        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>Email Address:</span>
          <span className="text-gray-800">burbanvitalik2002@gmail.com</span>
        </div>

        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>Phone Number:</span>
          <span className="text-gray-800">+380 99 999 99 99</span>
        </div>

        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>Bio:</span>
          <span className="text-gray-800">IT-Developer</span>
        </div>
      </div>
    </section>
  );
};
