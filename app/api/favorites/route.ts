import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id: userId, entityId, type } = await req.json();

    if (!userId || !entityId || !type) {
      return new NextResponse(
        JSON.stringify({
          message: "User ID, entity ID, and type are required",
        }),
        { status: 400 }
      );
    }

    const foundSameFavorite = await prisma.favorite.findFirst({
      where: {
        userId,
        entityId,
        type,
      },
    });

    if (foundSameFavorite) {
      return new NextResponse(
        JSON.stringify({ message: "Favorite already exists" }),
        { status: 400 }
      );
    }

    await prisma.favorite.create({
      data: {
        userId,
        entityId,
        type,
      },
    });

    return new NextResponse(JSON.stringify({ message: "Favorite added" }), {
      status: 200,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Failed to add favorite" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  // Отримуємо id з тіла запиту
  const { id } = await req.json(); // Тепер id буде в тілі запиту

  if (!id) {
    return new NextResponse("ID is required", { status: 400 });
  }

  try {
    // Видаляємо елемент з таблиці favorites за id
    const deletedFavorite = await prisma.favorite.delete({
      where: {
        id: id, // Використовуємо id без перетворення
      },
    });

    return new NextResponse(JSON.stringify(deletedFavorite), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting favorite:", error);
    return new NextResponse("Error deleting favorite", { status: 500 });
  }
}
