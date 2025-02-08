"use client";

import { Exercise } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExercisePage() {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    const fetchProgram = async () => {
      try {
        const response = await fetch(`/api/exercises/${id}`);
        if (!response.ok) throw new Error("Failed to fetch program data");

        const data = await response.json();
        setExercise(data);
      } catch {
        // setError("Error loading program data");
      } finally {
        // setLoading(false);
      }
    };

    fetchProgram();
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
