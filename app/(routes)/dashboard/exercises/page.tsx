"use client";
import { useCallback, useEffect, useState } from "react";

import { CustomContainer } from "@/components/common/CustomContainer";
import { useUser } from "@/context/userContext";
import { fetchExercises } from "@/lib/api/fetchExercises";
import { Exercise } from "@prisma/client";

import { ExercisesList } from "./components/ExercisesList";
import { ExercisesListSkeleton } from "./components/ExercisesListSkeleton";

type DataType = {
  exercises: Exercise[];
  loading: boolean;
  error: string | null;
};

export default function ExercisesPage() {
  const [data, setData] = useState<DataType>({
    exercises: [],
    loading: true,
    error: null,
  });

  const { user } = useUser();

  const loadExercises = useCallback(async () => {
    setData((prev) => ({ ...prev, loading: true }));
    try {
      const dataResponse = await fetchExercises();
      setData((prev) => ({ ...prev, exercises: dataResponse }));
    } catch (error) {
      setData((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : String(error),
      }));
    } finally {
      setData((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  useEffect(() => {
    loadExercises();
  }, [loadExercises]);

  return (
    <CustomContainer>
      {data.loading || !user ? (
        <ExercisesListSkeleton />
      ) : (
        <ExercisesList exercises={data.exercises} favorites={user.favorites} />
      )}
    </CustomContainer>
  );
}
