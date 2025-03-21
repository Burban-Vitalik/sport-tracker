import { DataTable } from "@/components/dataTable";
import { columns } from "./columns";
import { EmptyMessageWithSmile } from "@/components/common";
import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";

async function getData(): Promise<User[]> {
  return await prisma.user.findMany({});
}

export default async function UsersPage() {
  const data: User[] = await getData();

  return (
    <div className="container mx-auto py-10 h-100vh">
      {data ? (
        <DataTable columns={columns} data={data} filterByColumn={"firstName"} />
      ) : (
        <EmptyMessageWithSmile message="No users found" />
      )}
    </div>
  );
}
