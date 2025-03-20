"use client";

import Cookies from "js-cookie";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { CustomIconButton } from "@/components/form-elements";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/auth");
  };

  return (
    <CustomIconButton
      variant="destructive"
      onClick={handleLogout}
      style={{ width: "100%" }}
    >
      Log out <LogOutIcon />
    </CustomIconButton>
  );
};
export default LogoutButton;
