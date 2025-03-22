"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useFetchProgram } from "@/hooks/fetch/useFetchProgram";
import { useUser } from "@/context/userContext";

import programBG from "@/public/img/program.webp";
import { Goal } from "@/components/sections/program/Goals";
import { StyledTabs } from "@/components/sections/program/StyledTabs";
import { TrainingSession } from "@/components/sections/program/TrainingSession";

export default function ProgramPage() {
  const { id: programId } = useParams<{ id: string }>();
  const { user } = useUser();

  const { program, loading } = useFetchProgram(programId);

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
