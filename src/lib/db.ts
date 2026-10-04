import { createClient } from "@libsql/client";
import path from "node:path";

const localDatabaseUrl = `file:${path.join(process.cwd(), "data", "camt.db")}`;
export const db = createClient({
  url: process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL ?? localDatabaseUrl,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

let initialized: Promise<void> | undefined;
export function ensureDatabase() {
  initialized ??= (async () => {
    await db.execute(`CREATE TABLE IF NOT EXISTS reports (id TEXT PRIMARY KEY, title TEXT NOT NULL, type TEXT NOT NULL, category TEXT NOT NULL, location TEXT NOT NULL, date TEXT NOT NULL, description TEXT NOT NULL, contact TEXT NOT NULL, status TEXT NOT NULL, emoji TEXT NOT NULL, owner TEXT NOT NULL, image TEXT)`);
    await db.execute(`CREATE TABLE IF NOT EXISTS profiles (id TEXT PRIMARY KEY, student_id TEXT UNIQUE NOT NULL, name TEXT NOT NULL, password_hash TEXT NOT NULL)`);
    try { await db.execute("ALTER TABLE reports ADD COLUMN image TEXT"); } catch { /* Existing databases already have the image column. */ }
    const result = await db.execute("SELECT COUNT(*) AS count FROM reports");
    if (Number(result.rows[0]?.count ?? 0) === 0) {
      const seed = [
        ["r-101", "บัตรนักศึกษา CAMT", "ของหาย", "บัตรและเอกสาร", "อาคารวิศวกรรมซอฟต์แวร์", "28 ก.ย. 2026", "บัตรนักศึกษาสีขาว มีสายคล้องสีเขียว น่าจะหล่นบริเวณชั้น 1", "ภูริวัชร · LINE: @puriwat", "ตามหาอยู่", "🪪", "demo-user"],
        ["r-102", "หูฟังไร้สายสีขาว", "ของที่พบ", "อิเล็กทรอนิกส์", "ห้องสมุด CAMT", "27 ก.ย. 2026", "พบในห้องอ่านหนังสือชั้น 2 เก็บไว้ที่เคาน์เตอร์ประชาสัมพันธ์", "ฟ้าใส · LINE: @fahsai", "พบแล้ว", "🎧", "demo-user"],
        ["r-103", "กระเป๋าผ้าใบเล็กสีกรม", "ของหาย", "ของใช้ส่วนตัว", "โรงอาหารมหาวิทยาลัย", "26 ก.ย. 2026", "กระเป๋าผ้าใบเล็ก มีสมุดโน้ตและปากกาสีดำอยู่ด้านใน", "ณัฐ · โทร. 08x-xxx-xxxx", "ตามหาอยู่", "👜", "other-user"],
      ];
      for (const row of seed) await db.execute({ sql: "INSERT INTO reports (id, title, type, category, location, date, description, contact, status, emoji, owner, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", args: [...row, ""] });
    }
  })();
  return initialized;
}