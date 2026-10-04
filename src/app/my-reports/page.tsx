import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ReportCard from "@/components/ReportCard";
import { listReports } from "@/lib/reports";
import ReportActions from "@/components/ReportActions";
import { currentUserFromCookies } from "@/lib/auth";
export const dynamic = "force-dynamic";
export default async function MyReportsPage() { const userId = await currentUserFromCookies(); const mine = userId ? await listReports(userId) : []; return <div className="shell"><SiteNav /><main className="container"><div className="eyebrow">YOUR ACTIVITY</div><h1>ประกาศของฉัน</h1><p className="lead">จัดการประกาศที่คุณสร้างไว้ และอัปเดตสถานะเมื่อของได้กลับบ้าน</p>{!userId ? <div className="empty">กรุณาเข้าสู่ระบบเพื่อดูประกาศของคุณ<br /><Link className="primary" href="/login">เข้าสู่ระบบ</Link></div> : <><div className="section-head"><h2>{mine.length} ประกาศ</h2><Link className="primary" href="/report">+ แจ้งประกาศใหม่</Link></div><div className="item-grid">{mine.map((report) => <div key={report.id}><ReportCard report={report} /><ReportActions report={report} /></div>)}</div></>}</main></div>; }