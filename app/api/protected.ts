import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Токен не надано" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    return NextResponse.json(
      { message: "Доступ дозволено", user: decoded },
      { status: 200 }
    );
  } catch (error) {
    console.error("JWT verification error:", error);
    return NextResponse.json(
      { message: "Невірний або прострочений токен" },
      { status: 401 }
    );
  }
}

export const config = {
  runtime: "edge",
};
