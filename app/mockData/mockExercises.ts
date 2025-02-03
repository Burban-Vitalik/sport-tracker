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
    id: "2",
    name: "Deadlift",
    difficulty: "HARD",
    muscleGroup: "LEGS",
    createdAt: new Date(),
  },
  {
    id: "3",
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
