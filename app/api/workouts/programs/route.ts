import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const workTest = {
  currentAge: 25, // good
  currentWeight: 85.5, // good
  currentHeight: 180.0, // good
  fatPercentage: 20.0, // good
  goalWeight: 75.0, // good
  goalHeight: 180.0, // good
  goalFatPercentage: 12.0, // good
  title: "Summer Shred", // good
  weekSessions: 5, // good
  notes: "Focus on cardio and HIIT workouts.", // good
  isPrivate: false, // works
  gender: "Male", // works
  workoutGoal: "cardio", // works
};

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
