import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  // Check if the token exists
  const token = req.cookies.get("token")?.value;

  // If token is not found, redirect to login
  if (!token) {
    console.log("Token not found, redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
    console.log("Token is valid, proceeding to the requested route");
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/((?!login|auth|public).*)"],
};
