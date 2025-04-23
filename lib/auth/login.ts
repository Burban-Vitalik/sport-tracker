import { API_URLS } from "@/config/api";
import { User } from "@prisma/client";

export type LoginPayload = Pick<User, "email" | "password">;

export async function loginUser({ email, password }: LoginPayload) {
  try {
    const response = await fetch(API_URLS.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Login failed: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("🔴 loginUser error:", error);
    throw new Error("Something went wrong during login.");
  }
}
