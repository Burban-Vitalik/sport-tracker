import { Exercise } from "@prisma/client";

export const fetchExercises = async (
  exerciseId?: string
): Promise<Exercise[]> => {
  const response = exerciseId
    ? await fetch("/api/exercises/" + exerciseId)
    : await fetch("/api/exercises");

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return response.json();
};
