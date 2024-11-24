import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { X } from "lucide-react";
import { Table as ReactTable } from "@tanstack/react-table";

type PropsType<TData> = {
  dataTable: ReactTable<TData>;
  filterByColumn: string;
};

export const DataTableSearching = <TData extends object>({
  dataTable,
  filterByColumn,
}: PropsType<TData>) => {
  // Remove input value
  const handleClearFilter = () => {
    dataTable.getColumn(filterByColumn)?.setFilterValue("");
  };

  // Change input value
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    dataTable.getColumn(filterByColumn)?.setFilterValue(event.target.value);

  // Filtered value
  const filteredValue =
    (dataTable.getColumn(filterByColumn)?.getFilterValue() as string) ?? "";

  return (
    <div className="relative w-full sm:max-w-xs md:max-w-md lg:max-w-sm">
      <Input
        placeholder={"Search..."}
        value={filteredValue}
        onChange={handleChangeValue}
        className="pr-12 py-2 border"
      />
      <Button
        onClick={handleClearFilter}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent text-gray-500 focus:outline-none"
        disabled={!filteredValue}
        variant="ghost"
      >
        <X />
      </Button>
    </div>
  );
};
