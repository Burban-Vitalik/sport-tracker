import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const myId = searchParams.get("userId");
  const myEmail = searchParams.get("email");

  const whereConditions = [];

  if (myId) {
    whereConditions.push({ id: { not: myId } });
  }

  if (myEmail) {
    whereConditions.push({ email: { not: myEmail } });
  }

  const users = await prisma.user.findMany({
    where: whereConditions.length ? { AND: whereConditions } : undefined,
  });

  return new Response(JSON.stringify(users), { status: 200 });
}
