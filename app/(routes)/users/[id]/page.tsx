"use client";
import { useCreateChat } from "@/hooks/post/useCreateChat";
import { prisma } from "@/lib/prisma";
import { useParams } from "next/navigation";

async function getUser(id: string) {
  const response = await prisma.user.findUnique({ where: { id: id } });
  return response;
}

export default function UserPage() {
  const params = useParams();
  const { id } = params;
  const user = getUser(id as string);

  const { createChat } = useCreateChat();

  if (!user) {
    return <div>user not found</div>;
  }

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => createChat(id as string)}
      >
        Start Chat
      </button>
    </div>
  );
}
