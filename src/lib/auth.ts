import { createHmac, randomBytes, scrypt as nodeScrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { db, ensureDatabase } from "@/lib/db";

const scrypt = promisify(nodeScrypt);
const COOKIE_NAME = "camt_session";
const DEV_SECRET = "development-only-change-this-secret";
const SECRET = process.env.AUTH_SECRET || DEV_SECRET;
const SECURE = process.env.NODE_ENV === "production" ? "; Secure" : "";
if (process.env.NODE_ENV === "production" && SECRET === DEV_SECRET && process.env.NEXT_PHASE !== "phase-production-build") {
  console.warn("AUTH_SECRET is not set: session cookies can be forged. Set it in the production environment.");
}

async function hashPassword(password: string) { const salt = randomBytes(16).toString("hex"); const key = await scrypt(password, salt, 64) as Buffer; return `${salt}:${key.toString("hex")}`; }
async function verifyPassword(password: string, stored: string) { const [salt, key] = stored.split(":"); if (!salt || !key) return false; const derived = await scrypt(password, salt, 64) as Buffer; const expected = Buffer.from(key, "hex"); return expected.length === derived.length && timingSafeEqual(expected, derived); }
function sign(id: string) { return `${id}.${createHmac("sha256", SECRET).update(id).digest("hex")}`; }
function readSession(value?: string | null) { if (!value) return null; const [id, signature] = value.split("."); if (!id || !signature) return null; const expected = createHmac("sha256", SECRET).update(id).digest("hex"); const a = Buffer.from(signature); const b = Buffer.from(expected); return a.length === b.length && timingSafeEqual(a, b) ? id : null; }
export async function registerUser(studentId: string, name: string, password: string) { await ensureDatabase(); const id = `user-${studentId}`; const passwordHash = await hashPassword(password); await db.execute({ sql: "INSERT INTO profiles (id, student_id, name, password_hash) VALUES (?, ?, ?, ?)", args: [id, studentId, name, passwordHash] }); return id; }
export async function loginUser(studentId: string, password: string) { await ensureDatabase(); const result = await db.execute({ sql: "SELECT id, password_hash FROM profiles WHERE student_id = ? LIMIT 1", args: [studentId] }); const row = result.rows[0]; if (!row || !(await verifyPassword(password, String(row.password_hash)))) return null; return String(row.id); }
export function sessionCookie(id: string) { return `${COOKIE_NAME}=${sign(id)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800${SECURE}`; }
export function clearSessionCookie() { return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${SECURE}`; }
export async function currentUserFromRequest(request: Request) { const cookie = request.headers.get("cookie")?.match(new RegExp(`${COOKIE_NAME}=([^;]+)`))?.[1]; return readSession(cookie); }
export async function currentUserFromCookies() { const cookieStore = await cookies(); return readSession(cookieStore.get(COOKIE_NAME)?.value); }
export async function currentProfile(): Promise<{ id: string; name: string; studentId: string } | null> {
  const id = await currentUserFromCookies();
  if (!id) return null;
  await ensureDatabase();
  const result = await db.execute({ sql: "SELECT id, name, student_id FROM profiles WHERE id = ? LIMIT 1", args: [id] });
  const row = result.rows[0];
  return row ? { id: String(row.id), name: String(row.name), studentId: String(row.student_id) } : null;
}
export async function studentIdExists(studentId: string) { await ensureDatabase(); const result = await db.execute({ sql: "SELECT 1 FROM profiles WHERE student_id = ? LIMIT 1", args: [studentId] }); return result.rows.length > 0; }
