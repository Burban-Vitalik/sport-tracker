import { ChartColumn } from "lucide-react";

export const Metrix = () => {
  return (
    <div className="shadow-sm p-2">
      <div className="flex justify-between">
        <p className="flex items-center gap-2 font-semibold">
          <ChartColumn size={14} color="green" /> Metrics
        </p>
        <span className="flex flex-row gap-2 text-blue-500">
          <p className="cursor-pointer">View All</p>/
          <p className="cursor-pointer">Edit</p>
        </span>
      </div>

      <div></div>
    </div>
  );
};
