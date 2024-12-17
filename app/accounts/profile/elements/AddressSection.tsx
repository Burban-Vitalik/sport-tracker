import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { Pencil } from "lucide-react";

export default function AddressSection() {
  return (
    <section className="bg-white border rounded-md p-6 shadow-lg">
      <div className="flex flex-row">
        <p className="text-2xl font-semibold mb-6">Personal Information</p>
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
          <span>Country:</span>
          <span className="text-gray-800">Ukraine</span>
        </div>
        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>City:</span>
          <span className="text-gray-800">Lviv</span>
        </div>
        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>Postal Code:</span>
          <span className="text-gray-800">79000</span>
        </div>
        <div className="flex justify-start gap-2 text-sm font-medium text-gray-600">
          <span>City:</span>
          <span className="text-gray-800">Lviv</span>
        </div>
      </div>
    </section>
  );
}
