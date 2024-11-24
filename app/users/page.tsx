import { DataTable } from "@/components/dataTable";
import { mockUsers } from "../mockData/mockUserData";
import { IUser } from "../types/user";
import { columns } from "./columns";
import { EmptyMessageWithSmile } from "@/components/common";

async function getData(): Promise<IUser[]> {
  return mockUsers;
}

export default async function UsersPage() {
  const data: IUser[] = await getData();

  return (
    <div className="container mx-auto py-10 h-100vh">
      {data ? (
        <DataTable columns={columns} data={data} filterByColumn={"userName"} />
      ) : (
        <EmptyMessageWithSmile message="No users found" />
      )}
    </div>
  );
}
