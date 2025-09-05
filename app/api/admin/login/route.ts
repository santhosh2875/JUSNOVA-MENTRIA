// app/admin/login/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET || "dev-secret");

export async function POST(req: Request) {
  const form = await req.formData(); // because browser form posts multipart/form-data
  const id = String(form.get("id") || "");
  const password = String(form.get("password") || "");

  if (id === process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD) {
    const token = await new SignJWT({ sub: id, role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(secret);

    cookies().set("admin_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 2,
    });

    // Redirect to dashboard after login
    const url = new URL("/admin", req.url);
    return NextResponse.redirect(url);
  }

  // Invalid creds -> back to login
  const url = new URL("/admin/login", req.url);
  url.searchParams.set("error", "1");
  return NextResponse.redirect(url);
}
