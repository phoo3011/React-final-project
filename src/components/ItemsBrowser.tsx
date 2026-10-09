"use client";
import { useState } from "react";
import type { Report } from "@/lib/data";
import { categories } from "@/lib/data";
import ReportCard from "@/components/ReportCard";
import { useI18n } from "@/components/LanguageProvider";
import { categoryLabel } from "@/lib/i18n";
export default function ItemsBrowser({ initialReports, initialQuery }: { initialReports: Report[]; initialQuery: string }) { const { d } = useI18n(); const [query, setQuery] = useState(initialQuery); const [category, setCategory] = useState("ทั้งหมด"); const filtered = initialReports.filter((report) => `${report.title} ${report.location} ${report.category} ${categoryLabel(d, report.category)}`.toLowerCase().includes(query.toLowerCase()) && (category === "ทั้งหมด" || report.category === category)); return <><div className="filters"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={d.items.searchPlaceholder} /><div className="chip-row">{["ทั้งหมด", ...categories].map((item) => <button key={item} type="button" className={`chip${category === item ? " active" : ""}`} onClick={() => setCategory(item)}>{item === "ทั้งหมด" ? d.items.all : categoryLabel(d, item)}</button>)}</div></div>{filtered.length ? <div className="item-grid">{filtered.map((report) => <ReportCard key={report.id} report={report} />)}</div> : <div className="empty">{d.items.empty}</div>}</>; }