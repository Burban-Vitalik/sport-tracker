"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/userContext";
import { WorkoutProgram } from "@prisma/client";

import programBG from "../../../../public/img/program.webp";
import { Goal } from "./components/Goals";
import { StyledTabs } from "./components/StyledTabs";
import { TrainingSession } from "./components/TrainingSession";

export default function ProgramPage() {
  const { id: programId } = useParams<{ id: string }>();
  const [program, setProgram] = useState<WorkoutProgram | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();

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

  if (!user) return <p>Loading...</p>;

  const addToFavorites = async () => {
    await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entityId: programId,
        id: user.id,
        type: "WORKOUT_PROGRAM",
      }),
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!program) return <p>No program found</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-8 w-full">
        <div className="flex flex-col gap-4 w-1/5">
          <div className="flex flex-col gap-3 shadow-sm bg-white rounded-lg p-2">
            <Image src={programBG} alt="programBg" className="rounded-lg" />
          </div>
          <Goal />
        </div>

        <div className="flex flex-col gap-4 w-3/4 text-gray-700 leading-relaxed">
          <TrainingSession />
          <div className="flex flex-row gap-5">
            <StyledTabs />
          </div>

          <Button onClick={addToFavorites}>Add to Favorites</Button>
        </div>
      </div>
    </div>
  );
}
