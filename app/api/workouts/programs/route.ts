import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { isFunction } from "@tanstack/react-table";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const program = await prisma.workoutProgram.create({
      data: body,
    });

    return NextResponse.json(
      { message: "Програму створено успішно", program },
      { status: 201 }
    );
  } catch (error) {
    console.error("Помилка при створенні програми:", error);
    return NextResponse.json(
      { message: "Помилка при створенні програми", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await prisma.workoutProgram.findMany({
      include: { user: true },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні програм:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
