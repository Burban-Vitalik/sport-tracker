import { showToast } from "@/app/helpers";
import { User } from "@prisma/client";

type Props = {
  userId: string;
  data: Partial<User>;
};

export const useUpdateUser = () => {
  async function updateUser({ userId, data }: Props) {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, ...data }),
      });

      const message =
        response.status === 200
          ? "Profile updated successfully"
          : "Profile update failed";

      showToast({
        message,
        type: response.status === 200 ? "success" : "error",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      showToast({ message: "An unexpected error occurred", type: "error" });
    }
  }

  return { updateUser };
};
