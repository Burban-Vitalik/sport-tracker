"use client";
import { useFetchUser } from "@/hooks/fetch/useFetchUser";
import { useCreateChat } from "@/hooks/post/useCreateChat";
import { useParams, useRouter } from "next/navigation";

export default function UserPage() {
  const { createChat } = useCreateChat();
  const params = useParams();
  const { id } = params;

  const router = useRouter();

  const { user, loading } = useFetchUser(id as string);

  const me = JSON.parse(localStorage.getItem("user") as string);

  if (!user || loading) {
    return <div>user not found</div>;
  }
  const commonChat = me?.chatParticipant.find((myChat) =>
    user?.chatParticipant.some((userChat) => myChat.chatId === userChat.chatId)
  );

  const hasCommonChat = Boolean(commonChat);
  const commonChatId = commonChat?.chatId || null;

  return (
    <div>
      {!hasCommonChat ? (
        <div>
          <p>Common chat: {commonChatId}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => createChat(commonChatId as string)}
          >
            {"Create chat"}
          </button>
        </div>
      ) : (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => router.push(`/chats/${id}`)}
        >
          Open Chat
        </button>
      )}

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-5">
        Add to friends
      </button>
    </div>
  );
}
