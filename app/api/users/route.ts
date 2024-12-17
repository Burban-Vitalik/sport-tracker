import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}

// Delete User
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const id = body.id;

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
      });
    }

    await prisma.newUser.delete({ where: { id: parseInt(id) } });

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
