"use client";
import Link from "next/link";
import { useI18n } from "@/components/LanguageProvider";
import { formatDate, typeLabel } from "@/lib/i18n";
import type { Report } from "@/lib/data";
export default function ReportCard({ report }: { report: Report }) { const { lang, d } = useI18n(); return <Link className="item-card" href={`/items/${report.id}`}><div className="item-image">{report.image ? <img src={report.image} alt={report.title} /> : report.emoji}</div><div className="item-body"><span className={`tag ${report.type === "ของที่พบ" ? "found" : ""}`}>{typeLabel(d, report.type)}</span><h3 className="item-title">{report.title}</h3><div className="meta">{report.location} · {formatDate(report.date, lang)}</div><span className="link-label">{d.card.details}</span></div></Link>; }