export const useCreateChat = () => {
  const createChat = async (userId: string) => {
    const response = await fetch("/api/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isPrivate: true,
        type: "CHAT",
        creatorId: userId,
        participants: [userId, "cm8ervi8s0005uw98g0h41wfa"],
      }),
    });
    const data = await response.json();
    console.log("Created chat:", data);
  };
  return { createChat };
};
