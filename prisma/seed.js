import { prisma } from "@/lib/prisma";
import { mockUsers } from "../app/mockData/mockUserData";

async function seed() {
  try {
    await prisma.user.createMany({
      data: mockUsers,
      skipDuplicates: true,
    });
    console.log("Тестові користувачі успішно додані!");
  } catch (error) {
    console.error("Помилка під час додавання користувачів:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
