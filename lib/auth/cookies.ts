import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET || "dev-secret");
const cookieName = "admin_session";

export async function setAdminSession(id: string) {
  const token = await new SignJWT({ sub: id, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("2h")
    .sign(secret);
  cookies().set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 2,
  });
}

export function clearAdminSession() {
  cookies().delete(cookieName);
}

export async function getAdminSession(): Promise<{ sub: string } | null> {
  const cookie = cookies().get(cookieName);
  if (!cookie?.value) return null;
  try {
    const { payload } = await jwtVerify(cookie.value, secret);
    return { sub: String(payload.sub) };
  } catch {
    return null;
  }
}
