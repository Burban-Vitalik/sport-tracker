type ArgsType = {
  text: string;
  senderId: string;
  chatId: string;
};

export const sendMessage = async ({
  text,
  senderId = "cm87nf0eg0000uwekoud293e9",
  chatId = "cm87nc7gl0000uwagdjemid0b",
}: ArgsType): Promise<void> => {
  await fetch("/api/messages", {
    method: "POST",
    body: JSON.stringify({
      text,
      chatId,
      senderId,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
