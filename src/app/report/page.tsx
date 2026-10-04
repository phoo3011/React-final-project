import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ReportForm from "@/components/ReportForm";
export default function ReportPage() { return <div className="shell"><SiteNav /><main className="container form-layout"><div className="eyebrow">NEW REPORT</div><h1>ช่วยเล่าให้เรารู้</h1><p className="lead">ยิ่งรายละเอียดชัดเท่าไร โอกาสที่ของจะกลับไปหาเจ้าของก็ยิ่งมากขึ้น</p><ReportForm /></main></div>; }