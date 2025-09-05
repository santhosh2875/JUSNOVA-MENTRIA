// app/admin/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  cookies().delete("admin_session");
  const url = new URL("/admin/login", req.url);
  return NextResponse.redirect(url, 303); // ← force GET
}

export async function GET(req: Request) {
  cookies().delete("admin_session");
  const url = new URL("/admin/login", req.url);
  return NextResponse.redirect(url, 303); // ← force GET
}
