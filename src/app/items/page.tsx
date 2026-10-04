import SiteNav from "@/components/SiteNav";
import { listReports } from "@/lib/reports";
import ItemsBrowser from "@/components/ItemsBrowser";
export const dynamic = "force-dynamic";
export default async function ItemsPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) { return <div className="shell"><SiteNav /><main className="container"><div className="eyebrow">THE BOARD</div><h1>ประกาศทั้งหมด</h1><p className="lead">ค้นหาของหายและของที่เพื่อน ๆ ใน CAMT พบเจอ</p><ItemsBrowser initialReports={await listReports()} initialQuery={(await searchParams).query ?? ""} /></main></div>; }