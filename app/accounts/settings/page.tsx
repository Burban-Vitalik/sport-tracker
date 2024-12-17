"use client";

import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import { DeleteIcon } from "lucide-react";

export default function SettingsPage() {
  const deleteUser = () => alert("Deleted");

  return (
    <div>
      <CustomIconButton variant="destructive" onClick={deleteUser}>
        Delete User
        <DeleteIcon />
      </CustomIconButton>
    </div>
  );
}
