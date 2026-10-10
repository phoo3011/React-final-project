import { NextResponse } from "next/server";
import { clearSessionCookie, loginUser, registerUser, sessionCookie, studentIdExists } from "@/lib/auth";

const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return fail("กรุณากรอกข้อมูลให้ครบ", 400); }
  const studentId = String(body.studentId ?? "").trim();
  const name = String(body.name ?? "").trim();
  const password = String(body.password ?? "");
  const mode = body.mode === "register" ? "register" : "login";
  if (!studentId || !password || (mode === "register" && !name)) return fail("กรุณากรอกข้อมูลให้ครบ", 400);
  if (mode === "register" && password.length < 6) return fail("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร", 400);
  if (studentId.length > 30 || name.length > 80 || password.length > 200) return fail("กรุณากรอกข้อมูลให้ครบ", 400);
  try {
    if (mode === "register" && (await studentIdExists(studentId))) return fail("รหัสนักศึกษานี้ถูกใช้แล้ว", 409);
    const id = mode === "register" ? await registerUser(studentId, name, password) : await loginUser(studentId, password);
    if (!id) return fail("รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง", 401);
    const response = NextResponse.json({ id });
    response.headers.set("set-cookie", sessionCookie(id));
    return response;
  } catch (error) {
    console.error("auth failed", error);
    return fail("ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง", 500);
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.headers.set("set-cookie", clearSessionCookie());
  return response;
}
