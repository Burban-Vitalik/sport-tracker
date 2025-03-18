"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export const useAuthRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token && !pathname.startsWith("/auth")) {
      router.push("/auth");
    }
  }, [router, pathname]);
};
