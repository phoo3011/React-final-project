import SiteNav from "@/components/SiteNav";
import { listReports } from "@/lib/reports";
import ItemsBrowser from "@/components/ItemsBrowser";
import { getDict } from "@/lib/i18n-server";
export const dynamic = "force-dynamic";
export default async function ItemsPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { d } = await getDict();
  return (
    <div className="shell">
      <SiteNav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <div className="eyebrow">{d.items.eyebrow}</div>
            <h1>{d.items.title}</h1>
            <p className="lead">{d.items.lead}</p>
          </div>
        </section>
        <div className="container">
          <ItemsBrowser initialReports={await listReports()} initialQuery={(await searchParams).query ?? ""} />
        </div>
      </main>
    </div>
  );
}
