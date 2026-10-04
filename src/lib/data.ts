export type ReportStatus = "ตามหาอยู่" | "พบแล้ว" | "ปิดประกาศ";
export type ReportType = "ของหาย" | "ของที่พบ";
export const categories = ["อุปกรณ์การเรียน", "อิเล็กทรอนิกส์", "บัตรและเอกสาร", "ของใช้ส่วนตัว"] as const;
export type Category = (typeof categories)[number];
export type Report = { id: string; title: string; type: ReportType; category: Category; location: string; date: string; description: string; contact: string; status: ReportStatus; emoji: string; image?: string; owner: string };