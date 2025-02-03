import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await prisma.exercise.findMany({
      include: { workoutPrograms: true },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні програм:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
