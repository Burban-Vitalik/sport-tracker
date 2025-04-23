import { User } from "@prisma/client";
import { useEffect, useState } from "react";

type DataType = {
  users: User[];
  loading: boolean;
  error: string | null;
};

export const useFetchUsers = () => {
  const [data, setData] = useState<DataType>({
    users: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setData((prev) => ({ ...prev, loading: true, error: null }));
        const response = await fetch(
          process.env.NEXT_PUBLIC_SERVER_URL + "/users",
          { method: "GET" }
        );

        if (!response.ok) throw new Error("Failed to fetch users");

        const usersData = await response.json();
        setData({ users: usersData, loading: false, error: null });
      } catch (error) {
        console.error("Error fetching users:", error);
        setData({ users: [], loading: false, error: "Error fetching users" });
      }
    };

    fetchUsers();
  }, []);

  return data;
};
