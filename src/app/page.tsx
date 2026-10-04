import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ReportCard from "@/components/ReportCard";
import { listReports } from "@/lib/reports";
import HomeSearch from "@/components/HomeSearch";
export const dynamic = "force-dynamic";
export default async function Home() { const reports = (await listReports()).slice(0, 3); return <div className="shell"><SiteNav /><main className="container"><section className="hero"><div><div className="eyebrow">CAMT COMMUNITY BOARD · 2026</div><h1>ของหายไม่ใช่เรื่องที่ต้องหาอยู่คนเดียว</h1><p className="lead">พื้นที่กลางสำหรับชาว CAMT ในการตามหาของหาย ส่งคืนของที่พบ และช่วยกันดูแลสิ่งของของเรา</p><HomeSearch /></div><div className="hero-note"><strong>ประกาศล่าสุดจากชุมชน</strong>ทุกชิ้นมีรายละเอียดสถานที่และช่องทางติดต่อที่ตรวจสอบได้ เพื่อให้การส่งคืนง่ายขึ้น</div></section><section><div className="section-head"><div><div className="eyebrow">JUST IN</div><h2>ประกาศล่าสุด</h2></div><Link href="/items" className="meta">ดูทั้งหมด →</Link></div><div className="item-grid">{reports.map((report) => <ReportCard key={report.id} report={report} />)}</div></section></main><footer className="footer">CAMT Lost & Found · พื้นที่เล็ก ๆ ที่ทำให้ของกลับบ้าน</footer></div>; }
