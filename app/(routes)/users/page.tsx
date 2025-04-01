"use client";
import React from "react";

import { EmptyMessageWithSmile } from "@/components/common";
import { Container } from "@/components/common/Container";
import { PageTitle } from "@/components/common/PageTitle";
import { CustomSearchInput } from "@/components/form-elements/CustomSearchInput";

import { UsersList } from "./UsersList";
import { useFetchUsers } from "@/hooks/fetch/useFetchUsers";

export default function UsersPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { users, loading: usersLoading } = useFetchUsers();

  if (usersLoading) {
    return <p>Loading users...</p>;
  }

  return (
    <Container className="mt-10 mx-auto">
      <PageTitle title="Users Page" />
      {users && users.length > 0 ? (
        <div className="flex gap-4 flex-col">
          <CustomSearchInput />
          <div className="flex flex-row flex-wrap gap-4">
            <UsersList users={users} />
          </div>
        </div>
      ) : (
        <EmptyMessageWithSmile message="No users found" />
      )}
    </Container>
  );
}
