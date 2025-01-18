"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { WorkoutProgram } from "@prisma/client";
import { Goal } from "./components/Goals";
import { TrainingSession } from "./components/TrainingSession";
import { StyledTabs } from "./components/StyledTabs";

export default function ProgramPage() {
  const { id: programId } = useParams<{ id: string }>();
  const [program, setProgram] = useState<WorkoutProgram | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!programId) return;

    const fetchProgram = async () => {
      try {
        const response = await fetch(`/api/workouts/programs/${programId}`);
        if (!response.ok) throw new Error("Failed to fetch program data");

        const data = await response.json();
        setProgram(data);
      } catch {
        setError("Error loading program data");
      } finally {
        setLoading(false);
      }
    };

    fetchProgram();
  }, [programId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!program) return <p>No program found</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-8 w-full">
        <div className="flex flex-col gap-4 w-1/5">
          <div className="flex justify-center items-center shadow-sm p-4 bg-white rounded-lg">
            <div className="bg-green-500 w-full h-[100px]"></div>
          </div>
          <Goal />
          <Goal />
        </div>

        <div className="flex flex-col gap-4 w-3/4 text-gray-700 leading-relaxed">
          <TrainingSession />
          <div className="flex flex-row gap-5">
            <StyledTabs />
            <div className="h-auto p-4 bg-gray-100 min-w-[200px]">
              <p>Members</p>
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index}>Person {index + 1}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
