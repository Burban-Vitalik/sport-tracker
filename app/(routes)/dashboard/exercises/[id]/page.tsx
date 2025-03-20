"use client";

import { fetchExercises } from "@/lib/api/fetchExercises";
import { Exercise } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExercisePage() {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    if (!id) return;

    (async () => {
      const res = await fetchExercises(id);
      setExercise(res);
    })();
  }, [id]);

  if (!exercise) return <div>Loading...</div>;

  return (
    <div>
      <div>Exercise Page</div>
      <div>{id}</div>
      <div>{exercise.name}</div>
      <div>{exercise.muscleGroup}</div>
      <div>{exercise.difficulty}</div>
    </div>
  );
}
