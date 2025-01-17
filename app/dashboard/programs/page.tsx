"use client";

import React, { useEffect, useState } from "react";
import { WorkoutProgram } from "@prisma/client";
import { WorkoutProgramCard } from "@/components/cards/WorkoutProgram";

export default function WorkoutPrograms() {
  const [programs, setPrograms] = useState<WorkoutProgram[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch("/api/workouts/programs");

        if (!response.ok) {
          throw new Error("Failed to fetch workout programs");
        }

        const data = await response.json();
        setPrograms(data);
      } catch (error) {
        setError("Error fetching programs");
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Workout Programs</h1>
      {programs.length === 0 ? (
        <p>No programs available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((program: WorkoutProgram) => (
            <WorkoutProgramCard key={program.id} data={program} />
          ))}
        </div>
      )}
    </div>
  );
}
