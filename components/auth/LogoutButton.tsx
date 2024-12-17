"use client";

import Cookies from "js-cookie";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { CustomIconButton } from "../form-elements/buttons/CustomIconButton";
import React from "react";

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
