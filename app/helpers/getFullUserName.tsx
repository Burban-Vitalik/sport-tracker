import { User } from "@prisma/client";
import { FC } from "react";

export const getFullUserName: FC<Pick<User, "firstName" | "lastName">> = ({
  firstName,
  lastName,
}): string => {
  if (!firstName || !lastName) return "";
  return `${firstName} ${lastName}`;
};
