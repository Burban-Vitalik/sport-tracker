import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
      include: { bodyInfo: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const body: Partial<User> = await req.json();
  const { id } = body;

  if (!id) {
    return new NextResponse(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const response = await prisma.user.update({
      where: {
        id: parseInt(id.toString()),
      },
      data: {
        ...body,
      },
    });

    return new NextResponse(JSON.stringify(response), {});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

// Delete User
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const id = body.id;

    if (!id) {
      return new NextResponse(JSON.stringify({ error: "ID is required" }), {
        status: 400,
      });
    }

    await prisma.user.delete({ where: { id: parseInt(id) } });

    return new NextResponse(
      JSON.stringify({ message: "User deleted successfully" }),
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
