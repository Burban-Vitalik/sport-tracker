import { WorkoutProgram } from "@prisma/client";

export const newWorkoutProgram: WorkoutProgram = {
  id: 1,
  userId: 1,
  title: "test program",
  notes: "test notes",
  weekSessions: 3,
  currentAge: 22,
  currentHeight: 182,
  currentWeight: 82,
  goalWeight: 92,
  fatPercentage: 20,
  goalFatPercentage: 20,
  gender: "Male",
  goalHeight: 185,
  programStart: new Date(),
  programEnd: new Date(),
  workoutGoal: "muscleGain",
  createdAt: new Date(),
  updatedAt: new Date(),
  isPrivate: false,
};
