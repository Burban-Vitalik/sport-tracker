"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";
import { formatDate } from "../helpers/formatDate";
import { getFullUserName } from "../helpers/getFullUserName";
import { formatEmail } from "../helpers/formatEmail";
import { capitalizeName } from "../helpers/capitalizeName";
import { CalendarCheck, CalendarDays } from "lucide-react";

type UserKeys = keyof User;

const userKeys: Record<UserKeys, UserKeys> = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  age: "age",
  id: "id",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: userKeys.id,
    header: "ID",
  },
  {
    accessorKey: userKeys.firstName,
    header: "Name",
    cell: ({ row }) => {
      const fullName = getFullUserName(
        row.original.firstName,
        row.original.lastName
      );
      return capitalizeName(fullName);
    },
  },
  {
    accessorKey: userKeys.email,
    header: "Email",
    cell: ({ row }) => formatEmail(row.getValue(userKeys.email), true),
  },
  {
    accessorKey: userKeys.age,
    header: "Age",
  },
  {
    accessorKey: userKeys.createdAt,
    header: "Created At",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <CalendarDays size={16} color="grey" />
        {formatDate(row.getValue(userKeys.createdAt))}
      </div>
    ),
  },
  {
    accessorKey: userKeys.updatedAt,
    header: "Updated At",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <CalendarCheck size={16} color="grey" />
        {formatDate(row.getValue(userKeys.updatedAt))}
      </div>
    ),
  },
];
