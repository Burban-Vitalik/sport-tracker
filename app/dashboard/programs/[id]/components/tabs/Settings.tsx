"use client";

import { showToast } from "@/app/helpers";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

export const Settings = () => {
  const params = useParams();
  const programId = params.id;
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/workouts/programs/${programId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to delete program");
      }

      router.push("/dashboard/programs");
      showToast({
        message: "Program deleted successfully",
        type: "success",
      });
    } catch (error) {
      console.error("Error deleting program:", error);
      showToast({
        message: "Error deleting program",
        type: "error",
      });
    }
  };

  return (
    <div>
      <div>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};
