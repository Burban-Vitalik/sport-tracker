import { API_URLS } from "@/config/api";
import { User } from "@prisma/client";

export async function createUser(value: Pick<User, "email" | "password">) {
  const response = await fetch(API_URLS.REGISTER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });

  return response.json();
}
