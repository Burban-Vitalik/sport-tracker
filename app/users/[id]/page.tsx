import { prisma } from "@/lib/prisma";

async function getUser(id: number) {
  const response = await prisma.user.findUnique({ where: { id } });
  return response;
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(+params.id);

  if (!user) {
    return <div>user not found</div>;
  }

  return (
    <div>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
      <p>{user.email}</p>
    </div>
  );
}
