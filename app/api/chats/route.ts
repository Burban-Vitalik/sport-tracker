import { prisma } from "@/lib/prisma";
import { ChatType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
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

    return NextResponse.json(chats, { status: 200 });
  } catch (error) {
    console.error("Error fetching chats:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Step 1 - Create the chat
    const chat = await prisma.chat.create({
      data: {
        type: "GROUP" as ChatType,
        isPrivate: false,
        creatorId: body.creatorId,
      },
    });

    // Step 2 - Create chat participants
    const chatParticipants = await prisma.chatParticipant.createMany({
      data: (body.participants as string[]).map((participantId) => ({
        chatId: chat.id,
        userId: participantId,
        isAdmin: participantId === body.creatorId,
      })),
    });

    return NextResponse.json({ ...chat, chatParticipants }, { status: 201 });
  } catch (error) {
    console.error("Error creating chat:", error);
    return NextResponse.json(
      { message: "Failed to create chat" },
      { status: 500 }
    );
  }
}
