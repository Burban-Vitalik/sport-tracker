"use client";

import { showToast } from "@/app/helpers";
import { useFetchExercise } from "@/hooks/fetch/useFetchExercise";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ExercisePage() {
  const { id } = useParams<{ id: string }>();

  const { exercise, loading, error } = useFetchExercise(id);

  useEffect(() => {
    if (error) {
      showToast({
        message: error,
        type: "error",
      });
    }
  }, [error]);

  if (loading) return <div>Loading...</div>;
  if (!exercise) return <div>Empty...</div>;

  return (
    <div>
      <div>Exercise Page {id}</div>
      <div>{id}</div>
      <div>{exercise.name}</div>
      <div>{exercise.muscleGroup}</div>
      <div>{exercise.difficulty}</div>
    </div>
  );
}
