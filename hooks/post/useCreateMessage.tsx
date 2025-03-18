type DataType = {
  text: string;
  chatId: string;
  senderId: string;
};

export const useCreateMessage = () => {
  const createMessage = async ({ text, chatId, senderId }: DataType) => {
    try {
      await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({
          text,
          chatId,
          senderId,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  return { createMessage };
};
