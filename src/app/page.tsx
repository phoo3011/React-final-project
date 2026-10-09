import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ReportCard from "@/components/ReportCard";
import { listReports } from "@/lib/reports";
import HomeSearch from "@/components/HomeSearch";
import { getDict } from "@/lib/i18n-server";
export const dynamic = "force-dynamic";
export default async function Home() {
  const reports = (await listReports()).slice(0, 4);
  const { d } = await getDict();
  return (
    <div className="shell">
      <SiteNav />
      <main>
        <section className="hero-dark">
          <div className="wrap">
            <div className="hero">
              <div>
                <div className="eyebrow">{d.home.eyebrow}</div>
                <h1>{d.home.title}</h1>
                <p className="lead">{d.home.lead}</p>
                <HomeSearch />
              </div>
              <div className="hero-note">
                <strong>{d.home.noteTitle}</strong>
                {d.home.note}
                <div className="hero-actions">
                  <Link href="/report" className="primary">{d.home.report}</Link>
                  <Link href="/items" className="secondary-dark">{d.home.browse}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">{d.home.justIn}</div>
                <h2>{d.home.latest}</h2>
              </div>
              <Link href="/items" className="link-label">{d.home.viewAll}</Link>
            </div>
            <div className="item-grid">{reports.map((report) => <ReportCard key={report.id} report={report} />)}</div>
          </div>
        </section>
        <section className="cta-band">
          <div className="wrap">
            <div>
              <h2>{d.home.ctaTitle}</h2>
              <p>{d.home.ctaText}</p>
            </div>
            <Link href="/report" className="secondary-dark">{d.home.ctaButton}</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
