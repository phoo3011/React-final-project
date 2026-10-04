import { create } from "zustand";
import type { Report } from "@/lib/data";

type ReportStore = { reports: Report[]; setReports: (reports: Report[]) => void; removeReport: (id: string) => void; replaceReport: (report: Report) => void };
export const useReportStore = create<ReportStore>((set) => ({ reports: [], setReports: (reports) => set({ reports }), removeReport: (id) => set((state) => ({ reports: state.reports.filter((report) => report.id !== id) })), replaceReport: (report) => set((state) => ({ reports: state.reports.some((item) => item.id === report.id) ? state.reports.map((item) => item.id === report.id ? report : item) : [report, ...state.reports] })) }));