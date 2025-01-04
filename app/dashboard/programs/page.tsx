"use client";

import { CustomIconButton } from "@/components/form-elements";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProgramsPage() {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1>Programs page</h1>
        <CustomIconButton
          onClick={() => router.push("/dashboard/programs/createProgram")}
        >
          <Plus />
          Create New Program
        </CustomIconButton>
      </div>
    </div>
  );
}
