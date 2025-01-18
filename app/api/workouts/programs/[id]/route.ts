import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const program = await prisma.workoutProgram.findUnique({
      where: { id: parseInt(params.id) },
      include: { user: true },
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
