"use client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Table as ReactTable } from "@tanstack/react-table";
import { ArrowUpDown, Search, Settings2 } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";

type PropsType<TData> = {
  dataTable: ReactTable<TData>;
};

export const DataTableViewOptions = <TData extends object>({
  dataTable,
}: PropsType<TData>) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredColumns = dataTable
    .getAllColumns()
    .filter(
      (column) =>
        column.getCanHide() &&
        column.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {" "}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto flex items-center gap-2 text-sm text-gray-700 border rounded-lg px-4 py-2 hover:bg-gray-50"
        >
          <Settings2 className="text-gray-500" />
          View
          <ArrowUpDown className="text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-white border border-gray-200 rounded-lg shadow-md p-4"
      >
        <div className="relative flex items-center mb-4">
          <Search className="text-gray-400 size-4 left-3 absolute" />
          <Input
            placeholder="Search columns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10"
          />
        </div>

        <div className="space-y-2">
          {filteredColumns.map((column) => (
            <DropdownMenuItem
              key={column.id}
              className="flex items-center gap-2 text-sm text-gray-600 capitalize"
              onClick={() => column.toggleVisibility()}
            >
              {column.getIsVisible() ? (
                <span className="text-green-500">✔</span>
              ) : (
                <span className="text-gray-300">✘</span>
              )}
              {column.id}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
