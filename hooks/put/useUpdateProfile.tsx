import { apiFetcher } from "@/lib/fetcher";
import { MyPartial } from "@/types/custom-types";
import { User } from "@prisma/client";

export const useUpdateProfile = (userId: string) => {
  async function updateProfile(value: MyPartial<User>) {
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
