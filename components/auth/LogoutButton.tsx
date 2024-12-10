"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Видаляємо токен з cookies
    Cookies.remove("token");

    // Можна показати повідомлення або здійснити редірект
    alert("Ви вийшли з облікового запису");

    // Перенаправлення користувача на сторінку логіну або домашню сторінку
    router.push("/auth");
  };

  return <button onClick={handleLogout}>Вийти</button>;
};

export default LogoutButton;
