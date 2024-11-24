import { ColumnDef } from "@tanstack/react-table";
import { IUser } from "../types/user";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "userName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
