import { User } from "@prisma/client";
import { useEffect, useState } from "react";

type DataType = {
  users: User[];
  loading: boolean;
};

export const useFetchUsers = () => {
  const [data, setData] = useState<DataType>({
    users: [],
    loading: false,
  });

  useEffect(() => {
    (async function () {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const response = await fetch("/api/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setData({ users: data, loading: false });
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, []);

  return data;
};
