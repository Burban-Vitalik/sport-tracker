import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Функція для верифікації токена та отримання даних користувача
export async function verifyTokenAndGetUser(token: string) {
  try {
    // Верифікація токена
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    // Отримання користувача з бази даних за допомогою Prisma
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Повернення даних користувача
    return user;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    // Якщо токен не валідний або виникає інша помилка
    throw new Error("Invalid token or user not found");
  }
}
