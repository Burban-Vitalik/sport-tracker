import { MyPick } from "@/types/custom-types";
import { User } from "@prisma/client";
import { FC } from "react";

export const getFullUserName: FC<MyPick<User, "firstName" | "lastName">> = ({
  firstName,
  lastName,
}): string => {
  if (!firstName || !lastName) return "";
  return `${firstName} ${lastName}`;
};
