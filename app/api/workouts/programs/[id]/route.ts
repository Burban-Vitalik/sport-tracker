import { prisma } from "@/lib/prisma";
import { WorkoutProgram } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const program = await prisma.workoutProgram.findUnique({
      where: { id: params.id },
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

export async function DELETE(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const id = pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    await prisma.workoutProgram.delete({
      where: { id: id },
    });

    return NextResponse.json(
      { message: "Program deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting program:", error);
    return NextResponse.json(
      { message: "Failed to delete program" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const id = pathname.split("/").pop();

  const body: Partial<WorkoutProgram> = await req.json();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const response = await prisma.workoutProgram.update({
      where: { id: id },
      data: body,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error updating program:", error);
    return NextResponse.json(
      { message: "Failed to update program" },
      { status: 500 }
    );
  }
}
