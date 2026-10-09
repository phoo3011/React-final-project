import SiteNav from "@/components/SiteNav";
import ReportForm from "@/components/ReportForm";
import { getDict } from "@/lib/i18n-server";
export default async function ReportPage() {
  const { d } = await getDict();
  return (
    <div className="shell">
      <SiteNav />
      <main>
        <section className="page-hero">
          <div className="wrap narrow">
            <div className="eyebrow">{d.report.eyebrow}</div>
            <h1>{d.report.title}</h1>
            <p className="lead">{d.report.lead}</p>
          </div>
        </section>
        <div className="container form-layout">
          <ReportForm />
        </div>
      </main>
    </div>
  );
}
