import { prisma } from "../prisma";

export async function getChatsForUser(userId: string) {
  const chats = await prisma.chat.findMany({
    where: {
      participants: {
        some: {
          userId: userId,
        },
      },
    },
    include: {
      participants: true,
      messages: true,
    },
  });

  return chats;
}
