import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { MapPinHouse, Pencil } from "lucide-react";

export default function AddressSection() {
  return (
    <section className="border rounded-md p-6 shadow-lg bg-gray-50/50">
      <div className="flex flex-row">
        <p className="text-2xl font-semibold mb-6 flex items-center gap-4">
          <MapPinHouse /> Address Information
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
