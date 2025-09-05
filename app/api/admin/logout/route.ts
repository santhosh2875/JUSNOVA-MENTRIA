import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/auth/cookies";

export async function POST() {
  clearAdminSession();
  return NextResponse.json({ ok: true });
}
