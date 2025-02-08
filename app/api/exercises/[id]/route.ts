import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  try {
    const program = await prisma.exercise.findUnique({
      where: { id: params.id },
      include: {
        workoutPrograms: true,
      },
    });

    if (!program) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(program);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
