import { prisma } from "@/lib/prisma";

async function getUser(id: string) {
  const response = await prisma.user.findUnique({ where: { id: Number(id) } });
  return response;
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUser(id);

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
