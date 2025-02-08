"use client";
import { useEffect, useState } from "react";
import { ExercisesList } from "./components/ExercisesList";
import { Button } from "@/components/ui/button";
import { Exercise } from "@prisma/client";

export default function ExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("/api/exercises");

        if (!response.ok) {
          throw new Error("Failed to fetch exercises");
        }

        const data = await response.json();
        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-end">
        <Button
          variant="outline"
          className="bg-cyan-600 text-white hover:bg-cyan-700 hover:text-white"
        >
          Add Exercise
        </Button>
      </div>

      <div className="flex flex-col gap-4 w-[80%] mx-auto">
        <ExercisesList exercises={exercises} />
      </div>
    </div>
  );
}
