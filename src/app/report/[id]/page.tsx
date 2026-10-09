import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import ReportForm from "@/components/ReportForm";
import { getReport } from "@/lib/reports";
import { currentUserFromCookies } from "@/lib/auth";
import { getDict } from "@/lib/i18n-server";
export const dynamic = "force-dynamic";
export default async function EditReportPage({ params }: { params: Promise<{ id: string }> }) {
  const report = await getReport((await params).id);
  const userId = await currentUserFromCookies();
  if (!report || !userId || report.owner !== userId) notFound();
  const { d } = await getDict();
  return (
    <div className="shell">
      <SiteNav />
      <main>
        <section className="page-hero">
          <div className="wrap narrow">
            <div className="eyebrow">{d.report.editEyebrow}</div>
            <h1>{d.report.editTitle}</h1>
            <p className="lead">{d.report.editLead}</p>
          </div>
        </section>
        <div className="container form-layout">
          <ReportForm initialReport={report} />
        </div>
      </main>
    </div>
  );
}
