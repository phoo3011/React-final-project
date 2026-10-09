import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ReportCard from "@/components/ReportCard";
import { listReports } from "@/lib/reports";
import ReportActions from "@/components/ReportActions";
import { currentUserFromCookies } from "@/lib/auth";
import { getDict } from "@/lib/i18n-server";
export const dynamic = "force-dynamic";
export default async function MyReportsPage() {
  const userId = await currentUserFromCookies();
  const mine = userId ? await listReports(userId) : [];
  const { d } = await getDict();
  return (
    <div className="shell">
      <SiteNav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <div className="eyebrow">{d.mine.eyebrow}</div>
            <h1>{d.mine.title}</h1>
            <p className="lead">{d.mine.lead}</p>
          </div>
        </section>
        <div className="container">
          {!userId ? (
            <div className="empty">
              <span>{d.mine.loginPrompt}</span>
              <Link className="primary" href="/login">{d.mine.login}</Link>
            </div>
          ) : (
            <>
              <div className="section-head">
                <h2>{d.mine.count(mine.length)}</h2>
                <Link className="primary" href="/report">{d.mine.newPost}</Link>
              </div>
              <div className="item-grid">
                {mine.map((report) => (
                  <div key={report.id}>
                    <ReportCard report={report} />
                    <ReportActions report={report} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
