import { NextResponse } from "next/server";
import { z } from "zod";
import { setAdminSession } from "@/lib/auth/cookies";

const Body = z.object({
  id: z.string().min(3),
  password: z.string().min(3),
});

export async function POST(req: Request) {
  const { id, password } = Body.parse(await req.json());
  if (id === process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD) {
    await setAdminSession(id);
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
