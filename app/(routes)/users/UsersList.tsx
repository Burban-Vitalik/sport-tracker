"use client";

import { UserCard } from "@/components/cards/UserCard";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

type Props = {
  users: User[];
};

export function UsersList({ users }: Props) {
  const router = useRouter();

  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name="Vitalik Burban"
          email={user.email}
          onClick={() => router.push(`/users/${user.id}`)}
        />
      ))}
    </>
  );
}
