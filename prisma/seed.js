import { mockUsers } from "../app/mockData/mockUserData";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
