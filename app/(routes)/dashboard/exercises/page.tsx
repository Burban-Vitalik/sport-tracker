"use client";

import { CustomContainer } from "@/components/common/CustomContainer";
import { useUser } from "@/context/userContext";
import { useFetchExercises } from "@/hooks/fetch/useFetchExercises";

import { ExercisesList } from "./components/ExercisesList";
import { ExercisesListSkeleton } from "./components/ExercisesListSkeleton";

export default function ExercisesPage() {
  const { user } = useUser();

  const { exercises, loading } = useFetchExercises();

  if (loading) return <ExercisesListSkeleton />;
  if (!user) return <p>Loading...</p>;

  return (
    <CustomContainer>
      {loading || !user ? (
        <ExercisesListSkeleton />
      ) : (
        <ExercisesList exercises={exercises} favorites={user.favorites} />
      )}
    </CustomContainer>
  );
}
