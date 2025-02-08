"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CalendarCheck, CalendarDays } from "lucide-react";
import { User } from "@prisma/client";
import {
  capitalizeName,
  formatDate,
  formatEmail,
  getFullUserName,
} from "../helpers";
import { UserAvatar } from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";

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
  profileImage: "profileImage",
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
      const fullName = getFullUserName({
        firstName: row.original.firstName,
        lastName: row.original.lastName,
      }) as string;

      const capitalizedName = capitalizeName(fullName);

      return (
        <div className="flex items-center gap-2">
          <UserAvatar
            width={30}
            height={30}
            imageUrl={row.original.profileImage as string}
          />
          {capitalizedName}
        </div>
      );
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
  {
    accessorKey: userKeys.id,
    header: "Add to favorites",
    cell: ({ row }) => (
      <div>
        <Button onClick={() => alert(row.getValue(userKeys.id))}>
          Add to Favorites
        </Button>
      </div>
    ),
  },
];
