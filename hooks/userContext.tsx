import { User } from "@prisma/client";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUser() {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (!token) {
        console.log("No token found");
        return;
      }

      try {
        // Розшифровуємо токен, щоб отримати ID користувача
        const decodedToken: { userId: string; [key: string]: unknown } =
          jwtDecode(token); // Декодуємо токен
        const userId = decodedToken.userId; // Витягуємо userId з токену
        debugger;
        // Робимо запит на сервер для отримання даних користувача
        setIsLoading(true);
        const response = await fetch(`/api/users/${userId}`);

        if (response.ok) {
          const userData = await response.json();
          debugger;
          setUser(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error decoding token or fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider.");
  }
  return context;
};
