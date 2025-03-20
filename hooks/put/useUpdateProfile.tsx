import { apiFetcher } from "@/lib/fetcher";
import { User } from "@prisma/client";

export const useUpdateProfile = (userId: string) => {
  async function updateProfile(value: Partial<User>) {
    try {
      const response = await apiFetcher<User>({
        url: `/api/users/${userId}`,
        method: "PUT",
        body: { id: userId, ...value },
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { updateProfile };
};
