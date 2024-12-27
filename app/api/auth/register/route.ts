import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({
          statusCode: 400,
          message: "Email and password are required",
        }),
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response(
        JSON.stringify({
          statusCode: 409,
          message: "User with this email already exists",
        }),
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        bodyInfo: {
          create: {
            weight: 0,
            height: 0,
          },
        },
      },
    });

    return new Response(
      JSON.stringify({
        statusCode: 201,
        message: "User created successfully",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    return new Response(
      JSON.stringify({
        statusCode: 500,
        message: "Internal server error",
      }),
      { status: 500 }
    );
  }
}
