import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { reportSchema } from "@/lib/validation";
import { createReport, listReports } from "@/lib/reports";
import { currentUserFromRequest } from "@/lib/auth";
export async function GET() { return NextResponse.json(await listReports()); }
export async function POST(request: Request) { const owner = await currentUserFromRequest(request); if (!owner) return NextResponse.json({ error: "กรุณาเข้าสู่ระบบ" }, { status: 401 }); const parsed = reportSchema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: "ข้อมูลไม่ถูกต้อง", fields: parsed.error.flatten().fieldErrors }, { status: 400 }); const report = await createReport(parsed.data, owner); revalidatePath("/"); revalidatePath("/items"); revalidatePath("/my-reports"); if (report) revalidatePath(`/items/${report.id}`); return NextResponse.json(report, { status: 201 }); }