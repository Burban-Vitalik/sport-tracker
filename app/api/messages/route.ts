import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");

    if (!chatId) {
      return new Response(JSON.stringify({ error: "Invalid chat ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const messages = await prisma.message.findMany({
      where: { chatId },
      include: { sender: true, chat: true },
    });

    return new Response(JSON.stringify(messages), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await prisma.message.create({
      data: {
        text: body.text,
        senderId: body.senderId,
        chatId: body.chatId,
      },
    });

    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
