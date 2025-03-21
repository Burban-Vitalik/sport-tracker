"use client";
import { apiFetcher } from "@/lib/fetcher";
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

        const response = await apiFetcher<WorkoutProgram[]>({
          url: "/api/workouts/programs",
          method: "GET",
        });

        setData({ programs: response, loading: false });
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, []);

  return data;
};
