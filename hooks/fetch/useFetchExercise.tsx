"use client";
import { apiFetcher } from "@/lib/fetcher";
import { Exercise } from "@prisma/client";
import { useState, useEffect } from "react";

type DataType = {
  exercise: Exercise | null;
  loading: boolean;
  error: string | null;
};

export const useFetchExercise = (exerciseId: string) => {
  const [data, setData] = useState<DataType>({
    exercise: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiFetcher(`/api/exercises/${exerciseId}`);
        setData({ exercise: response, loading: false, error: null });
        throw new Error("Error fetching exercise");
      } catch (error) {
        console.error("Error fetching exercise:");
        setData({
          exercise: null,
          loading: false,
          error: error.message,
        });
      }
    })();
  }, [exerciseId]);

  return data;
};
