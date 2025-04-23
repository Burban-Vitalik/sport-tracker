"use client"; // важливо для використання onClick у Next.js App Router

import { removeUser } from "@/lib/api/removeUser";
import { DeleteIcon } from "lucide-react";

export default function SettingsPage() {
  const handleDelete = async () => {
    try {
      await removeUser("cm94i13990000uw98gssxvfvt");
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete user");
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>
        <DeleteIcon /> Delete
      </button>
    </div>
  );
}
