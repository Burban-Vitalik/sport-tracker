"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { CustomIconButton } from "@/components/form-elements";
import { WorkoutProgramsList } from "@/components/sections/program";
import { useFetchPrograms } from "@/hooks/fetch/useFetchPrograms";

export default function WorkoutPrograms() {
  const router = useRouter();

  const { programs, loading } = useFetchPrograms();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-[80vh]">
      <div className="flex justify-end">
        <CustomIconButton
          className=" bg-emerald-800 text-white hover:bg-emerald-900 hover:text-white"
          onClick={() => router.push("/programs/createProgram")}
        >
          <Plus />
          Create Program
        </CustomIconButton>
      </div>

      <WorkoutProgramsList data={programs} />
    </div>
  );
}
