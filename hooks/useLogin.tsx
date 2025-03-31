import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type InitialLoginValues = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (
    values: InitialLoginValues,
    setErrors: (errors: { email?: string; password?: string }) => void
  ) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        Cookies.set("token", data.token, { expires: 1 });
        router.push("/dashboard");
      } else {
        setErrors({
          email: "Invalid credentials. Please try again.",
          password: "Invalid credentials. Please try again.",
        });
      }
    } catch {
      setErrors({
        email: "An unexpected error occurred. Please try again later.",
        password: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};
