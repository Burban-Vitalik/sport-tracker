import { Exercise } from "@prisma/client";

export const mockExercises: Exercise[] = [
  {
    id: "1",
    name: "Bench Press",
    difficulty: "MEDIUM",
    muscleGroup: "SHOULDERS",
    createdAt: new Date(),
  },
  {
    id: "cm6p1rjqb0002uwv8d8venvfv",
    name: "Deadlift",
    difficulty: "HARD",
    muscleGroup: "LEGS",
    createdAt: new Date(),
  },
  {
    id: "cm6p1rv9z0003uwv8bfppviq2",
    name: "Squats",
    difficulty: "EASY",
    muscleGroup: "LEGS",
    createdAt: new Date(),
  },
  {
    id: "4",
    name: "Barbell Curl",
    difficulty: "MEDIUM",
    muscleGroup: "ARMS",
    createdAt: new Date(),
  },
  {
    id: "5",
    name: "Overhead Press",
    difficulty: "MEDIUM",
    muscleGroup: "CHEST",
    createdAt: new Date(),
  },
];
