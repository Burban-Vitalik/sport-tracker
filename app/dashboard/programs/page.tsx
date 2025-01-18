"use client";

import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

import { CustomIconButton } from "@/components/form-elements";
import { WorkoutProgram } from "@prisma/client";

import { WorkoutProgramsList } from "./WorkoutProgramsList";
import { useRouter } from "next/navigation";

export default function WorkoutPrograms() {
  const [programs, setPrograms] = useState<WorkoutProgram[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

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
      <div className="flex justify-end">
        <CustomIconButton
          className=" bg-emerald-800 text-white hover:bg-emerald-900 hover:text-white"
          onClick={() => router.push("/dashboard/programs/createProgram")}
        >
          <Plus />
          Create Program
        </CustomIconButton>
      </div>

      <WorkoutProgramsList data={programs} />
    </div>
  );
}
