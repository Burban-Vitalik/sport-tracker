"use client";

import { ColumnDef } from "@tanstack/react-table";
import { IUser } from "../types/user";
import { formatAddress } from "../helpers/formatAddress";

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
    cell: ({ row }) => (
      <div>{formatAddress(row.getValue("address"), "table")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
