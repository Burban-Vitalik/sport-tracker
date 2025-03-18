"use client";
import { WorkoutProgram } from "@prisma/client";
import { useState, useEffect } from "react";

type DataType = {
  programs: WorkoutProgram[];
  loading: boolean;
};

export const useFetchPrograms = (): DataType => {
  const [data, setData] = useState<DataType>({
    programs: [],
    loading: false,
  });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true }));

        const response = await fetch("/api/workouts/programs");

        if (!response.ok) {
          throw new Error("Failed to fetch workout programs");
        }

        const data = await response.json();
        setData({ programs: data, loading: false });
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, []);

  return data;
};
