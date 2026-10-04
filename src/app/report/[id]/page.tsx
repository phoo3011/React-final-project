import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import ReportForm from "@/components/ReportForm";
import { getReport } from "@/lib/reports";
import { currentUserFromCookies } from "@/lib/auth";
export const dynamic = "force-dynamic";
export default async function EditReportPage({ params }: { params: Promise<{ id: string }> }) { const report = await getReport((await params).id); const userId = await currentUserFromCookies(); if (!report || !userId || report.owner !== userId) notFound(); return <div className="shell"><SiteNav /><main className="container form-layout"><div className="eyebrow">EDIT REPORT</div><h1>แก้ไขประกาศ</h1><p className="lead">อัปเดตรายละเอียดหรือสถานะของประกาศนี้</p><ReportForm initialReport={report} /></main></div>; }