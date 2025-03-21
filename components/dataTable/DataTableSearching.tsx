"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { X } from "lucide-react";
import { Table as ReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

type PropsType<TData> = {
  dataTable: ReactTable<TData>;
  filterByColumn: string;
};

export const DataTableSearching = <TData extends object>({
  dataTable,
  filterByColumn,
}: PropsType<TData>) => {
  const [filterValue, setFilterValue] = useState<string>(
    (dataTable.getColumn(filterByColumn)?.getFilterValue() as string) ?? ""
  );

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  const handleClearFilter = () => {
    setFilterValue("");
  };

  const debouncedFilterValue = useDebounce(filterValue, 1000);

  useEffect(() => {
    if (
      debouncedFilterValue !==
      (dataTable.getColumn(filterByColumn)?.getFilterValue() as string)
    ) {
      dataTable.getColumn(filterByColumn)?.setFilterValue(debouncedFilterValue);
    }
  }, [debouncedFilterValue, dataTable, filterByColumn]);

  return (
    <div className="relative w-full sm:max-w-xs md:max-w-md lg:max-w-sm">
      <Input
        placeholder={"Search..."}
        value={filterValue}
        onChange={handleChangeValue}
        className="pr-12 py-2 border"
      />
      <Button
        onClick={handleClearFilter}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent text-gray-500 focus:outline-none"
        disabled={!filterValue}
        variant="ghost"
      >
        <X />
      </Button>
    </div>
  );
};
