"use client";
import { apiFetcher } from "@/lib/fetcher";
import { Exercise } from "@prisma/client";
import { useState, useEffect } from "react";

type DataType = {
  exercises: Exercise[];
  loading: boolean;
};

export const useFetchExercises = () => {
  const [data, setData] = useState<DataType>({
    exercises: [],
    loading: false,
  });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const response = await apiFetcher("/api/exercises");
        setData({ exercises: response, loading: false });
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setData({ exercises: [], loading: false });
      }
    })();
  }, []);

  return data;
};
