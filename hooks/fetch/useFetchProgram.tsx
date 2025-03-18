"use client";
import { WorkoutProgram } from "@prisma/client";
import { useEffect, useState } from "react";

type DataType = {
  program: WorkoutProgram | null;
  loading: boolean;
};

export const useFetchProgram = (programId: string): DataType => {
  const [data, setData] = useState<DataType>({ program: null, loading: true });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const response = await fetch(`/api/workouts/programs/${programId}`);
        if (!response.ok) throw new Error("Failed to fetch program data");

        const data = await response.json();
        setData({ program: data, loading: false });
      } catch (error) {
        console.error("Error loading program data:", error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [programId]);

  return data;
};
