import { Table as ReactTable } from "@tanstack/react-table";
import { Button } from "../ui/button";

type PropsType = {
  // dataTable: ReactTable<TData>;
  dataTable: ReactTable<unknown>;
};

export const DataTablePagination = ({ dataTable }: PropsType) => {
  <div className="flex items-center justify-end space-x-2 py-4">
    <Button
      variant="outline"
      size="sm"
      onClick={() => dataTable.previousPage()}
      disabled={!dataTable.getCanPreviousPage()}
    >
      Previous
    </Button>
    <Button
      variant="outline"
      size="sm"
      onClick={() => dataTable.nextPage()}
      disabled={!dataTable.getCanNextPage()}
    >
      Next
    </Button>
  </div>;
};
