"use client";

import { CustomContainer } from "@/components/common/CustomContainer";
import {
  ExercisesList,
  ExercisesListSkeleton,
} from "@/components/sections/exercise";
import { useUser } from "@/context/userContext";
import { useFetchExercises } from "@/hooks/fetch/useFetchExercises";

export default function ExercisesPage() {
  const { user } = useUser();

  const { exercises, loading } = useFetchExercises();

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
