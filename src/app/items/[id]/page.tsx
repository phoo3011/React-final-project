import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import { getReport } from "@/lib/reports";
import { categoryLabel, formatDate, statusLabel, typeLabel } from "@/lib/i18n";
import { getDict } from "@/lib/i18n-server";
function contactHref(contact: string) { const line = contact.match(/LINE:\s*([^\s]+)/i)?.[1]; const phone = contact.match(/(?:โทร\.|โทรศัพท์)\s*([0-9xX-]+)/)?.[1]; if (line) return `https://line.me/R/ti/p/~${line.replace(/^@/, "")}`; if (phone) return `tel:${phone.replace(/[^0-9+]/g, "")}`; if (contact.includes("@")) return `mailto:${contact}`; return "#contact"; }
export const dynamic = "force-dynamic";
export default async function ItemDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const report = await getReport(id);
  if (!report) notFound();
  const { lang, d } = await getDict();
  return (
    <div className="shell">
      <SiteNav />
      <main className="container">
        <Link href="/items" className="link-label crumb">{d.detail.back}</Link>
        <section className="detail-layout">
          <div className="detail-image">{report.image ? <img src={report.image} alt={report.title} /> : report.emoji}</div>
          <div className="detail-copy">
            <span className={`tag ${report.type === "ของที่พบ" ? "found" : ""}`}>{typeLabel(d, report.type)} · {statusLabel(d, report.status)}</span>
            <h1>{report.title}</h1>
            <p className="lead">{report.description}</p>
            <div className="info-list">
              <div className="info-row"><span>{d.detail.location}</span><strong>{report.location}</strong></div>
              <div className="info-row"><span>{d.detail.posted}</span><strong>{formatDate(report.date, lang)}</strong></div>
              <div className="info-row"><span>{d.detail.category}</span><strong>{categoryLabel(d, report.category)}</strong></div>
              <div className="info-row"><span>{d.detail.contact}</span><strong>{report.contact}</strong></div>
            </div>
            <a className="primary" href={contactHref(report.contact)}>{d.detail.contactButton}</a>
          </div>
        </section>
      </main>
    </div>
  );
}
