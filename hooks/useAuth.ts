"use client";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import { checkTokenExpiration } from "@/app/helpers/checkTokenExpiration";
import { TOKEN_KEY } from "@/consts";
import { DecodedToken } from "@/types/token";

type DataType = {
  isAuthenticated: boolean;
  user: DecodedToken | null;
  loading: boolean;
};

const useAuth = () => {
  const [data, setData] = useState<DataType>({
    isAuthenticated: false,
    user: null,
    loading: true,
  });

  function updateAuthState(isAuth: boolean, userData: DecodedToken | null) {
    setData((prev) => ({
      ...prev,
      isAuthenticated: isAuth,
      user: userData,
    }));
  }

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get(TOKEN_KEY);

      if (!token || !checkTokenExpiration(token)) {
        Cookies.remove(TOKEN_KEY); // Remove expired token
        updateAuthState(false, null);
        return;
      }

      try {
        const decoded: DecodedToken = jwtDecode(token);
        updateAuthState(true, decoded);
      } catch (error) {
        console.error("Error decoding token", error);
        updateAuthState(false, null);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    };

    checkAuth();
  }, []);

  return data;
};

export default useAuth;
