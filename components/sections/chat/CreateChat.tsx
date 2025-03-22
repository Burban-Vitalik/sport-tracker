"use client";
import { InviteNewMembers } from "@/components/common/InviteNewMembers";
import { useFetchUsers } from "@/hooks/fetch/useFetchUsers";

export default function CreateChat() {
  const { users, loading } = useFetchUsers();

  if (!users || loading) return <p>No members</p>;
  return (
    <div className="">
      <InviteNewMembers members={users} />
    </div>
  );
}
