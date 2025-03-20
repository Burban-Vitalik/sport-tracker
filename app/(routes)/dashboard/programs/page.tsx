"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { CustomIconButton } from "@/components/form-elements";
import { useFetchPrograms } from "@/hooks/fetch/useFetchPrograms";

import { WorkoutProgramsList } from "./WorkoutProgramsList";

export default function WorkoutPrograms() {
  const router = useRouter();

  const { programs, loading } = useFetchPrograms();

  if (loading) return <p>Loading...</p>;

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
