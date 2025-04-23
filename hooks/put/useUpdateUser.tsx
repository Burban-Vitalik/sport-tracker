import { showToast } from "@/app/helpers";
import { MyPartial } from "@/types/custom-types";
import { User } from "@prisma/client";

type Props = {
  userId: string;
  data: MyPartial<User>;
};

export const useUpdateUser = () => {
  async function updateUser({ userId, data }: Props) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const isSuccess = response.status === 200;
      const message = isSuccess
        ? "Profile updated successfully"
        : "Profile update failed";

      showToast({
        message,
        type: isSuccess ? "success" : "error",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      showToast({ message: "An unexpected error occurred", type: "error" });
    }
  }

  return { updateUser };
};
