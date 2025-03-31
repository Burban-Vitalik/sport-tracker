import React from "react";

import { EmptyMessageWithSmile } from "@/components/common";
import { Container } from "@/components/common/Container";
import { PageTitle } from "@/components/common/PageTitle";
import { CustomSearchInput } from "@/components/form-elements/CustomSearchInput";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

import { UsersList } from "./UsersList";

async function getData(): Promise<User[]> {
  return await prisma.user.findMany({});
}

export default async function UsersPage() {
  const data: User[] = await getData();

  return (
    <Container className="mt-10 mx-auto">
      <PageTitle title="Users Page" />
      {data ? (
        <div className="flex gap-4 flex-col">
          <CustomSearchInput />
          <div className="flex flex-row flex-wrap gap-4">
            <UsersList users={data} />
          </div>
        </div>
      ) : (
        <EmptyMessageWithSmile message="No users found" />
      )}
    </Container>
  );
}
