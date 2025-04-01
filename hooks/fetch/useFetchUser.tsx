import { User } from "@prisma/client";
import { useEffect, useState } from "react";

type DataType = {
  user: User | null;
  loading: boolean;
};

export const useFetchUser = (userId: string) => {
  const [data, setData] = useState<DataType>({
    user: null,
    loading: false,
  });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setData({ user: data, loading: false });
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, []);

  return data;
};
